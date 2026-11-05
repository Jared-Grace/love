import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_herein_this } from "./reply_word_herein_this.mjs";
import { reply_word_us_u_v } from "./reply_word_us_u_v.mjs";
import { reply_word_has_is } from "./reply_word_has_is.mjs";
import { reply_word_that_the } from "./reply_word_that_the.mjs";
import { reply_word_charity_love } from "./reply_word_charity_love.mjs";
import { reply_word_begotten_born } from "./reply_word_begotten_born.mjs";
import { reply_word_son } from "./reply_word_son.mjs";
import { reply_phrase_that_we } from "./reply_phrase_that_we.mjs";
import { reply_word_have_may } from "./reply_word_have_may.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_9() {
  "1 John 4:9 said whole, in the words of the English Bibles nobody owns, lined up.";
  let item = reply_choice(["by", "in"]);
  let fn = reply_optional(item);
  let item2 = reply_word_herein_this();
  let fn2 = reply_optional(item2);
  let fn3 = reply_optional("as");
  let fn4 = reply_optional("to");
  let item3 = reply_word_us_u_v();
  let fn5 = reply_optional(item3);
  let r2 = reply_word_has_is();
  let item4 = reply_choice([r2, "was"]);
  let fn6 = reply_optional(item4);
  let fn7 = reply_optional("been");
  let item5 = reply_choice(["and", "hath", "how", "manifested"]);
  let fn8 = reply_optional(item5);
  let r3 = reply_word_that_the();
  let fn9 = reply_choice([r3, "gods"]);
  let r4 = reply_word_charity_love();
  let fn10 = reply_optional("of");
  let fn11 = reply_optional("god");
  let fn12 = reply_optional("was");
  let fn13 = reply_optional("made");
  let item6 = reply_choice([
    "appeared",
    "clear",
    "manifest",
    "manifested",
    "revealed",
  ]);
  let fn14 = reply_optional(item6);
  let item7 = reply_choice([
    "among",
    "amongst",
    "in",
    "to",
    "toward",
    "towards",
  ]);
  let fn15 = reply_optional(item7);
  let item8 = reply_word_us_u_v();
  let fn16 = reply_optional(item8);
  let fn17 = reply_optional("because");
  let fn18 = reply_optional("that");
  let item9 = reply_choice(["god", "when"]);
  let fn19 = reply_optional(item9);
  let item10 = reply_choice(["has", "hath", "he"]);
  let fn20 = reply_optional(item10);
  let fn21 = reply_optional("sent");
  let fn22 = reply_optional("that");
  let r5 = "his";
  let item11 = reply_choice(["one", "son"]);
  let fn23 = reply_optional(item11);
  let item12 = reply_choice(["and", "the"]);
  let fn24 = reply_optional(item12);
  let fn25 = reply_choice(["onely", "only"]);
  let item13 = reply_word_begotten_born();
  let fn26 = reply_optional(item13);
  let fn27 = reply_optional("hath");
  let fn28 = reply_optional("god");
  let r6 = reply_word_son();
  let fn29 = reply_choice([r6, "sent"]);
  let fn30 = reply_choice(["into", "to"]);
  let fn31 = reply_choice(["the", "this"]);
  let r7 = "world";
  let fn32 = reply_optional("so");
  let r8 = reply_phrase_that_we();
  let fn33 = reply_optional("might");
  let item14 = reply_word_have_may();
  let fn34 = reply_optional(item14);
  let r9 = reply_word_u_v("live");
  let fn35 = reply_choice(["life", r9]);
  let fn36 = reply_choice(["by", "through"]);
  let r10 = "him";
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
    r4,
    fn10,
    fn11,
    fn12,
    fn13,
    fn14,
    fn15,
    fn16,
    fn17,
    fn18,
    fn19,
    fn20,
    fn21,
    fn22,
    r5,
    fn23,
    fn24,
    fn25,
    fn26,
    fn27,
    fn28,
    fn29,
    fn30,
    fn31,
    r7,
    fn32,
    r8,
    fn33,
    fn34,
    fn35,
    fn36,
    r10,
  ]);
  let r = reply_bible_verse_whole("1JN04", "9", read);
  return r;
}
