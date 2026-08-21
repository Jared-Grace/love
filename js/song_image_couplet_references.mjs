export function song_image_couplet_references(n) {
  "$plain n";
  "The passages of scripture one line of this hymn rests on, in the order its explanation names them.";
  "A line with no explanation rests on nothing as far as this is concerned, and is answered with an empty list rather than with nothing at all - so a caller can go straight on to asking how many there are.";
  "The page that shows one line and the list built for the whole song both come through here, which is what keeps them from disagreeing about what a line rests on.";
  arguments_assert(arguments, 1);
  let gloss = song_image_couplet_gloss(n);
  let unglossed = equal(gloss, undefined);
  if (unglossed) {
    return [];
  }
  let split = text_split_comma_or_empty(gloss.lyric_ref);
  let references = list_map(split, text_trim);
  return references;
}
