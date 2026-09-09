import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_vowels_lower } from "./text_vowels_lower.mjs";
import { subtract } from "./subtract.mjs";
import { range_from } from "./range_from.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_vowel_dropped_forms } from "./text_vowel_dropped_forms.mjs";
export function gloss_root_shapes_written(root) {
  "Every spelling a Cebuano root can wear inside a word that is built on it, gathered under the name of the shape that puts it there, so that a root standing outside its own word can be asked which ordinary way of building words would have hidden it.";
  (fn_name("gloss_root_claimed_shape"),
    " asks the same question and reaches three answers - an accent, a vowel dropped, two letters exchanged - and its own prose names four more shapes it does not reach and says each one needs somebody who knows Cebuano before it is written down. This does not decide that question. It writes the spellings out so the shapes can be counted, which is what turns an unanswerable question into a priced one.");
  ("The two largest shapes here were on nobody's list. A root's first consonant is exchanged for a nasal where a word is built on it, so sulti gives pagpanulti and balay gives panimalay; and a syllable is copied with an l or an r inside it, so buhat gives buluhaton and sugo gives sulugoon. Measured over the store on 2026-09-09 those two are the first account of one thousand eight hundred and forty of the five thousand seven hundred and twenty three sightings standing outside their word, and neither was among the four shapes named as missing.");
  ("★ A SHAPE REACHING A WORD IS NOT A VERDICT THAT THE ROOT IS RIGHT. These spellings say ordinary word building could have produced what is written, never that it did, and a root somebody invented lands inside one of them as readily as a true one. The whole worth of the answer runs the other way: a root no shape reaches is one a person has to read.");
  ("The spellings are not one per shape and the shapes do not divide the roots between them. A root reached by three of them is reached by three, and that is worth knowing rather than hiding, because a count of what one shape buys is only honest where the overlap is visible.");
  ("$plain root");
  ("it names a word being spelled out, and nothing that runs.");
  arguments_assert(arguments, 1);
  let size = text_size(root);
  let head = text_slice(root, 0, 1);
  let rest = text_slice(root, 1, size);
  let two = text_slice(root, 0, 2);
  let vowels = text_vowels_lower();
  let swapped = [];
  let glide_gained = [];
  let to = subtract(size, 1);
  let places = range_from(1, to);
  for (let place of places) {
    let earlier_at = subtract(place, 1);
    let before = text_slice(root, 0, earlier_at);
    let earlier = text_slice(root, earlier_at, place);
    let to2 = add(place, 1);
    let later = text_slice(root, place, to2);
    let from2 = add(place, 1);
    let after = text_slice(root, from2, size);
    list_add(swapped, before + later + earlier + after);
    let earlier_vowel = text_includes(vowels, earlier);
    let later_vowel = text_includes(vowels, later);
    if (earlier_vowel) {
      if (later_vowel) {
        let opening = text_slice(root, 0, place);
        let closing = text_slice(root, place, size);
        list_add_multiple(glide_gained, [
          opening + "y" + closing,
          opening + "h" + closing,
        ]);
      }
    }
  }
  let glide_lost = [];
  let has_glide = text_includes(root, "y");
  if (has_glide) {
    let without_glide = text_replace(root, "y", "");
    list_add(glide_lost, without_glide);
  }
  let replaced = text_replace(root, "e", "i");
  let replaced2 = text_replace(root, "i", "e");
  let written = {
    infix_in: [head + "in" + rest],
    infix_um: [head + "um" + rest],
    nasal_substitution: ["n" + rest, "m" + rest, "ng" + rest],
    syllable_copy: [two + "l" + rest, two + "r" + rest],
    vowel_lost: text_vowel_dropped_forms(root),
    letters_swapped: swapped,
    glide_lost: glide_lost,
    glide_gained: glide_gained,
    vowel_e_i: [replaced, replaced2],
  };
  return written;
}
