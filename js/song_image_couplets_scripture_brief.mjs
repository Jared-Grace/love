export function song_image_couplets_scripture_brief(verse_number) {
  "$plain verse_number";
  "The passages a verse of the hymn rests on, named and not written out - a line to a couplet, each line saying the words sung and then where they come from - or the whole hymn's when the number is 0.";
  "THIS IS THE FORM FOR WHEN THE PASSAGES WILL NOT FIT. Written out, the whole hymn comes to 17,639 letters against the 5,000 youtube keeps, so a song of all four verses cannot carry them and a song of one verse can. It is not the form to reach for otherwise: a bare reference asks the reader to go and find it somewhere else, which under a song nearly nobody does.";
  "Whoever writes this under a song owes the reader somewhere the words actually are, on the same page or one tap away. Naming the references and stopping is the thing this repo is trying not to do.";
  arguments_assert(arguments, 1);
  let glossed = song_image_couplets_glossed(verse_number);
  function lambda$line(entry) {
    let said = [entry.words, entry.references];
    let line = list_join(said, " - ");
    return line;
  }
  let lines = list_map(glossed, lambda$line);
  let r = list_join_newline(lines);
  return r;
}
