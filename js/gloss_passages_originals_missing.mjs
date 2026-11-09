import { equal } from "./equal.mjs";
export function gloss_passages_originals_missing(passages) {
  "Every verse of a chapter's stored passages whose original-language text is not there, named by its verse number.";
  "A passage holds one original text per verse it covers. A verse whose text is missing or null cannot be cut into words, so every check that reads words across a chapter stops at it instead of reporting; this names those verses so the hole can be found without the checks crashing on it.";
  let missing = [];
  for (let passage of passages) {
    let verse_numbers = passage.verse_numbers;
    let originals = passage.originals;
    if (equal(originals, undefined) || equal(originals, null)) {
      originals = [];
    }
    let index = 0;
    for (let verse_number of verse_numbers) {
      let text = originals[index];
      if (equal(text, undefined) || equal(text, null)) {
        missing.push(verse_number);
      }
      index = index + 1;
    }
  }
  return missing;
}
