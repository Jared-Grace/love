import { arguments_assert } from "./arguments_assert.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_appeal_help_needed() {
  arguments_assert(arguments, 0);
  ("Saying help is needed for the people an appeal is about, the same ask as please help.");
  ("Argent is kept beside urgent because it is how the word was really written.");
  let urgent = reply_choice(["urgent", "argent"]);
  let o_urgent = reply_optional(urgent);
  let needed = reply_sequence([
    "we",
    "need",
    "your",
    o_urgent,
    "help",
    "for",
    "them",
  ]);
  return needed;
}
