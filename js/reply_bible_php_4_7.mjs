import { reply_words } from "./reply_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_php_4_7() {
  "Philippians 4:7 said whole, in the words of the English Bibles nobody owns, lined up.";
  "★ TRANSCENDS IS NOT IN THE BIBLES NOBODY OWNS, AND THE ENDING MAY BE LEFT OFF: a daily-verse post on 2026-11-11 quoted this verse as 'which transcends all understanding' and stopped at 'your minds'.";
  let r2 = reply_words("and the peace of god");
  let fn = reply_choice(["that", "which"]);
  let fn2 = reply_optional("is");
  let fn3 = reply_optional("deeper");
  let fn4 = reply_choice([
    "passeth",
    "surpasses",
    "surpasseth",
    "surpassing",
    "than",
    "transcends",
  ]);
  let fn5 = reply_choice(["all", "every"]);
  let fn6 = reply_choice(["knowledge", "understanding", "vnderstanding"]);
  let item = reply_choice(["shall", "will"]);
  let fn7 = reply_optional(item);
  let fn8 = reply_choice(["guard", "keep", "preserue"]);
  let fn9 = reply_choice(["heartes", "hearts"]);
  let fn10 = reply_optional("your");
  let fn11 = reply_choice(["mindes", "minds", "thoughts"]);
  let fn12 = reply_choice(["by", "in", "through"]);
  let item2 = reply_choice(["christ", "messiah"]);
  let fn13 = reply_optional(item2);
  let fn14 = reply_choice(["iesus", "jesus", "yeshua"]);
  let ending = reply_sequence([fn12, fn13, fn14]);
  let fn15 = reply_optional(ending);
  let read = reply_sequence([
    r2,
    fn,
    fn2,
    fn3,
    fn4,
    fn5,
    fn6,
    fn7,
    fn8,
    "your",
    fn9,
    "and",
    fn10,
    fn11,
    fn15,
  ]);
  let r = reply_bible_verse_whole("PHP04", "7", read);
  return r;
}
