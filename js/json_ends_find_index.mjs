import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_negative_not_max_try } from "./list_map_negative_not_max_try.mjs";
import { text_index_of_last_try_curried } from "./text_index_of_last_try_curried.mjs";
import { json_ends } from "./json_ends.mjs";
export function json_ends_find_index(json) {
  "$plain json";
  "Where the JSON written inside a longer piece of text finishes, which is the last closing brace or bracket in it.";
  "★ THE LATEST CLOSER IS THE ANSWER, AND TAKING THE EARLIER OF THE TWO CUT EVERY OBJECT WHOSE LAST FIELD IS A LIST. That is the commonest shape there is. This asked for the last closing brace and the last closing square bracket and then took the smaller of the two, so a text ending in a square bracket followed by a brace lost the brace and would not parse - proved on a run report of the plain shape a list inside an object, which threw. The opening end is the earliest opener and this end is the latest closer; they are opposite questions and cannot share one answer.";
  arguments_assert(arguments, 1);
  let list = json_ends();
  let c = text_index_of_last_try_curried(json);
  let right = list_map_negative_not_max_try(list, c);
  return right;
}
