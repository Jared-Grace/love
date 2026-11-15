import { arguments_assert } from "./arguments_assert.mjs";
import { reply_wrap_invoke } from "./reply_wrap_invoke.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { reply_on_match_output_add } from "./reply_on_match_output_add.mjs";
export function reply_on_said_output_add(fn_a, output) {
  arguments_assert(arguments, 2);
  ("A rule that reads what the given rule reads, and adds one more line to every reading that already says something back.");
  ("★ A READING THAT SAYS NOTHING STAYS SILENT. A message that was read and deliberately left unanswered - an advert, a stretch nobody here can read - is answered with nothing on purpose, and a line added to it would be the first thing ever said to it. Said to spam, any line at all tells the sender the account is read.");
  ("Not picked: adding the line on every match, as the existing output steps do, for the reason above.");
  let fn = async function reply_on_said_output_add_matches(possibilities) {
    let read = await reply_wrap_invoke(fn_a, possibilities);
    for (let possibility of read) {
      let matches = property_get(possibility, "matches");
      let outputs = property_get(possibility, "outputs");
      let b = list_empty_is(outputs);
      let said = not(b);
      if (matches && said) {
        reply_on_match_output_add(possibility, output);
      }
    }
    return read;
  };
  return fn;
}
