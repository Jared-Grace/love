import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_token_places_of_kind } from "./app_code_quiz_token_places_of_kind.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_index_of_curried } from "./list_index_of_curried.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_quiz_tokens_value_repeats(tokens) {
  "Which of a line's value tiles are the same tile as which, written as one place number apiece. 1 < 3 && 3 < 6 answers 0, 1, 1, 2 - its second and third values are the same word and nothing else is repeated - while 1 < 3 && 5 < 6 answers 0, 1, 2, 3.";
  "It is the whole line's version of the question a join already asks about its own two neighbours. Where a repeat carries the meaning of a line, moving the repeat somewhere else writes a different line out of the same tiles, and a check that only reads the value cannot see that it did: (7 === 6) === (6 === 7) and (7 === 7) === (6 === 6) are both true, and only the first is the mirror the lesson is about.";
  "The numbers name first appearances rather than the tiles themselves, so two lines are compared by where their repeats fall and not by which words they happen to repeat. That is what lets 2, 9, 5, 4 and 5, 4, 2, 9 answer alike while 7, 6, 6, 7 and 7, 7, 6, 6 do not.";
  "Only the value tiles are read. A bracket or a sign holds its place in a line rather than standing for something, so it is never dealt anywhere else and a repeat of one says nothing about how the line was written.";
  arguments_assert(arguments, 1);
  let places = app_code_quiz_token_places_of_kind(tokens, "value");
  let values = list_places_get(tokens, places);
  let first_place_of = list_index_of_curried(values);
  let repeats = list_map(values, first_place_of);
  return repeats;
}
