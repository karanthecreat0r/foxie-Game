import game, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    //animation frame is used for js animation it tells browser this function that provied to , key is tell the browser hey browser do this
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame(nextAnimationFrame);
}

init();
