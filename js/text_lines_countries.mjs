import { not } from "./not.mjs";
import { reply_countries_words } from "./reply_countries_words.mjs";
export function text_lines_countries(lines) {
  "$plain lines";
  "The countries named in lines, each as the reply rules spell it - `Lives in Lahore, Pakistan` gives pakistan. Answers only countries, in the order they first appear, so a page read for its places hands back nothing else from it.";
  "★ A COUNTRY IS A WHOLE PART BETWEEN COMMAS: places read `City, Country`, so a part is matched whole once its spaces and marks are gone, and a person whose name happens to hold a country's letters is never taken for one.";
  "★ ONLY A KNOWN LABEL IS DROPPED: `Lives in Kenya` and `From Uganda` name no city, so those few labels come off the front - but never any other words, or the name `Peter Jordan` would be read as the country Jordan.";
  let words = reply_countries_words();
  let labels = ["livesin", "from", "movedto", "wentto", "livedin"];
  let countries = [];
  for (let line of lines) {
    for (let part of line.split(",")) {
      let joined = part
        .normalize("NFD")
        .toLowerCase()
        .replace(/[^a-z]/g, "");
      let tries = [joined];
      for (let label of labels) {
        if (joined.startsWith(label)) {
          let v = joined.slice(label.length);
          tries.push(v);
        }
      }
      for (let t of tries) {
        if (words.includes(t) && not(countries.includes(t))) {
          countries.push(t);
        }
      }
    }
  }
  return countries;
}
