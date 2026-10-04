import { app_code_rectangles_edges_marked_draw } from "./app_code_rectangles_edges_marked_draw.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_rectangles_edges_draw(
  parent,
  columns,
  rows,
  first,
  second,
  across,
  down,
) {
  arguments_assert(arguments, 7);
  ("a picture of two rectangles of squares with their edges numbered, and no squares marked beyond the ones both cover");
  let grid = app_code_rectangles_edges_marked_draw(
    parent,
    columns,
    rows,
    first,
    second,
    across,
    down,
    null,
  );
  return grid;
}
