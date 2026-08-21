export function song_image_couplets_glossed(verse_number) {
  "$plain verse_number";
  "The couplets of a verse of the hymn that somebody has written references for, each as the words it sings and the references behind them - or the whole hymn's when the number is 0.";
  "A REPEATED COUPLET APPEARS ONCE HERE. The words are sung twice and are written out twice in the lyrics, but the passage behind them does not change on the second hearing, and naming it again would read as a second, different reason for the same line.";
  "A couplet nobody has written a reference for is left out rather than carried with an empty one. The hymn is glossed couplet by couplet as the pictures for it are decided, so an unglossed couplet is work not yet done, and an entry saying only the words would look like a claim that they rest on nothing.";
  "This is the list, and laying it out is next door - because there is more than one way to lay it out and only one right answer to what is in it. A short description names the references, a long one writes the passages out under them, and both must be about exactly these couplets.";
  arguments_assert(arguments, 1);
  let couplets = song_image_couplets_verse(verse_number);
  let keys_named = [];
  let glossed = [];
  for (let couplet of couplets) {
    let key = song_image_couplet_key(couplet.n);
    let named = list_includes(keys_named, key);
    if (named) {
      continue;
    }
    list_add(keys_named, key);
    let gloss = song_image_couplet_gloss(couplet.n);
    let unglossed = equal(gloss, undefined);
    if (unglossed) {
      continue;
    }
    let references = gloss.lyric_ref;
    let bare = equal(references, "");
    if (bare) {
      continue;
    }
    let halves = [couplet.first, couplet.second];
    let words = list_join_space(halves);
    list_add(glossed, { words: words, references: references });
  }
  return glossed;
}
