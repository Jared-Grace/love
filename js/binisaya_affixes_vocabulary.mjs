import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { each } from "./each.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_tally } from "./list_tally.mjs";
import { not } from "./not.mjs";
import { object_values } from "./object_values.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
export async function binisaya_affixes_vocabulary() {
  "Every distinct piece of the shorthand binisaya.com writes a word's construction in, and how many words each piece was seen on.";
  "The shorthand is undocumented, and a guess at what it means is exactly the thing that put invented word origins in front of readers in the first place. Counting the pieces is the step before reading them: a piece seen on nine hundred words is a rule of the notation, while one seen twice is a typing slip or a case of its own, and no amount of staring at five examples tells them apart.";
  "The pieces come apart at the tilde because that is what the site puts between them, and the empty piece a trailing tilde leaves behind is dropped rather than counted as a piece nobody can read.";
  let known = await binisaya_words_known();
  let held = object_values(known);
  let pieces = [];
  function word_read(entry) {
    let analysed = property_get(entry, "analysed");
    if (not(analysed)) {
      return;
    }
    let affixes = property_get(entry, "affixes");
    let split = text_split(affixes, "~");
    list_add_multiple(pieces, split);
  }
  each(held, word_read);
  let kept = list_filter(pieces, text_empty_not_is);
  let r = list_tally(kept);
  return r;
}
