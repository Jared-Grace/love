export function song_image_couplets_verse(verse_number) {
  "$plain verse_number";
  "the couplets of one verse of the hymn in the order they are sung, or every couplet in the hymn when the number is 0";
  "0 MEANS THE WHOLE HYMN RATHER THAN NOTHING. A song of this hymn is either a whole one or a verse of one, and both askings are the same question at two sizes. A caller made to tell them apart would write this filter a second time, and the second copy is the one that would go on saying verse 1 after somebody reordered the verses.";
  arguments_assert(arguments, 1);
  let verse = Number(verse_number);
  let couplets = song_image_couplets();
  let whole = equal(verse, 0);
  if (whole) {
    return couplets;
  }
  function lambda$of_verse(couplet) {
    let same = equal(couplet.verse, verse);
    return same;
  }
  let r = list_filter(couplets, lambda$of_verse);
  return r;
}
