import { reply_choice } from "./reply_choice.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_word_that_the } from "./reply_word_that_the.mjs";
import { reply_word_charity_love } from "./reply_word_charity_love.mjs";
import { reply_word_god } from "./reply_word_god.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
export function reply_phrase_love_shown() {
  "God's love was shown to us, in the words of 1 John 4:9.";
  let r2 = reply_words("in this");
  let r3 = reply_words("by this");
  let here = reply_choice(["herein", r2, r3]);
  let r4 = reply_words("made manifest");
  let r5 = reply_words("made clear");
  let shown = reply_choice(["manifested", r4, r5, "revealed", "appeared"]);
  let r6 = reply_word_that_the();
  let r7 = reply_word_charity_love();
  let v = reply_word_god();
  let love_of_god = reply_sequence([r6, r7, "of", v]);
  let to = reply_choice(["to", "toward", "towards", "in", "among", "amongst"]);
  let us = reply_word_us();
  let to_us = reply_sequence([to, us]);
  let was_shown_love = reply_sequence([here, "was", shown, love_of_god, to_us]);
  let fn = reply_choice(["was", "hath"]);
  let love_was_shown = reply_sequence([here, fn, love_of_god, shown, to_us]);
  let r8 = reply_words("this is how");
  let r9 = reply_words("by this");
  let opener = reply_choice([r8, r9]);
  let fn2 = reply_choice(["gods", "god's"]);
  let r10 = reply_word_love();
  let gods_love = reply_sequence([fn2, r10]);
  let gods_love_was_shown = reply_sequence([
    opener,
    gods_love,
    "was",
    shown,
    to_us,
  ]);
  let and_love = reply_sequence(["and", love_of_god, "was", shown, to_us]);
  let r11 = reply_words("herein as to");
  let r12 = reply_words("has been manifested");
  let as_to_us = reply_sequence([r11, us, r12, love_of_god]);
  let r = reply_choice([
    was_shown_love,
    love_was_shown,
    gods_love_was_shown,
    and_love,
    as_to_us,
  ]);
  return r;
}
