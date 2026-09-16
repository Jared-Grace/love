import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_scale_translate_set(component, left, top, scale) {
  arguments_assert(arguments, 4);
  ("Draws an element bigger or smaller and shifted sideways, without laying any of it out");
  ("again. Everything inside it comes with it.");
  ("This is the cheap way to change how big a thing looks, and the difference is not small.");
  ("Resizing a map by giving its squares a new size makes the page work out where every");
  ("square, person and sign on it goes - measured on a laptop at about thirty");
  ("milliseconds for a street of two thousand pieces, against a frame that lasts under");
  ("seventeen. A scale drawn on top is handed to the part of the browser that draws, which");
  ("has the picture already and only has to put it down somewhere else: the same");
  ("measurement came back at nought. That is the whole difference between a zoom that");
  ("glides and one that lurches, so a journey uses this for the travelling and writes the");
  ("real size once, at the end.");
  ("The corner is the point everything grows out of, and it is the element's own top left");
  ("because that is the corner every coordinate on it is already counted from. Grown from");
  ("the middle instead - which is what a browser does when nobody says - every square on");
  ("the grid lands half a grid away from where the sums put it.");
  ("The shift is written BEFORE the scale, because the two are read in order and each one");
  ("applies to what the ones after it produced. Written the other way round the shift is");
  ("itself scaled, so a journey drifts further off the further it has zoomed in.");
  ("It says in advance that this is the thing about to move. That lets the browser keep the");
  ("picture ready to be put down again rather than making it afresh each frame, and it is");
  ("taken back the moment the movement ends - left on, it is a promise about the future");
  ("that costs memory for as long as it stands.");
  let places = text_combine_multiple([
    "translate(",
    left,
    "px, ",
    top,
    "px) scale(",
    scale,
    ")",
  ]);
  html_style_set(component, "transformOrigin", "0 0");
  html_style_set(component, "willChange", "transform");
  html_style_set(component, "transform", places);
}
