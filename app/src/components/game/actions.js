import {
  PLAYER_ONE_ENTER,
  PLAYER_ONE_MOVE_LEFT,
  PLAYER_ONE_MOVE_RIGHT,
  PLAYER_ONE_JUMP,
  PLAYER_TWO_ENTER,
  PLAYER_TWO_MOVE_LEFT,
  PLAYER_TWO_MOVE_RIGHT,
  PLAYER_TWO_JUMP,
  GAME_OVER,
  GAME_START,
  SCORE
} from "./consts";

export const playerOneEnter = () => ({
  type: PLAYER_ONE_ENTER,
  socket: true
});

export const playerOneMoveLeft = () => ({
  type: PLAYER_ONE_MOVE_LEFT,
  socket: true
});

export const playerOneMoveRight = () => ({
  type: PLAYER_ONE_MOVE_RIGHT,
  socket: true
});

export const playerOneJump = () => ({
  type: PLAYER_ONE_JUMP,
  socket: true
});

export const playerTwoEnter = () => ({
  type: PLAYER_TWO_ENTER,
  socket: true
});

export const playerTwoMoveLeft = () => ({
  type: PLAYER_TWO_MOVE_LEFT,
  socket: true
});

export const playerTwoMoveRight = () => ({
  type: PLAYER_TWO_MOVE_RIGHT,
  socket: true
});

export const playerTwoJump = () => ({
  type: PLAYER_TWO_JUMP,
  socket: true
});

export const gameOver = () => ({
  type: GAME_OVER,
  socket: true
});

export const gameStart = () => ({
  type: GAME_START,
  socket: true
});

export const score = () => ({
  type: SCORE,
  socket: true
});
