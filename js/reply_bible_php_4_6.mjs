import { reply_word_god } from "./reply_word_god.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_php_4_6() {
  "Philippians 4:6 said whole, in the words of the English Bibles nobody owns, a phrase at a time.";
  "★ DO, ANYTHING AND SITUATION ARE NOT IN THE BIBLES NOBODY OWNS: they are heard because a daily-verse post on 2026-11-11 quoted this verse as 'do not be anxious about anything, but in every situation'.";
  "★ EACH PLACE IS A CHOICE OF THE WORDS SOME BIBLE PUTS THERE, NOT A WORD SOME BIBLE LEAVES OUT. Lined up a word at a time, every word one translation lacks became skippable, and the verse could then be read with half of it missing.";
  "★ ONE BIBLE SAYS THE ASKING BEFORE THE PRAYER AND NOT AFTER IT, so the two orders are two whole readings: let your requests be shewed unto God in prayer and supplication with giving of thanks.";
  let god = reply_word_god();
  let careful = reply_words("be careful for nothing");
  let in_nothing = reply_words("in nothing be anxious");
  let anxious_for = reply_words("be anxious for nothing");
  let nothing_kind = reply_choice(["careful", "carefull", "solicitous"]);
  let be_nothing = reply_sequence(["be", "nothing", nothing_kind]);
  let do_not = reply_words("do not be anxious about anything");
  let opening = reply_choice([
    careful,
    in_nothing,
    anxious_for,
    be_nothing,
    do_not,
  ]);
  let every = reply_choice(["every", "all"]);
  let thing = reply_choice(["thing", "things", "thinges", "situation"]);
  let every_thing = reply_sequence([every, thing]);
  let everything = reply_choice(["everything", every_thing]);
  let asking = reply_choice(["supplication", "petition"]);
  let prayer = reply_sequence(["by", "prayer", "and", asking]);
  let thanks = reply_words("with thanksgiving");
  let requests = reply_choice(["requests", "requestes", "petitions"]);
  let unto = reply_word_u_v("unto");
  let to = reply_choice(["to", unto]);
  let made_known = reply_words("made known");
  let known = reply_choice([made_known, "shewed"]);
  let let_known = reply_sequence([
    "let",
    "your",
    requests,
    "be",
    known,
    to,
    god,
  ]);
  let present = reply_sequence(["present", "your", requests, to, god]);
  let request = reply_choice([let_known, present]);
  let prayer_first = reply_sequence([prayer, thanks, request]);
  let prayer_word = reply_choice(["prayer", "praier"]);
  let giving = reply_word_u_v("giving");
  let thanks_word = reply_choice(["thanks", "thankes"]);
  let prayer_after = reply_sequence([
    "in",
    prayer_word,
    "and",
    "supplication",
    "with",
    giving,
    "of",
    thanks_word,
  ]);
  let asking_first = reply_sequence([let_known, prayer_after]);
  let order = reply_choice([prayer_first, asking_first]);
  let read = reply_sequence([opening, "but", "in", everything, order]);
  let r = reply_bible_verse_whole("PHP04", "6", read);
  return r;
}
