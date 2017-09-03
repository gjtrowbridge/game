import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'CSS/Game.scss';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.drawGameOnCanvas = this.drawGameOnCanvas.bind(this);
  }
  componentDidMount() {
    // TODO: Make this a ref?
    this.canvas = document.getElementById('game-canvas');
    this.context = this.canvas.getContext('2d');
    console.log(this.props);
    this.drawGameOnCanvas();
  }
  drawGameOnCanvas() {
    const game = this.props.game;

    // Clear canvas
    this.context.clearRect(0, 0, this.props.width, this.props.height);

    // Draw the rows
    const rowHeight = this.props.height / game.rows;
    for (let i = 1; i < game.rows; i++) {
      const y = rowHeight * i;
      this.context.moveTo(0, y);
      this.context.lineTo(this.props.width, y);
    }

    // Draw the columns
    const columnWidth = this.props.width / game.columns;
    for (let i = 1; i < game.columns; i++) {
      const x = columnWidth * i;
      this.context.moveTo(x, 0);
      this.context.lineTo(x, this.props.height);
    }
    this.context.stroke();

    // Draw all items on the grid
    game.items.forEach((item) => {
      const xCenter = ((item.column - 0.5) / game.columns) * this.props.width;
      const yCenter = ((item.row - 0.5) / game.rows) * this.props.height;
      console.log('drawing', item, xCenter, yCenter);

      this.context.beginPath();
      this.context.arc(xCenter, yCenter, columnWidth / 2, 0, 2 * Math.PI);
      this.context.stroke();
    });
  }
  render() {
    return (
      <canvas id="game-canvas" height={this.props.height} width={this.props.width} />
    );
  }
}

Game.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = function mapStateToProps(state) {
  return {
    game: state.game,
  };
};

const ConnectedGame = connect(mapStateToProps)(Game);

export default ConnectedGame;
