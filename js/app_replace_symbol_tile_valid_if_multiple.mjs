import { each } from "../../love/js/each.mjs";
import { app_replace_symbol_tile_valid_if_curried_right } from "../../love/js/app_replace_symbol_tile_valid_if_curried_right.mjs";
export function app_replace_symbol_tile_valid_if_multiple(
  lists,
  valid,
  solved,
) {
  let lambda = app_replace_symbol_tile_valid_if_curried_right(valid, solved);
  each(lists, lambda);
}
