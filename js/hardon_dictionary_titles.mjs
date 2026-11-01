import { http_text_or_null } from "./http_text_or_null.mjs";
import { equal } from "./equal.mjs";
export async function hardon_dictionary_titles() {
  "Every entry of Fr. John Hardon's Modern Catholic Dictionary as Catholic Culture publishes it, as the entry's title and its number on that site, read off the site's index one page per letter.";
  "THE SITE AND THE QUESTION ARE FIXED HERE AND NOTHING IS ASKED FOR, so it can reach one site only and writes nothing.";
  let found = [];
  for (let letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    let url =
      "https://www.catholicculture.org/culture/library/dictionary/index.cfm?letter=" +
      letter;
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      throw new Error("Catholic Culture did not answer for " + url);
    }
    for (let m of text.matchAll(
      /index\.cfm\?id=(\d+)&randomterm=false">([^<]*)</g,
    )) {
      let v = m[2].trim();
      found.push([v, m[1]]);
    }
  }
  return found;
}
