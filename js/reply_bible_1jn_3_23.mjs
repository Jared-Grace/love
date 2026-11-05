import { fn_name } from "./fn_name.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_phrase_that_we } from "./reply_phrase_that_we.mjs";
import { reply_word_son } from "./reply_word_son.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
import { reply_phrase_one_another } from "./reply_phrase_one_another.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_3_23() {
  ("1 John 3:23 said whole, in the words of the English Bibles nobody owns, lined up. Made by ",
    fn_name("reply_bible_verse_function_new"),
    ".");
  let fn = reply_optional("and");
  let r2 = reply_words("this is");
  let fn2 = reply_optional("then");
  let r3 = reply_words("his");
  let fn3 = reply_choice(["command", "commandement", "commandment", "law"]);
  let r4 = reply_phrase_that_we();
  let item = reply_choice(["have", "may", "should"]);
  let fn4 = reply_optional(item);
  let fn5 = reply_choice(["beleeue", "believe", "faith"]);
  let fn6 = reply_choice(["in", "on"]);
  let r5 = reply_words("the name of his");
  let r6 = reply_word_son();
  let r7 = reply_words("jesus and");
  let fn7 = reply_optional("that");
  let fn8 = reply_optional("we");
  let item2 = reply_choice(["may", "should"]);
  let fn9 = reply_optional(item2);
  let r8 = reply_word_love();
  let fn10 = reply_optional("for");
  let r9 = reply_phrase_one_another();
  let item3 = reply_choice(["even", "just"]);
  let fn11 = reply_optional(item3);
  let r10 = reply_words("as");
  let fn12 = reply_optional("he");
  let item4 = reply_choice(["did", "has", "hath", "hee", "said"]);
  let fn13 = reply_optional(item4);
  let fn14 = reply_choice(["commanded", "gaue", "gave", "give", "given", "to"]);
  let item5 = reply_choice(["command", "commandment"]);
  let fn15 = reply_optional(item5);
  let item6 = reply_choice(["to", "unto"]);
  let fn16 = reply_optional(item6);
  let fn17 = reply_optional("us");
  let item7 = reply_choice(["commandement", "commandment"]);
  let fn18 = reply_optional(item7);
  let read = reply_sequence([
    fn,
    r2,
    fn2,
    r3,
    fn3,
    r4,
    fn4,
    fn5,
    fn6,
    r5,
    r6,
    r7,
    fn7,
    fn8,
    fn9,
    r8,
    fn10,
    r9,
    fn11,
    r10,
    fn12,
    fn13,
    fn14,
    fn15,
    fn16,
    fn17,
    fn18,
  ]);
  let r = reply_bible_verse_whole("1JN03", "23", read);
  return r;
}
