import { text_apostrophes } from "./text_apostrophes.mjs";
import { reply_choice_optional } from "./reply_choice_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_cant() {
  "The word cant, with or without an apostrophe.";
  "On its own it can mean two things: can't, or a cantonment in an address. So it is one piece, and each reader decides what it means.";
  let marks = text_apostrophes();
  let o_mark = reply_choice_optional(marks);
  let word = reply_sequence(["can", o_mark, "t"]);
  return word;
}
