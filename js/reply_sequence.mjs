import { list_empty_is } from "./list_empty_is.mjs";
import { reply_matches } from "./reply_matches.mjs";
import { reply_wrap_invoke } from "./reply_wrap_invoke.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { each_async } from "./each_async.mjs";
export function reply_sequence(sequence_fns) {
  let fn = async function reply_sequence_matches(possibilities) {
    list_is_assert_json(possibilities, {
      hint: "the possibilities to match against should be a list",
    });
    async function lambda(sequence_fn) {
      possibilities = await reply_wrap_invoke(sequence_fn, possibilities);
      possibilities = reply_matches(possibilities);
      let e = list_empty_is(possibilities);
      if (e) {
        return true;
      }
    }
    await each_async(sequence_fns, lambda);
    return possibilities;
  };
  return fn;
}
