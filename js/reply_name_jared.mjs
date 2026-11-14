import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_name_jared() {
  "The name of the person the replies go out from, as people write it to him: Jared, Jarred, Jered, Jerred.";
  "★ SPELLINGS COME FROM REAL MESSAGES: one person wrote all three of jared, jered and jarred across six greetings that went unanswered (2026-11-14).";
  let vowel = reply_choice(["a", "e"]);
  let double = reply_optional("r");
  let name = reply_sequence(["j", vowel, "r", double, "ed"]);
  return name;
}
