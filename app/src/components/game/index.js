export { default as GameEngine } from "./game";

export {
  PLAYER_ONE_ENTER,
  PLAYER_ONE_MOVE_LEFT,
  PLAYER_ONE_MOVE_RIGHT,
  PLAYER_TWO_ENTER,
  PLAYER_TWO_MOVE_LEFT,
  PLAYER_TWO_MOVE_RIGHT,
  GAME_OVER,
  GAME_START,
  SCORE
} from "./consts";

export {
  playerOneEnter,
  playerOneMoveLeft,
  playerOneMoveRight,
  playerTwoEnter,
  playerTwoMoveLeft,
  playerTwoMoveRight,
  gameOver,
  gameStart,
  score
} from "./actions";

export { default as Game } from "./connectedGame";
