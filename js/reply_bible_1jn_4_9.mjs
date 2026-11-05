import { fn_name } from "./fn_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_herein_this } from "./reply_word_herein_this.mjs";
import { reply_word_charity_loue_love } from "./reply_word_charity_loue_love.mjs";
import { reply_word_us_vs } from "./reply_word_us_vs.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_phrase_that_we } from "./reply_phrase_that_we.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_9() {
  ("1 John 4:9 said whole, in the words of the English Bibles nobody owns, lined up. Made by ",
    fn_name("reply_bible_verse_function_new"),
    ".");
  let item = reply_choice(["by", "in"]);
  let fn = reply_optional(item);
  let item2 = reply_word_herein_this();
  let fn2 = reply_optional(item2);
  let fn3 = reply_optional("as");
  let fn4 = reply_optional("to");
  let fn5 = reply_optional("us");
  let item3 = reply_choice(["has", "is", "was"]);
  let fn6 = reply_optional(item3);
  let fn7 = reply_optional("been");
  let item4 = reply_choice(["and", "hath", "how", "manifested"]);
  let fn8 = reply_optional(item4);
  let fn9 = reply_choice(["gods", "that", "the"]);
  let r2 = reply_word_charity_loue_love();
  let fn10 = reply_optional("of");
  let fn11 = reply_optional("god");
  let fn12 = reply_optional("was");
  let fn13 = reply_optional("made");
  let item5 = reply_choice([
    "appeared",
    "clear",
    "manifest",
    "manifested",
    "revealed",
  ]);
  let fn14 = reply_optional(item5);
  let item6 = reply_choice([
    "among",
    "amongst",
    "in",
    "to",
    "toward",
    "towards",
  ]);
  let fn15 = reply_optional(item6);
  let item7 = reply_word_us_vs();
  let fn16 = reply_optional(item7);
  let fn17 = reply_optional("because");
  let fn18 = reply_optional("that");
  let item8 = reply_choice(["god", "when"]);
  let fn19 = reply_optional(item8);
  let item9 = reply_choice(["has", "hath", "he"]);
  let fn20 = reply_optional(item9);
  let fn21 = reply_optional("sent");
  let fn22 = reply_optional("that");
  let r3 = reply_words("his");
  let item10 = reply_choice(["one", "son"]);
  let fn23 = reply_optional(item10);
  let item11 = reply_choice(["and", "the"]);
  let fn24 = reply_optional(item11);
  let fn25 = reply_choice(["onely", "only"]);
  let item12 = reply_choice(["begotten", "born"]);
  let fn26 = reply_optional(item12);
  let fn27 = reply_optional("hath");
  let fn28 = reply_optional("god");
  let fn29 = reply_choice(["sent", "son", "sonne"]);
  let fn30 = reply_choice(["into", "to"]);
  let fn31 = reply_choice(["the", "this"]);
  let r4 = reply_words("world");
  let fn32 = reply_optional("so");
  let r5 = reply_phrase_that_we();
  let fn33 = reply_optional("might");
  let item13 = reply_choice(["have", "may"]);
  let fn34 = reply_optional(item13);
  let fn35 = reply_choice(["life", "liue", "live"]);
  let fn36 = reply_choice(["by", "through"]);
  let r6 = reply_words("him");
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
    r2,
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
    r3,
    fn23,
    fn24,
    fn25,
    fn26,
    fn27,
    fn28,
    fn29,
    fn30,
    fn31,
    r4,
    fn32,
    r5,
    fn33,
    fn34,
    fn35,
    fn36,
    r6,
  ]);
  let r = reply_bible_verse_whole("1JN04", "9", read);
  return r;
}
