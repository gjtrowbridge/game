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

    // Create images
    this.tree_img = document.getElementById('tree');
    this.hero_img = document.getElementById('hero');

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
      const xLeft = (item.column / game.columns) * this.props.width;
      const yTop = (item.row / game.rows) * this.props.height;

      if (item.type === 'tree') {
        this.context.drawImage(this.tree_img, xLeft + 1, yTop + 1, columnWidth - 2, rowHeight - 2);
      } else if (item.type === 'hero') {
        this.context.drawImage(this.hero_img, xLeft + 1, yTop + 1, columnWidth - 2, rowHeight - 2);
      }
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
