import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_messenger_next_link } from "./facebook_messenger_next_link.mjs";
import { next_link_languages } from "./next_link_languages.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function facebook_messenger_languages_last(messages) {
  "$plain messages";
  "The languages the newest passage you sent in messages was in, or null when none of yours says. A message says it in one of two ways: a next-passage link, whose l= names them, or the reply app's last word - its language codes joined by commas, like ur,en,original.";
  "★ TWO WRITERS, ONE ANSWER: the next page came later than the reply app, so an older conversation carries only the reply app's ending, and a reader that knows only links calls such a person new. Whichever kind the NEWEST of your messages carries wins.";
  "★ AN OLDER ENDING NAMES ONLY THE ADDED LANGUAGE: before the defaults were written out, the reply app ended a message with just `ur`, though its verses ran Urdu, English, then the original - so an ending without en and original has them added after it, in that order.";
  "★ A LONE ENGLISH WORD IS NOT A CODE: `am`, `or`, `ha` are languages and also how a sentence can end, so a single code that is a common English word is not read as a choice; a comma list is, because no sentence ends in one.";
  "★ URDU FROM THE REPLY APP GAINS PUNJABI AFTER IT: those passages were sent before Punjabi was offered, and nobody in Pakistan has objected to it (human, 2026-11-09). A next-passage link is left exactly as it is - it was sent after Punjabi existed, so whatever it names was the choice.";
  let codes = ebible_language_codes();
  let words = [
    "am",
    "or",
    "is",
    "to",
    "in",
    "be",
    "me",
    "my",
    "no",
    "so",
    "we",
    "he",
    "it",
    "at",
    "on",
    "an",
    "as",
    "do",
    "go",
    "us",
    "hi",
    "id",
    "la",
    "ha",
  ];
  let found = null;
  for (let m of messages) {
    if (not_equal(m.from, "You")) {
      continue;
    }
    let link = facebook_messenger_next_link([m]);
    if (not_equal(link, null)) {
      let l = next_link_languages(link);
      if (not_equal(l, null)) {
        found = l;
      }
      continue;
    }
    let tokens = m.text.trim().split(/\s+/);
    let last = tokens[subtract(tokens.length, 1)] || "";
    let parts = last.split(",");
    function lambda(p) {
      let r = codes.includes(p);
      return r;
    }
    if (equal(parts.length, 0) || not(parts.every(lambda))) {
      continue;
    }
    if (equal(parts.length, 1) && words.includes(parts[0])) {
      continue;
    }
    let languages = parts.slice();
    let b = languages.includes("en");
    if (not(b) && not(languages.includes("original"))) {
      languages.push("en", "original");
    }
    let at_ur = languages.indexOf("ur");
    if (not_equal(at_ur, -1) && not(languages.includes("pa"))) {
      languages.splice(at_ur + 1, 0, "pa");
    }
    found = languages;
  }
  return found;
}
