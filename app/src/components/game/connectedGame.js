import { connect } from "react-redux";
//import Search from './components/Search';
import { component } from "./component";

import {
  playerOneEnter,
  playerOneMoveLeft,
  playerOneMoveRight,
  playerOneJump,
  playerTwoEnter,
  playerTwoMoveLeft,
  playerTwoMoveRight,
  playerTwoJump,
  gameOver,
  gameStart,
  score
} from "./actions";

//import selectors

const mapStateToProps = state => ({
  // searchTerm: getSearchTerm(state),
  // suggestions: getSuggestions(state),
  // descriptiveTerm: getDescriptiveTerm(state)
});

const mapDispatchToProps = {
  playerOneEnter,
  playerOneMoveLeft,
  playerOneMoveRight,
  playerOneJump,
  playerTwoEnter,
  playerTwoMoveLeft,
  playerTwoMoveRight,
  playerTwoJump,
  gameOver,
  gameStart,
  score
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
