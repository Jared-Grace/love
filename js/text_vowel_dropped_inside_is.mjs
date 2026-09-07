import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { text_vowel_dropped_forms } from "./text_vowel_dropped_forms.mjs";
export function text_vowel_dropped_inside_is(word, other) {
  "Whether one word, with a single vowel taken out of it, stands inside another word.";
  "Cebuano drops a vowel and adds a piece in the same breath, so the shortened spelling is almost never met on its own: luoy loses its u to give loy, and loy is what kaloy and maluloy-on are built around. Asking whether the shortened spelling equals the other word finds a handful of these and walks past the rest; asking whether it stands inside the other word finds them.";
  "A shortened spelling under three letters is passed over. What makes this evidence is that the whole of one word, less one vowel, stands inside the other; cut to two letters that stops being the whole of anything and starts being a run two unrelated words share by chance.";
  "$plain word";
  "$plain other";
  "both name spellings being compared. Neither names anything that runs, reads a file, or reaches anywhere.";
  let forms = text_vowel_dropped_forms(word);
  let size = forms.length;
  let i = 0;
  while (less_than(i, size)) {
    let form = forms[i];
    let long_enough = greater_than_equal(form.length, 3);
    if (long_enough) {
      let inside = other.includes(form);
      if (inside) {
        return true;
      }
    }
    i = i + 1;
  }
  return false;
}
