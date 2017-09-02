import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'CSS/Game.scss';

class Game extends React.Component {
  componentDidMount() {
    // TODO: Make this a ref?
    this.canvas = document.getElementById('game-canvas');
    this.context = this.canvas.getContext('2d');
    console.log(this.props);
  }
  drawGameOnCanvas() {
    // const gameState = this.props.gameState;

    // Clear canvas
    this.context.clearRect(0, 0, this.props.width, this.props.height);

    // Draw on canvas
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 50, 50);

    // Draw the grid

    // Draw all items on the grid
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
  //gameState: PropTypes.object.isRequired,
};

const mapStateToProps = function mapStateToProps(state) {
  return {
    game: state.game,
  };
};

const ConnectedGame = connect(mapStateToProps)(Game);

export default ConnectedGame;
