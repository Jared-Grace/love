import { fn_name } from "./fn_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
import { reply_phrase_one_another } from "./reply_phrase_one_another.mjs";
import { reply_word_because_for } from "./reply_word_because_for.mjs";
import { reply_word_charity_loue_love } from "./reply_word_charity_loue_love.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_loueth_love_loves_loveth } from "./reply_word_loueth_love_loves_loveth.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_7() {
  ("1 John 4:7 said whole, in the words of the English Bibles nobody owns, lined up. Made by ",
    fn_name("reply_bible_verse_function_new"),
    ".");
  let item = reply_choice(["dearly", "my"]);
  let fn = reply_optional(item);
  let fn2 = reply_choice(["beloued", "beloved", "loved"]);
  let fn3 = reply_optional("ones");
  let item2 = reply_choice(["let", "lets"]);
  let fn4 = reply_optional(item2);
  let item3 = reply_choice(["may", "us", "vs"]);
  let fn5 = reply_optional(item3);
  let item4 = reply_choice(["have", "we"]);
  let fn6 = reply_optional(item4);
  let r2 = reply_word_love();
  let fn7 = reply_optional("for");
  let r3 = reply_phrase_one_another();
  let r4 = reply_word_because_for();
  let fn8 = reply_optional("the");
  let r5 = reply_word_charity_loue_love();
  let fn9 = reply_choice(["comes", "commeth", "is"]);
  let fn10 = reply_choice(["from", "of"]);
  let r6 = reply_words("god");
  let fn11 = reply_optional("and");
  let item5 = reply_choice(["euery", "every"]);
  let fn12 = reply_optional(item5);
  let fn13 = reply_choice(["everyone", "one"]);
  let fn14 = reply_optional("who");
  let item6 = reply_choice(["has", "that"]);
  let fn15 = reply_optional(item6);
  let item7 = reply_word_loueth_love_loves_loveth();
  let fn16 = reply_optional(item7);
  let fn17 = reply_choice(["has", "is"]);
  let item8 = reply_choice(["a", "been"]);
  let fn18 = reply_optional(item8);
  let fn19 = reply_choice(["begotten", "born", "borne", "child", "loving"]);
  let r7 = reply_words("of god");
  let fn20 = reply_optional("he");
  let fn21 = reply_optional("hath");
  let fn22 = reply_optional("been");
  let fn23 = reply_optional("begotten");
  let r8 = reply_words("and");
  let fn24 = reply_optional("has");
  let item9 = reply_choice(["doth", "knowledge"]);
  let fn25 = reply_optional(item9);
  let fn26 = reply_choice(["know", "knoweth", "knows", "of"]);
  let r9 = reply_words("god");
  let read = reply_sequence([
    fn,
    fn2,
    fn3,
    fn4,
    fn5,
    fn6,
    r2,
    fn7,
    r3,
    r4,
    fn8,
    r5,
    fn9,
    fn10,
    r6,
    fn11,
    fn12,
    fn13,
    fn14,
    fn15,
    fn16,
    fn17,
    fn18,
    fn19,
    r7,
    fn20,
    fn21,
    fn22,
    fn23,
    r8,
    fn24,
    fn25,
    fn26,
    r9,
  ]);
  let r = reply_bible_verse_whole("1JN04", "7", read);
  return r;
}
