import { reply_optional } from "./reply_optional.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_command_commandment } from "./reply_word_command_commandment.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_phrase_that_we } from "./reply_phrase_that_we.mjs";
import { reply_word_have_may } from "./reply_word_have_may.mjs";
import { reply_phrase_his_son } from "./reply_phrase_his_son.mjs";
import { reply_phrase_jesus } from "./reply_phrase_jesus.mjs";
import { reply_word_may_should } from "./reply_word_may_should.mjs";
import { reply_phrase_love_for_one_another } from "./reply_phrase_love_for_one_another.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_word_us_u_v } from "./reply_word_us_u_v.mjs";
import { reply_word_commandement_commandment } from "./reply_word_commandement_commandment.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_3_23() {
  "1 John 3:23 said whole, in the words of the English Bibles nobody owns, lined up.";
  let fn = reply_optional("and");
  let r2 = reply_words("this is");
  let fn2 = reply_optional("then");
  let r3 = "his";
  let r4 = reply_word_command_commandment();
  let fn3 = reply_choice([r4, "commandement", "law"]);
  let r5 = reply_phrase_that_we();
  let r6 = reply_word_have_may();
  let item = reply_choice([r6, "should"]);
  let fn4 = reply_optional(item);
  let fn5 = reply_choice(["beleeue", "believe", "faith"]);
  let fn6 = reply_choice(["in", "on"]);
  let r7 = reply_words("the name of");
  let r8 = reply_phrase_his_son();
  let phrase_jesus = reply_phrase_jesus();
  let r9 = "and";
  let fn7 = reply_optional("that");
  let fn8 = reply_optional("we");
  let item2 = reply_word_may_should();
  let fn9 = reply_optional(item2);
  let r10 = reply_phrase_love_for_one_another();
  let item3 = reply_choice(["even", "just"]);
  let fn10 = reply_optional(item3);
  let r11 = "as";
  let fn11 = reply_optional("he");
  let item4 = reply_choice(["did", "has", "hath", "hee", "said"]);
  let fn12 = reply_optional(item4);
  let r12 = reply_word_u_v("gave");
  let fn13 = reply_choice(["commanded", r12, "give", "given", "to"]);
  let item5 = reply_word_command_commandment();
  let fn14 = reply_optional(item5);
  let item6 = reply_choice(["to", "unto"]);
  let fn15 = reply_optional(item6);
  let item7 = reply_word_us_u_v();
  let fn16 = reply_optional(item7);
  let item8 = reply_word_commandement_commandment();
  let fn17 = reply_optional(item8);
  let read = reply_sequence([
    fn,
    r2,
    fn2,
    r3,
    fn3,
    r5,
    fn4,
    fn5,
    fn6,
    r7,
    r8,
    phrase_jesus,
    r9,
    fn7,
    fn8,
    fn9,
    r10,
    fn10,
    r11,
    fn11,
    fn12,
    fn13,
    fn14,
    fn15,
    fn16,
    fn17,
  ]);
  let r = reply_bible_verse_whole("1JN03", "23", read);
  return r;
}
