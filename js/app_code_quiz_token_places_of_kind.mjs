import { app_code_quiz_token_kind } from "./app_code_quiz_token_kind.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get } from "./list_get.mjs";
import { list_indexes } from "./list_indexes.mjs";
export function app_code_quiz_token_places_of_kind(tokens, kind) {
  "Where in a line of tiles the tiles of one kind sit, counted from zero.";
  "The places are handed back rather than the tiles themselves, because anything dealing the tiles round needs to know both what it is holding and where to put it back down. Asking twice - once for the places, once for the tiles at them - keeps the two answers about one list and so keeps them in step.";
  let places = list_indexes(tokens);
  function of_kind_is(at) {
    let token = list_get(tokens, at);
    let token_kind = app_code_quiz_token_kind(token);
    let wanted = equal(token_kind, kind);
    return wanted;
  }
  let found = list_filter(places, of_kind_is);
  return found;
}
