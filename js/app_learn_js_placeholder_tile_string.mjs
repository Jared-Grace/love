import { app_learn_js_string_tile } from "./app_learn_js_string_tile.mjs";
import { app_learn_js_placeholder_dots } from "./app_learn_js_placeholder_dots.mjs";
export function app_learn_js_placeholder_tile_string(parent) {
  "a code tile holding a quoted, greyed \"...\" standing for any string - the quoted counterpart of the number placeholder tile";
  "The quotes come from the string tile and the dots from the one place the course keeps them, so this is only the pairing of the two. Both halves used to be written out here, which made this a third place deciding what a quoted shape looks like.";
  let tile = app_learn_js_string_tile(parent, app_learn_js_placeholder_dots);
  return tile;
}
