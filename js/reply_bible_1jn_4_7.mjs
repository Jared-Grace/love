import { reply_word_god } from "./reply_word_god.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_phrase_love_for_one_another } from "./reply_phrase_love_for_one_another.mjs";
import { reply_word_s_eth } from "./reply_word_s_eth.mjs";
import { reply_word_because_for } from "./reply_word_because_for.mjs";
import { reply_word_charity_love } from "./reply_word_charity_love.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
import { reply_word_begotten_born } from "./reply_word_begotten_born.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_7() {
  "1 John 4:7 said whole, in the words of the English Bibles nobody owns.";
  let god = reply_word_god();
  let fn = reply_optional("dearly");
  let r2 = reply_word_u_v("beloved");
  let beloved = reply_sequence([fn, r2]);
  let r3 = reply_word_u_v("loved");
  let loved_ones = reply_sequence(["my", r3, "ones"]);
  let r4 = reply_word_us();
  let fn2 = reply_sequence(["let", r4]);
  let r5 = reply_words("may we");
  let let_us = reply_choice([fn2, "lets", r5]);
  let fn3 = reply_optional("have");
  let r6 = reply_phrase_love_for_one_another();
  let love_each = reply_sequence([fn3, r6]);
  let fn4 = reply_choice([beloved, loved_ones]);
  let greeting = reply_sequence([fn4, let_us, love_each]);
  let r7 = reply_word_s_eth("come");
  let come = reply_choice([r7, "commeth", "is"]);
  let from = reply_choice(["from", "of"]);
  let r8 = reply_word_because_for();
  let fn5 = reply_optional("the");
  let r9 = reply_word_charity_love();
  let love_from_god = reply_sequence([r8, fn5, r9, come, from, god]);
  let fn6 = reply_optional("and");
  let r10 = reply_word_u_v("every");
  let fn7 = reply_choice(["who", "that"]);
  let everyone = reply_sequence([fn6, r10, "one", fn7]);
  let r11 = reply_word_s_eth("love");
  let r12 = reply_word_love();
  let fn8 = reply_sequence(["has", r12]);
  let r13 = reply_words("is loving");
  let loves = reply_choice([r11, fn8, r13]);
  let r14 = reply_word_begotten_born();
  let born_word = reply_choice([r14, "borne"]);
  let r15 = reply_words("has been");
  let fn9 = reply_choice(["is", r15]);
  let is_born = reply_sequence([fn9, born_word]);
  let r16 = reply_words("is a child");
  let fn10 = reply_choice([is_born, r16]);
  let born_of_god = reply_sequence([fn10, "of", god]);
  let r17 = reply_words("he hath been begotten");
  let of_god_born = reply_sequence(["of", god, r17]);
  let born = reply_choice([born_of_god, of_god_born]);
  let r18 = reply_word_s_eth("know");
  let r19 = reply_words("doth know");
  let r20 = reply_words("has knowledge of");
  let know = reply_choice([r18, r19, r20]);
  let knows_god = reply_sequence(["and", know, god]);
  let read = reply_sequence([
    greeting,
    love_from_god,
    everyone,
    loves,
    born,
    knows_god,
  ]);
  let r = reply_bible_verse_whole("1JN04", "7", read);
  return r;
}
