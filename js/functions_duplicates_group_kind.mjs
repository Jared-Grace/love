import { list_map_async } from "./list_map_async.mjs";
import { function_duplicate_kind } from "./function_duplicate_kind.mjs";
import { duplicate_kind_parallel } from "./duplicate_kind_parallel.mjs";
import { list_remove_every } from "./list_remove_every.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export async function functions_duplicates_group_kind(names) {
  "What sort of thing a whole group of same-shaped functions is, asked of every one of them rather than of whichever happened to sort first.";
  "Being alike on purpose is the one answer that has to be true of everybody. One function alone cannot say a pair was meant, so a group where only some carry the mark is not answered - it is reported as the work it looked like, which is what puts a half-marked pair in front of a person instead of quietly settling it.";
  "The other answers are read off the shape, and the shape is what gathered the group in the first place, so every member gives the same one and the first is as good as any.";
  let kinds = await list_map_async(names, function_duplicate_kind);
  let parallel = duplicate_kind_parallel();
  list_remove_every(kinds, parallel);
  let all_parallel = list_empty_is(kinds);
  if (all_parallel) {
    return parallel;
  }
  let kind = list_first(kinds);
  return kind;
}
