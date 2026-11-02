import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_names_common } from "./reply_names_common.mjs";
import { reply_countries_names } from "./reply_countries_names.mjs";
import { reply_countries_aliases } from "./reply_countries_aliases.mjs";
import { reply_countries_authored } from "./reply_countries_authored.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
export async function reply_unanswered_shapes() {
  arguments_assert(arguments, 0);
  ("What the real messages still waiting for a reply are shaped like, commonest first, so the reply rules can grow in the order those messages need.");
  ("★ IT SAYS THE SHAPE AND NEVER THE WORDS. A word comes out only if it is on the short list of ordinary words below; a name, a country and a title come out as NAME, COUNTRY and TITLE, and anything else as a dot. So the answer can be read and repeated without carrying anything somebody wrote about themselves.");
  ("Only the first eight words of a message make up its shape, because how a message opens is what a rule is written against, and a long message would otherwise be a shape of its own.");
  let plain_words = [
    "i",
    "am",
    "im",
    "my",
    "name",
    "is",
    "from",
    "in",
    "of",
    "the",
    "and",
    "hello",
    "hi",
    "hey",
    "good",
    "morning",
    "afternoon",
    "evening",
    "night",
    "dear",
    "brother",
    "sister",
    "sir",
    "man",
    "god",
    "thank",
    "thanks",
    "you",
    "please",
    "amen",
    "praise",
    "lord",
    "jesus",
    "christ",
    "how",
    "are",
    "what",
    "who",
    "where",
    "can",
    "want",
    "need",
    "help",
    "we",
    "our",
    "this",
    "a",
    "to",
    "for",
  ];
  let plain = new Set(plain_words);
  function lower(word) {
    let r = word.toLowerCase();
    return r;
  }
  let v = reply_names_common().map(lower);
  let names = new Set(v);
  let countries_all = [
    ...reply_countries_names(),
    ...reply_countries_aliases(),
    ...reply_countries_authored(),
  ];
  let v2 = countries_all.map(lower);
  let countries = new Set(v2);
  let titles = new Set([
    "apostle",
    "evangelist",
    "pastor",
    "preacher",
    "teacher",
  ]);
  function label(word) {
    if (plain.has(word)) {
      return word;
    }
    if (titles.has(word)) {
      let r2 = "TITLE";
      return r2;
    }
    if (countries.has(word)) {
      let r3 = "COUNTRY";
      return r3;
    }
    if (names.has(word)) {
      let r4 = "NAME";
      return r4;
    }
    let r5 = ".";
    return r5;
  }
  function words_of(message) {
    let cleaned = message.toLowerCase().replace(/['’]/g, "");
    let parts = cleaned.split(/[^\p{L}\p{N}]+/u);
    function lambda(part) {
      let g = greater_than(part.length, 0);
      return g;
    }
    let r6 = parts.filter(lambda);
    return r6;
  }
  function y_ie_swaps(word) {
    let swaps = [];
    for (let i = 0; less_than(i, word.length); i++) {
      if (equal(word[i], "y")) {
        swaps.push(word.slice(0, i) + "ie" + word.slice(i + 1));
      }
      let left = word.slice(i, i + 2);
      if (equal(left, "ie")) {
        swaps.push(word.slice(0, i) + "y" + word.slice(i + 2));
      }
    }
    return swaps;
  }
  function known(word) {
    let r7 = names.has(word) || countries.has(word);
    return r7;
  }
  function y_ie_helps(word) {
    let b2 = known(word);
    let r8 = not(b2) && y_ie_swaps(word).some(known);
    return r8;
  }
  let records = await app_message_private_records_replied();
  let answered = 0;
  let broke = 0;
  let y_ie = 0;
  let waiting = 0;
  let counts = new Map();
  for (let record of records) {
    let attempt = record.reply;
    if (attempt.answered) {
      answered++;
      continue;
    }
    if (attempt.broke) {
      broke++;
    }
    waiting++;
    let words = words_of(record.message);
    if (words.some(y_ie_helps)) {
      y_ie++;
    }
    let shape = words.slice(0, 8).map(label).join(" ");
    counts.set(shape, (counts.get(shape) ?? 0) + 1);
  }
  function lambda2(a, b) {
    let difference = subtract(b[1], a[1]);
    return difference;
  }
  let ranked = [...counts.entries()].sort(lambda2);
  function lambda3([shape, count]) {
    let r9 = {
      count,
      shape,
    };
    return r9;
  }
  let top = ranked.slice(0, 40).map(lambda3);
  let r10 = {
    messages: records.length,
    answered,
    waiting,
    broke,
    waiting_with_a_y_ie_spelling: y_ie,
    shapes: ranked.length,
    top,
  };
  return r10;
}
