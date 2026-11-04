import { reply_words } from "./reply_words.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_bible_1jn_4_7 } from "./reply_bible_1jn_4_7.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_bible_1jn_3_23 } from "./reply_bible_1jn_3_23.mjs";
import { reply_bible_1jn_4_8 } from "./reply_bible_1jn_4_8.mjs";
import { reply_bible_1jn_4_9 } from "./reply_bible_1jn_4_9.mjs";
import { reply_bible_1jn_4_10 } from "./reply_bible_1jn_4_10.mjs";
export function reply_bible_verses() {
  "Every verse the rules know how to read, one at a time. The words that lead into a passage are read only in front of its first verse, because on their own they say nothing to answer.";
  let lead_in = reply_words(
    "for in the word of the lord it is written in the first john verses 7 through 10",
  );
  let fn = reply_optional(lead_in);
  let noted = reply_bible_1jn_4_7();
  let seven = reply_sequence([fn, noted]);
  let noted2 = reply_bible_1jn_3_23();
  let noted3 = reply_bible_1jn_4_8();
  let noted4 = reply_bible_1jn_4_9();
  let noted5 = reply_bible_1jn_4_10();
  let verses = reply_choice([noted2, seven, noted3, noted4, noted5]);
  return verses;
}
