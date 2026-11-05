import { reply_optional } from "./reply_optional.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
import { reply_word_herein_this } from "./reply_word_herein_this.mjs";
import { reply_word_that_the } from "./reply_word_that_the.mjs";
import { reply_word_charity_love } from "./reply_word_charity_love.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_phrase_love_loved_for } from "./reply_phrase_love_loved_for.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_us_u_v } from "./reply_word_us_u_v.mjs";
import { reply_phrase_his_son } from "./reply_phrase_his_son.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_10() {
  "1 John 4:10 said whole, in the words of the English Bibles nobody owns, lined up.";
  let fn = reply_optional("and");
  let item = reply_word_love();
  let fn2 = reply_optional(item);
  let fn3 = reply_optional("consists");
  let fn4 = reply_optional("in");
  let r2 = reply_word_herein_this();
  let fn5 = reply_optional("is");
  let item2 = reply_word_that_the();
  let fn6 = reply_optional(item2);
  let item3 = reply_word_charity_love();
  let fn7 = reply_optional(item3);
  let r3 = "not";
  let fn8 = reply_optional("as");
  let fn9 = reply_choice(["that", "though"]);
  let r4 = "we";
  let fn10 = reply_optional("had");
  let r5 = reply_phrase_love_loved_for();
  let r6 = reply_words("god but");
  let fn11 = reply_choice(["because", "that"]);
  let r7 = "he";
  let fn12 = reply_optional("hath");
  let item4 = reply_choice(["did", "first", "had"]);
  let fn13 = reply_optional(item4);
  let r8 = reply_phrase_love_loved_for();
  let r9 = reply_word_us_u_v();
  let r10 = "and";
  let fn14 = reply_optional("did");
  let fn15 = reply_choice(["send", "sent"]);
  let r11 = reply_phrase_his_son();
  let fn16 = reply_optional("to");
  let item5 = reply_choice(["as", "be"]);
  let fn17 = reply_optional(item5);
  let item6 = reply_choice(["an", "the"]);
  let fn18 = reply_optional(item6);
  let item7 = reply_choice(["a", "atoning"]);
  let fn19 = reply_optional(item7);
  let fn20 = reply_choice([
    "offering",
    "propitiation",
    "reconciliation",
    "sacrifice",
  ]);
  let r12 = reply_words("for our");
  let fn21 = reply_choice(["sinnes", "sins"]);
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
    r5,
    r6,
    fn11,
    r7,
    fn12,
    fn13,
    r8,
    r9,
    r10,
    fn14,
    fn15,
    r11,
    fn16,
    fn17,
    fn18,
    fn19,
    fn20,
    r12,
    fn21,
  ]);
  let r = reply_bible_verse_whole("1JN04", "10", read);
  return r;
}
