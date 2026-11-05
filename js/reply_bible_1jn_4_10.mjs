import { reply_word_god } from "./reply_word_god.mjs";
import { reply_phrase_love_loved_for } from "./reply_phrase_love_loved_for.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_herein_this } from "./reply_word_herein_this.mjs";
import { reply_word_that_the } from "./reply_word_that_the.mjs";
import { reply_word_charity_love } from "./reply_word_charity_love.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_phrase_his_son } from "./reply_phrase_his_son.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_10() {
  "1 John 4:10 said whole, in the words of the English Bibles nobody owns.";
  let god = reply_word_god();
  let love_loved = reply_phrase_love_loved_for();
  let fn = reply_optional("in");
  let r2 = reply_word_herein_this();
  let item = reply_word_that_the();
  let fn2 = reply_optional(item);
  let r3 = reply_word_charity_love();
  let this_is_love = reply_sequence([fn, r2, "is", fn2, r3]);
  let r4 = reply_word_love();
  let r5 = reply_words("consists in this");
  let love_consists = reply_sequence([r4, r5]);
  let fn3 = reply_optional("and");
  let fn4 = reply_choice([this_is_love, love_consists]);
  let opening = reply_sequence([fn3, fn4]);
  let r6 = reply_words("as though");
  let fn5 = reply_choice(["that", r6]);
  let fn6 = reply_optional("had");
  let not_we = reply_sequence(["not", fn5, "we", fn6, love_loved, god]);
  let r7 = reply_words("hath first");
  let item2 = reply_choice(["hath", r7, "did", "had"]);
  let he_did = reply_optional(item2);
  let fn7 = reply_choice(["that", "because"]);
  let r8 = reply_word_us();
  let but_he = reply_sequence(["but", fn7, "he", he_did, love_loved, r8]);
  let r9 = reply_words("did send");
  let sent = reply_choice(["sent", r9]);
  let r10 = reply_words("to be");
  let item3 = reply_choice([r10, "as"]);
  let be = reply_optional(item3);
  let item4 = reply_choice(["a", "an", "the"]);
  let a = reply_optional(item4);
  let fn8 = reply_optional("atoning");
  let sacrifice = reply_sequence([fn8, "sacrifice"]);
  let offering = reply_choice([
    "offering",
    "propitiation",
    "reconciliation",
    sacrifice,
  ]);
  let r11 = reply_words("for our");
  let fn9 = reply_choice(["sins", "sinnes"]);
  let for_sins = reply_sequence([r11, fn9]);
  let r12 = reply_phrase_his_son();
  let sent_son = reply_sequence(["and", sent, r12, be, a, offering, for_sins]);
  let read = reply_sequence([opening, not_we, but_he, sent_son]);
  let r = reply_bible_verse_whole("1JN04", "10", read);
  return r;
}
