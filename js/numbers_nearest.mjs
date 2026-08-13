import { items_nearest } from "./items_nearest.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
export function numbers_nearest(numbers, word, apart_maximum) {
  "The numbers in a list nearest in value to a given one: the ones tied for closest, and nothing at all when the word is not a number or even the closest is further away than the limit allows.";
  "Both sides are numbers written as text, because that is how a link spells them and comparing them is the whole reason this is asked.";
  "The picking of the tie is not here - it is the same picking whatever is being compared, and lives one door down beside the picking for spellings. What this adds is the measure a number wants: how far apart the two are in value. Measuring a number by its spelling instead would call 4 and 40 near neighbours, one letter apart and thirty-six away.";
  let digits_is = text_digits_is(word);
  if (not(digits_is)) {
    let nothing = [];
    return nothing;
  }
  let asked = number_from_text(word);
  function lambda$apart(text) {
    let n = number_from_text(text);
    let apart = numbers_apart(n, asked);
    return apart;
  }
  let nearest = items_nearest(numbers, lambda$apart, apart_maximum);
  return nearest;
}
