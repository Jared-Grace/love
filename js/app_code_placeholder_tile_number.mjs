import { app_code_code_tile } from "./app_code_code_tile.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
export function app_code_placeholder_tile_number(parent) {
  "a code tile holding a greyed ... standing for any number - the unquoted number counterpart of the quoted string placeholder tile";
  "Nothing of its own is drawn: it is a code tile with the course's grey gap inside it and no quotes, which is exactly what any number looks like when the number is left out.";
  let tile = app_code_code_tile(parent, app_code_placeholder_dots);
  return tile;
}
