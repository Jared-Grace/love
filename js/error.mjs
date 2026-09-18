import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function error(message) {
  "Stops everything, saying why.";
  "A MESSAGE THAT IS NOT WORDS IS SPELT OUT RATHER THAN NAMED (2026-09-18). Callers all over this repo hand this a record instead of a sentence - the word that was looked for, the file it was looked for in, the verse number, how many were seen - because that is the detail a reader needs and a sentence cannot carry it. Javascript turns a record into the three words object Object, so every one of those throws arrived with its whole payload deleted. A draw over four pictures died that way and said nothing at all about which verse it died on.";
  "IT IS TRIED RATHER THAN TRUSTED, because a record holding a loop back to itself cannot be spelt out and the failure to print must never replace the failure being reported. When the spelling out fails the record is named the old way, which is no worse than what was there before.";
  let text = message;
  let words = equal(typeof message, "string");
  if (not(words)) {
    try {
      text = json_to(message);
    } catch {
      text = String(message);
    }
  }
  throw new Error(text);
}
