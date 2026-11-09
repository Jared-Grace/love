import { equal } from "./equal.mjs";
import { reply_countries_words } from "./reply_countries_words.mjs";
export function text_lines_words_masked(lines) {
  "$plain lines";
  "lines with every word turned into * except a facebook page's own labels and the names of countries - enough to see how a page is laid out, never who is on it.";
  "★ ONLY WORDS A LIST HOLDS STAY READABLE: names and anything else personal are words no list here holds, so they come out as stars.";
  "★ NO CITIES: a city list holds first names - `Victoria` came through as a friend's name on 2026-11-09.";
  "★ NO NUMBERS: a birthday's day and year came through on 2026-11-09, because a number has no letters to look up - so a word with a digit in it is a star too.";
  let labels = [
    "lives",
    "in",
    "from",
    "current",
    "city",
    "hometown",
    "places",
    "lived",
    "no",
    "to",
    "show",
    "moved",
    "about",
    "overview",
    "work",
    "education",
    "contact",
    "and",
    "basic",
    "info",
    "family",
    "relationships",
    "details",
    "life",
    "events",
    "see",
    "all",
    "friends",
    "photos",
    "posts",
    "more",
    "intro",
    "followers",
    "following",
    "reels",
    "videos",
    "check",
    "ins",
    "log",
    "into",
    "facebook",
    "personal",
    "category",
    "names",
  ];
  let sorted = reply_countries_words();
  let v = labels.concat(sorted);
  let known = new Set(v);
  function mask(word) {
    if (/\d/.test(word)) {
      let r = "*";
      return r;
    }
    let key = word
      .normalize("NFD")
      .toLowerCase()
      .replace(/[^a-z]/g, "");
    if (equal(key.length, 0) || known.has(key)) {
      return word;
    }
    let r2 = "*";
    return r2;
  }
  function lambda(l) {
    let r3 = l.split(/\s+/).map(mask).join(" ");
    return r3;
  }
  let masked = lines.map(lambda);
  return masked;
}
