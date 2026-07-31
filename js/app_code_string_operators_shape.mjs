import { app_code_operators_shape_list } from "./app_code_operators_shape_list.mjs";
import { app_code_placeholder_tile_string } from "./app_code_placeholder_tile_string.mjs";
export function app_code_string_operators_shape(
  parent,
  operator_a,
  operator_b,
) {
  "the shape shown in a string-comparison lesson's title: a quoted grey placeholder string, then the two operators the lesson teaches, EACH token in its own code tile. Thin wrapper over the shared operators-shape helper with the quoted string placeholder.";
  let operators = [operator_a, operator_b];
  let tile = app_code_operators_shape_list(
    parent,
    app_code_placeholder_tile_string,
    operators,
  );
  return tile;
}
