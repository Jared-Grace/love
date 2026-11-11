import { reply_bible_lead } from "./reply_bible_lead.mjs";
import { reply_bible_php_4_6 } from "./reply_bible_php_4_6.mjs";
import { reply_bible_php_4_7 } from "./reply_bible_php_4_7.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_1jn_4_7 } from "./reply_bible_1jn_4_7.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_bible_1jn_3_23 } from "./reply_bible_1jn_3_23.mjs";
import { reply_bible_1jn_4_8 } from "./reply_bible_1jn_4_8.mjs";
import { reply_bible_1jn_4_9 } from "./reply_bible_1jn_4_9.mjs";
import { reply_bible_1jn_4_10 } from "./reply_bible_1jn_4_10.mjs";
export function reply_bible_verses() {
  "Every verse the rules know how to read, one at a time, each of which may have a heading in front of it saying a verse is coming and where it is. A heading alone is never read, because a verse must follow it.";
  let lead = reply_bible_lead();
  let noted = reply_bible_1jn_4_7();
  let noted2 = reply_bible_1jn_3_23();
  let noted3 = reply_bible_1jn_4_8();
  let noted4 = reply_bible_1jn_4_9();
  let noted5 = reply_bible_1jn_4_10();
  let php_ = reply_bible_php_4_6();
  let php_7 = reply_bible_php_4_7();
  let verse = reply_choice([
    noted2,
    noted,
    noted3,
    noted4,
    noted5,
    php_,
    php_7,
  ]);
  let verses = reply_sequence([lead, verse]);
  return verses;
}
