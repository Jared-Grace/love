import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function song_image_couplets_references() {
  "Every passage of scripture this hymn rests on, each named once, in the order the song first names it.";
  "IT IS ASKED BEFORE ANYBODY OPENS THE PAGE, which is the whole point of it - the set is fixed by the song, so the words behind it can be fetched, written into one file and put in storage ahead of time instead of a chapter at a time while a reader waits.";
  "Named once, because a hymn comes back to the same verse from several different lines and the page shows it under each of them. Asking for it twice would only fetch the same chapter twice.";
  "It reads the explanations rather than a list kept beside them, so a line that starts resting on a new passage is carried here by the same edit that gave it one.";
  arguments_assert(arguments, 0);
  let couplets = song_image_couplets();
  let references = [];
  for (let couplet of couplets) {
    let gloss = song_image_couplet_gloss(couplet.n);
    let unglossed = equal(gloss, undefined);
    if (unglossed) {
      continue;
    }
    let split = text_split_comma_or_empty(gloss.lyric_ref);
    let named = list_map(split, text_trim);
    for (let reference of named) {
      let already = list_includes(references, reference);
      if (already) {
        continue;
      }
      list_add(references, reference);
    }
  }
  return references;
}
