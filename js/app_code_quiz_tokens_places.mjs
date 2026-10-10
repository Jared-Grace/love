import { arguments_assert } from "./arguments_assert.mjs";
import { js_tokenizer } from "./js_tokenizer.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_quiz_tokens_places(code) {
  arguments_assert(arguments, 1);
  ("where in the code each token stands, as { start, end }, cut the way JavaScript cuts it: a string, quotes and all, is one token, as the human asked 2026-10-10");
  ("Rejected: a string as three tokens, its quotes apart from its text, the way the unscramble quiz cuts it. That matched the pieces a learner builds code out of, but it is not what a token is.");
  let tokens = js_tokenizer(code);
  function place_of(token) {
    let start = property_get(token, "start");
    let end = property_get(token, "end");
    let place = {
      start,
      end,
    };
    return place;
  }
  let places = list_map(tokens, place_of);
  return places;
}
