import { fn_name } from "./fn_name.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_word_has_is } from "./reply_word_has_is.mjs";
import { reply_word_no_not } from "./reply_word_no_not.mjs";
import { reply_word_love_loves_loveth } from "./reply_word_love_loves_loveth.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_because_for } from "./reply_word_because_for.mjs";
import { reply_word_charity_love } from "./reply_word_charity_love.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_8() {
  ("1 John 4:8 said whole, in the words of the English Bibles nobody owns, lined up.");
  let fn = reply_optional("he");
  let item = reply_choice(["who", "whoever"]);
  let fn2 = reply_optional(item);
  let r2 = reply_word_has_is();
  let item2 = reply_choice([r2, "does", "doesnt", "hee"]);
  let fn3 = reply_optional(item2);
  let r3 = reply_word_no_not();
  let item3 = reply_choice([r3, "that"]);
  let fn4 = reply_optional(item3);
  let item4 = reply_word_love_loves_loveth();
  let fn5 = reply_optional(item4);
  let item5 = reply_choice(["loving", "not"]);
  let fn6 = reply_optional(item5);
  let item6 = reply_choice(["did", "does", "doesnt", "has"]);
  let fn7 = reply_optional(item6);
  let item7 = reply_word_no_not();
  let fn8 = reply_optional(item7);
  let item8 = reply_choice(["knoweth", "knowledge"]);
  let fn9 = reply_optional(item8);
  let fn10 = reply_choice(["know", "known", "not", "of"]);
  let r4 = reply_words("god");
  let r5 = reply_word_because_for();
  let r6 = reply_words("god is");
  let r7 = reply_word_charity_love();
  let read = reply_sequence([
    fn,
    fn2,
    fn3,
    fn4,
    fn5,
    fn6,
    fn7,
    fn8,
    fn9,
    fn10,
    r4,
    r5,
    r6,
    r7,
  ]);
  let r = reply_bible_verse_whole("1JN04", "8", read);
  return r;
}
