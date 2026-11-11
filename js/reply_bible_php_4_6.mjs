import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_php_4_6() {
  "Philippians 4:6 said whole, in the words of the English Bibles nobody owns, lined up.";
  "★ DO, ANYTHING AND SITUATION ARE NOT IN THE BIBLES NOBODY OWNS: they are heard because a daily-verse post on 2026-11-11 quoted this verse as 'do not be anxious about anything, but in every situation'.";
  let item = reply_choice(["for", "in", "do"]);
  let fn = reply_optional(item);
  let item10 = reply_choice(["nothing", "not"]);
  let fn2 = reply_optional(item10);
  let fn3 = reply_optional("be");
  let item2 = reply_choice(["anxious", "careful", "have"]);
  let fn4 = reply_optional(item2);
  let item3 = reply_choice(["about", "for", "no"]);
  let fn5 = reply_optional(item3);
  let fn6 = reply_choice(["anxious", "cares", "nothing", "anything"]);
  let item4 = reply_choice(["carefull", "solicitous"]);
  let fn7 = reply_optional(item4);
  let r2 = reply_words("but in");
  let item5 = reply_choice(["all", "every"]);
  let fn8 = reply_optional(item5);
  let fn9 = reply_choice(["everything", "thing", "thinges", "situation"]);
  let item6 = reply_choice(["by", "with"]);
  let fn10 = reply_optional(item6);
  let fn11 = reply_optional("prayer");
  let fn12 = reply_optional("and");
  let fn13 = reply_optional("by");
  let item7 = reply_choice(["petition", "supplication"]);
  let fn14 = reply_optional(item7);
  let fn15 = reply_optional("with");
  let item8 = reply_choice(["praise", "thanksgiving"]);
  let fn16 = reply_optional(item8);
  let fn17 = reply_choice(["let", "present", "put"]);
  let fn18 = reply_choice(["petitions", "requestes", "requests"]);
  let fn19 = reply_optional("be");
  let fn20 = reply_optional("made");
  let item9 = reply_choice(["known", "shewed"]);
  let fn21 = reply_optional(item9);
  let fn22 = reply_choice(["before", "to", "unto", "vnto"]);
  let fn23 = reply_optional("in");
  let fn24 = reply_optional("praier");
  let fn25 = reply_optional("and");
  let fn26 = reply_optional("supplication");
  let fn27 = reply_optional("with");
  let fn28 = reply_optional("giuing");
  let fn29 = reply_optional("of");
  let fn30 = reply_optional("thankes");
  let read = reply_sequence([
    fn,
    fn2,
    fn3,
    fn4,
    fn5,
    fn6,
    fn7,
    r2,
    fn8,
    fn9,
    fn10,
    fn11,
    fn12,
    fn13,
    fn14,
    fn15,
    fn16,
    fn17,
    "your",
    fn18,
    fn19,
    fn20,
    fn21,
    fn22,
    "god",
    fn23,
    fn24,
    fn25,
    fn26,
    fn27,
    fn28,
    fn29,
    fn30,
  ]);
  let r = reply_bible_verse_whole("PHP04", "6", read);
  return r;
}
