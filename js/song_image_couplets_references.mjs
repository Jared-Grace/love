import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_couplet_references } from "./song_image_couplet_references.mjs";
import { song_image_couplet_symbol_references } from "./song_image_couplet_symbol_references.mjs";
export function song_image_couplets_references() {
  "Every passage of scripture this hymn rests on, whether a line rests on it or a drawing does, each named once, in the order the song first names it.";
  "IT IS ASKED BEFORE ANYBODY OPENS THE PAGE, which is the whole point of it - the set is fixed by the song, so the words behind it can be fetched, written into one file and put in storage ahead of time instead of a chapter at a time while a reader waits.";
  "Named once, because a hymn comes back to the same verse from several different lines and the page shows it under each of them. Asking for it twice would only fetch the same chapter twice.";
  "What one line rests on is asked next door, the same way the page asks it, so the file that is built can never hold a different set from the one the page goes looking for.";
  "THE DRAWINGS' OWN PASSAGES ARE COUNTED HERE TOO, and leaving them out was the one way the promise in the paragraph above could be broken while every word of it still read true. A picture answers to scripture in its own right and carries passages the line beside it never names - thirty-four of them, better than a third of the whole song. The file was built from the lines alone, so those thirty-four were absent from it, and the page fell back to fetching them a chapter at a time: thirty-one chapters, measured at twenty-four seconds of a reader's time on every single opening of the page, for a set that was fixed before anybody opened it.";
  "IT WALKS EVERY COUPLET RATHER THAN SKIPPING THE REPEATED ONES the way the page does. The page skips them because printing the same words twice reads as a mistake, and it reaches the drawings of a repeated line through the line it repeats. That is a fact about what is worth reading, not about what is worth fetching - and here the two paths were measured to name the identical set, so walking the plain one costs nothing and cannot go wrong when the repeats are rearranged.";
  arguments_assert(arguments, 0);
  let couplets = song_image_couplets();
  let references = [];
  function add_once(named) {
    for (let reference of named) {
      let already = list_includes(references, reference);
      if (already) {
        continue;
      }
      list_add(references, reference);
    }
  }
  for (let couplet of couplets) {
    let sung = song_image_couplet_references(couplet.n);
    add_once(sung);
    let drawn = song_image_couplet_symbol_references(couplet.n);
    add_once(drawn);
  }
  return references;
}
