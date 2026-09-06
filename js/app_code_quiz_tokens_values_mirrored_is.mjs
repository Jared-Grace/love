import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_token_places_of_kind } from "./app_code_quiz_token_places_of_kind.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_size } from "./list_size.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_mirrored_is } from "./list_mirrored_is.mjs";
export function app_code_quiz_tokens_values_mirrored_is(tokens) {
  "Whether a line's values are two halves of each other turned round: an even count of them, reading the same backwards as forwards. (7 === 6) === (6 === 7) is, because its values are 7, 6, 6, 7, and (7 === 7) === (6 === 6) is not.";
  "It is asked because a mirror is the whole of what a swapping lesson teaches. A line that says the same thing with its two sides turned round is a line whose values read alike from either end, and a learner who deals those values into 7, 7, 6, 6 has written something true out of the same tiles that is no longer about swapping at all. Reading the mirror off the line means the lesson never has to say which lesson it is.";
  "A SWAP NEEDS TWO HALVES TO EXCHANGE. An odd count of values reads the same backwards whenever the ones around the middle do, and the middle one is its own partner - so nothing has been turned round and there was never a swap to protect. Counted without that, 8 - 3 > 8 and 4 > 2 * 4 and true && false || true were all read as swapping lessons on the strength of their first and last value agreeing, and every other true arrangement of their tiles was refused on a lesson about taking away, about times, and about which join binds first.";
  "Only the value tiles are read. A bracket or a sign holds its place rather than standing for something, so it is never dealt anywhere else and its position says nothing about how a learner arranged the line.";
  arguments_assert(arguments, 1);
  let places = app_code_quiz_token_places_of_kind(tokens, "value");
  let values = list_places_get(tokens, places);
  let size = list_size(values);
  let remainder = modulo(size, 2);
  let halved = equal(remainder, 0);
  if (not(halved)) {
    return false;
  }
  let mirrored = list_mirrored_is(values);
  return mirrored;
}
