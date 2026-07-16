import { each_nested } from "../../love/js/each_nested.mjs";
import { app_replace_symbol_tile_valid_if_curried_right } from "../../love/js/app_replace_symbol_tile_valid_if_curried_right.mjs";
export function app_replace_symbol_tile_valid_if_multiple_nested(
  lists,
  valid,
  solved,
) {
  let lambda = app_replace_symbol_tile_valid_if_curried_right(valid, solved);
  each_nested(lists, lambda);
}
