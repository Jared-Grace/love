import { app_learn_js_arrow_turned } from "./app_learn_js_arrow_turned.mjs";
export function app_learn_js_arrow_turned_draw(degrees) {
  "a drawing of the code app's arrow turned degrees clockwise from rightwards, for one square";
  function draw(square) {
    app_learn_js_arrow_turned(square, degrees);
  }
  return draw;
}
