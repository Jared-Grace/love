export function song_image_couplets_references() {
  "Every passage of scripture this hymn rests on, each named once, in the order the song first names it.";
  "IT IS ASKED BEFORE ANYBODY OPENS THE PAGE, which is the whole point of it - the set is fixed by the song, so the words behind it can be fetched, written into one file and put in storage ahead of time instead of a chapter at a time while a reader waits.";
  "Named once, because a hymn comes back to the same verse from several different lines and the page shows it under each of them. Asking for it twice would only fetch the same chapter twice.";
  "What one line rests on is asked next door, the same way the page asks it, so the file that is built can never hold a different set from the one the page goes looking for.";
  arguments_assert(arguments, 0);
  let couplets = song_image_couplets();
  let references = [];
  for (let couplet of couplets) {
    let named = song_image_couplet_references(couplet.n);
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
