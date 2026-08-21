export function song_image_couplets_description_brief(
  verse_number,
  elsewhere,
) {
  "$plain verse_number";
  "$plain elsewhere";
  "What goes under a video of this hymn when the passages themselves will not fit: the words it sings, then the references named only, then whatever says where the words can be read.";
  "THE LAST PART IS NOT OPTIONAL IN SPIRIT, only in the code. A description that names references and stops has handed the reader a list of places to go and no way of getting there, and nearly nobody goes. Whoever calls this owes the reader that line.";
  "It is the same shape as the full one, laid out by the same name, so the two cannot drift apart.";
  arguments_assert(arguments, 2);
  let scripture = song_image_couplets_scripture_brief(verse_number);
  let r = song_image_couplets_description_of(verse_number, scripture, elsewhere);
  return r;
}
