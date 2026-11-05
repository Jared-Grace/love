import { fn_name } from "./fn_name.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_herein_this } from "./reply_word_herein_this.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_word_charity_loue_love } from "./reply_word_charity_loue_love.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_us_vs } from "./reply_word_us_vs.mjs";
import { reply_word_son } from "./reply_word_son.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_10() {
  ("1 John 4:10 said whole, in the words of the English Bibles nobody owns, lined up. Made by ",
    fn_name("reply_bible_verse_function_new"),
    ".");
  let fn = reply_optional("and");
  let fn2 = reply_optional("love");
  let fn3 = reply_optional("consists");
  let fn4 = reply_optional("in");
  let r2 = reply_word_herein_this();
  let fn5 = reply_optional("is");
  let item = reply_choice(["that", "the"]);
  let fn6 = reply_optional(item);
  let item2 = reply_word_charity_loue_love();
  let fn7 = reply_optional(item2);
  let r3 = reply_words("not");
  let fn8 = reply_optional("as");
  let fn9 = reply_choice(["that", "though"]);
  let r4 = reply_words("we");
  let fn10 = reply_optional("had");
  let fn11 = reply_choice(["loued", "love", "loved"]);
  let fn12 = reply_optional("for");
  let r5 = reply_words("god but");
  let fn13 = reply_choice(["because", "that"]);
  let r6 = reply_words("he");
  let fn14 = reply_optional("hath");
  let item3 = reply_choice(["did", "first", "had"]);
  let fn15 = reply_optional(item3);
  let fn16 = reply_choice(["loued", "love", "loved"]);
  let fn17 = reply_optional("for");
  let r7 = reply_word_us_vs();
  let r8 = reply_words("and");
  let fn18 = reply_optional("did");
  let fn19 = reply_choice(["send", "sent"]);
  let r9 = reply_words("his");
  let r10 = reply_word_son();
  let fn20 = reply_optional("to");
  let item4 = reply_choice(["as", "be"]);
  let fn21 = reply_optional(item4);
  let item5 = reply_choice(["an", "the"]);
  let fn22 = reply_optional(item5);
  let item6 = reply_choice(["a", "atoning"]);
  let fn23 = reply_optional(item6);
  let fn24 = reply_choice([
    "offering",
    "propitiation",
    "reconciliation",
    "sacrifice",
  ]);
  let r11 = reply_words("for our");
  let fn25 = reply_choice(["sinnes", "sins"]);
  let read = reply_sequence([
    fn,
    fn2,
    fn3,
    fn4,
    r2,
    fn5,
    fn6,
    fn7,
    r3,
    fn8,
    fn9,
    r4,
    fn10,
    fn11,
    fn12,
    r5,
    fn13,
    r6,
    fn14,
    fn15,
    fn16,
    fn17,
    r7,
    r8,
    fn18,
    fn19,
    r9,
    r10,
    fn20,
    fn21,
    fn22,
    fn23,
    fn24,
    r11,
    fn25,
  ]);
  let r = reply_bible_verse_whole("1JN04", "10", read);
  return r;
}
