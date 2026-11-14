import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_name_jared() {
  "The name of the person the replies go out from, as people write it, misspellings included: Jared, Jarred, Jered, Jerad, Jarad, Jarid, Jarod, Jarrod, Jard, Jaredd.";
  "★ SPELLINGS COME FROM REAL MESSAGES: one person wrote all three of jared, jered and jarred across six greetings that went unanswered (2026-11-14). The rest were asked for outright - a misspelling of the name is still the name - so the shape is loose on purpose: either first vowel, the r once or twice, any middle vowel or none, the d once or twice.";
  let vowel_first = reply_choice(["a", "e"]);
  let r_double = reply_optional("r");
  let vowel_second_choice = reply_choice(["e", "a", "i", "o"]);
  let vowel_second = reply_optional(vowel_second_choice);
  let d_double = reply_optional("d");
  let name = reply_sequence([
    "j",
    vowel_first,
    "r",
    r_double,
    vowel_second,
    "d",
    d_double,
  ]);
  return name;
}
