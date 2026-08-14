import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_coordinates_index_member_is } from "./g_coordinates_index_member_is.mjs";
export function g_coordinates_member_is(coordinates) {
  "a test for whether a tile is one of THESE tiles: made once, asked many times.";
  "the index is built here rather than by the caller, because a caller that only wants the question answered should not have to know that the answer is kept in an object keyed by tile - and the ones that hand the same tiles to list_filter three times over were each building their own.";
  let index = g_coordinates_index(coordinates);
  let member_is = g_coordinates_index_member_is(index);
  return member_is;
}
