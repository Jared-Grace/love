import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { sleep } from "./sleep.mjs";
import { add } from "./add.mjs";
export async function app_g_hero_fx_settled(fx) {
  arguments_assert(arguments, 1);
  ("Waits until nothing is left drawn on the fire sheet - every flame, ember, puff of smoke");
  ("and every darkening of the street has finished and taken itself off again.");
  ("It is asked before the camera travels, and the whole reason is that the sheet lies over");
  ("the screen rather than in the street. Everything on it is drawn at the place ON THE");
  ("SCREEN where the thing it belongs to happened to be, and it has no way of learning that");
  ("the street has moved since. So a camera that sets off while smoke is still rising leaves");
  ("the smoke hanging over a street that is no longer under it, at the size it was drawn at");
  ("rather than the size the street has grown to.");
  ("The sheet is asked whether it is EMPTY rather than told how long to wait. Every piece");
  ("drawn on it already takes itself off the moment it is done, so the sheet answers the");
  ("question exactly. A length of time would be a fifth copy of four numbers written");
  ("elsewhere, and it would go quietly wrong the day somebody draws a fifth thing with a");
  ("length of its own.");
  ("It gives up after a while rather than waiting for ever. A piece that somehow never took");
  ("itself off would otherwise stop the game outright, and a picture drawn in the wrong");
  ("place is a far smaller thing to be wrong about than a game that will not go on.");
  let element = html_component_element_get(fx);
  let step = 60;
  let cap = 6000;
  let waited = 0;
  while (less_than(waited, cap)) {
    let count = element.childElementCount;
    let clear = equal(count, 0);
    if (clear) {
      return;
    }
    await sleep(step);
    waited = add(waited, step);
  }
}
