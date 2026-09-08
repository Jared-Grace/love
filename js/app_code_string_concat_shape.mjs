import { app_code_string_concat_tile } from "./app_code_string_concat_tile.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
export function app_code_string_concat_shape(parent) {
  "the shape of a string concatenation as ONE code tile: two quoted grey placeholders joined by a plus, so it reads as one piece of code rather than three separate tiles";
  let tile = app_code_string_concat_tile(
    parent,
    app_code_placeholder_dots,
    app_code_placeholder_dots,
  );
  return tile;
}
