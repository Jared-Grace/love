import { fn_name } from "./fn_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_word_us_u_v } from "./reply_word_us_u_v.mjs";
import { reply_phrase_love_for_one_another } from "./reply_phrase_love_for_one_another.mjs";
import { reply_word_because_for } from "./reply_word_because_for.mjs";
import { reply_word_charity_love } from "./reply_word_charity_love.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_love_loves_loveth } from "./reply_word_love_loves_loveth.mjs";
import { reply_word_has_is } from "./reply_word_has_is.mjs";
import { reply_word_begotten_born } from "./reply_word_begotten_born.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_7() {
  ("1 John 4:7 said whole, in the words of the English Bibles nobody owns, lined up. Made by ",
    fn_name("reply_bible_verse_function_new"),
    ".");
  let item = reply_choice(["dearly", "my"]);
  let fn = reply_optional(item);
  let r2 = reply_word_u_v("beloved");
  let r3 = reply_word_u_v("loved");
  let fn2 = reply_choice([r2, r3]);
  let fn3 = reply_optional("ones");
  let item2 = reply_choice(["let", "lets"]);
  let fn4 = reply_optional(item2);
  let r4 = reply_word_us_u_v();
  let item3 = reply_choice([r4, "may"]);
  let fn5 = reply_optional(item3);
  let item4 = reply_choice(["have", "we"]);
  let fn6 = reply_optional(item4);
  let r5 = reply_phrase_love_for_one_another();
  let r6 = reply_word_because_for();
  let fn7 = reply_optional("the");
  let r7 = reply_word_charity_love();
  let fn8 = reply_choice(["comes", "commeth", "is"]);
  let fn9 = reply_choice(["from", "of"]);
  let r8 = reply_words("god");
  let fn10 = reply_optional("and");
  let item5 = reply_word_u_v("every");
  let fn11 = reply_optional(item5);
  let fn12 = reply_choice(["everyone", "one"]);
  let fn13 = reply_optional("who");
  let item6 = reply_choice(["has", "that"]);
  let fn14 = reply_optional(item6);
  let item7 = reply_word_love_loves_loveth();
  let fn15 = reply_optional(item7);
  let r9 = reply_word_has_is();
  let item8 = reply_choice(["a", "been"]);
  let fn16 = reply_optional(item8);
  let r10 = reply_word_begotten_born();
  let fn17 = reply_choice([r10, "borne", "child", "loving"]);
  let r11 = reply_words("of god");
  let fn18 = reply_optional("he");
  let fn19 = reply_optional("hath");
  let fn20 = reply_optional("been");
  let fn21 = reply_optional("begotten");
  let r12 = reply_words("and");
  let fn22 = reply_optional("has");
  let item9 = reply_choice(["doth", "knowledge"]);
  let fn23 = reply_optional(item9);
  let fn24 = reply_choice(["know", "knoweth", "knows", "of"]);
  let r13 = reply_words("god");
  let read = reply_sequence([
    fn,
    fn2,
    fn3,
    fn4,
    fn5,
    fn6,
    r5,
    r6,
    fn7,
    r7,
    fn8,
    fn9,
    r8,
    fn10,
    fn11,
    fn12,
    fn13,
    fn14,
    fn15,
    r9,
    fn16,
    fn17,
    r11,
    fn18,
    fn19,
    fn20,
    fn21,
    r12,
    fn22,
    fn23,
    fn24,
    r13,
  ]);
  let r = reply_bible_verse_whole("1JN04", "7", read);
  return r;
}
