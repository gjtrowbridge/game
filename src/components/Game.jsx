import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { imageIsLoaded } from 'Actions/images';

import 'CSS/Game.scss';

const treeImgName = 'tree';
const heroImgName = 'hero';

class Game extends React.Component {
  constructor(props) {
    super(props);

    // Bind each method so it has a reference to the component
    this.createImages = this.createImages.bind(this);
    this.drawGameOnCanvas = this.drawGameOnCanvas.bind(this);
    this.imagesAreLoaded = this.imagesAreLoaded.bind(this);
  }
  componentDidMount() {
    // Create images for use in drawing on the canvas
    this.createImages();
  }
  componentDidUpdate() {
    if (this.imagesAreLoaded()) {
      this.drawGameOnCanvas();
    }
  }
  // Create image elements to use for drawing on the canvas
  // When the images load, dispatch a state change that indicates they are ready to be used
  createImages() {
    const treeImg = new Image();
    const heroImg = new Image();

    treeImg.onload = () => {
      this.props.markImageAsLoaded(treeImgName, treeImg);
    };
    heroImg.onload = () => {
      this.props.markImageAsLoaded(heroImgName, heroImg);
    };

    treeImg.src = 'http://www.clker.com/cliparts/v/i/D/D/v/A/simple-tree-hi.png';
    heroImg.src = 'https://stephm29.files.wordpress.com/2012/11/goofy_knight_in_shining_armor_with_sword_cartoon_poster-r7ce73b73381e4cdeb8767fc341ad94e8_wad_4001.jpg';
  }
  // Check whether all required images were successfully loaded to the DOM
  imagesAreLoaded() {
    return (
      treeImgName in this.props.images &&
      heroImgName in this.props.images
    );
  }
  // Draw the game state on the canvas
  drawGameOnCanvas() {
    this.context = this.canvas.getContext('2d');

    const game = this.props.game;

    // Retrieve references to the necessary images
    const treeImg = this.props.images[treeImgName];
    const heroImg = this.props.images[heroImgName];

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
    Object.values(game.items).forEach((item) => {
      const xLeft = (item.column / game.columns) * this.props.width;
      const yTop = (item.row / game.rows) * this.props.height;

      if (item.type === 'tree') {
        this.context.drawImage(treeImg, xLeft + 1, yTop + 1, columnWidth - 2, rowHeight - 2);
      } else if (item.type === 'hero') {
        this.context.drawImage(heroImg, xLeft + 1, yTop + 1, columnWidth - 2, rowHeight - 2);
      } else if (item.type === 'goal') {
        this.context.font = '30px Arial';
        this.context.fillText('X', xLeft + columnWidth / 2, yTop + rowHeight / 2);
      }
    });
  }
  render() {
    return (
      <canvas
        id="game-canvas"
        height={this.props.height}
        width={this.props.width}
        ref={(canvas) => { this.canvas = canvas; }}
      />
    );
  }
}

Game.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  game: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
  markImageAsLoaded: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    game: state.game,
    images: state.images,
  };
};
const mapDispatchToProps = (dispatch) => {
  const markImageAsLoaded = (imgName, imgElement) => {
    dispatch(imageIsLoaded(imgName, imgElement));
  };
  return {
    markImageAsLoaded,
  };
};

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);

export default ConnectedGame;
