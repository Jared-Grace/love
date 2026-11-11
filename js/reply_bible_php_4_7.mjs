import { reply_word_god } from "./reply_word_god.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_jesus_whole } from "./reply_phrase_jesus_whole.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_php_4_7() {
  "Philippians 4:7 said whole, in the words of the English Bibles nobody owns, a phrase at a time.";
  "★ TRANSCENDS IS NOT IN THE BIBLES NOBODY OWNS, AND THE ENDING MAY BE LEFT OFF: a daily-verse post on 2026-11-11 quoted this verse as 'which transcends all understanding' and stopped at 'your minds'.";
  "★ EACH PLACE IS A CHOICE OF THE WORDS SOME BIBLE PUTS THERE, NOT A WORD SOME BIBLE LEAVES OUT. Lined up a word at a time, every word one translation lacks became skippable, and the verse could then be read with half of it missing.";
  let god = reply_word_god();
  let peace = reply_sequence(["and", "the", "peace", "of", god]);
  let which = reply_choice(["which", "that"]);
  let deeper = reply_words("is deeper than");
  let passes = reply_choice([
    "passeth",
    "surpasses",
    "surpasseth",
    "surpassing",
    "transcends",
    deeper,
  ]);
  let all = reply_choice(["all", "every"]);
  let understanding = reply_word_u_v("understanding");
  let knowing = reply_choice([understanding, "knowledge"]);
  let will = reply_choice(["shall", "will"]);
  let will_optional = reply_optional(will);
  let preserve = reply_word_u_v("preserve");
  let guard = reply_choice(["guard", "keep", preserve]);
  let hearts = reply_choice(["hearts", "heartes"]);
  let your = reply_optional("your");
  let minds_word = reply_choice(["minds", "mindes", "thoughts"]);
  let minds = reply_sequence([your, minds_word]);
  let through = reply_choice(["in", "through", "by"]);
  ("★ THE WHOLE NAME ONLY, NEVER ONE HALF OF IT. With Christ alone allowed, the verse could end after Christ and hand Jesus to the rule that answers his name. Both readings cost nothing, so the verse got two replies. Listing the whole name first did not help. Measured 2026-11-11.");
  let named = reply_phrase_jesus_whole();
  let in_jesus = reply_sequence([through, named]);
  let ending = reply_optional(in_jesus);
  let read = reply_sequence([
    peace,
    which,
    passes,
    all,
    knowing,
    will_optional,
    guard,
    "your",
    hearts,
    "and",
    minds,
    ending,
  ]);
  let r = reply_bible_verse_whole("PHP04", "7", read);
  return r;
}
