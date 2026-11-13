import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function isbe_page_pointer_is(page) {
  "Whether an International Standard Bible Encyclopedia page only points at another article - GHOST, HOLY See HOLY SPIRIT - rather than saying anything itself.";
  "$plain page";
  "the page is an article's fetched words; it is read, and nothing in it runs.";
  "THE ARTICLE'S OWN WORDS STAND BETWEEN THE SHARING BUTTONS AND THE COPYRIGHT LINE. A pointer is short there and sends the reader on with See and a capitalised title; a short article that says something - Abishur was son of Shammai - is not one.";
  let match = page.match(
    /Share Close Share Tweet Save (.*?)Copyright Statement/s,
  );
  if (equal(match, null)) {
    return false;
  }
  let own = match[1];
  let r = less_than(own.length, 250) && /\bSee [A-Z]/.test(own);
  return r;
}
