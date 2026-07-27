export function text_identifier_count(text_source, identifier_name) {
  "How many times a whole word stands on its own in a text, leaving out the longer words that merely contain it. The twin next door swaps those same places for another word; this only counts them, which is what a caller needs when it has to say afterwards how much it changed.";
  "A number is the difference between a rewrite that can be checked and one that cannot. Sweeping a name through a folder of written text will happily rewrite an ordinary English word that a function happens to share - and the folder here holds lesson prose, where words like the ones for adding and for not are both. Saying how many places were touched in which file is what turns that from something found later into something seen at the time.";
  let segments = text_identifier_segments(text_source);
  function named_is(segment) {
    let piece = property_get(segment, "text");
    let identifier_is = property_get(segment, "identifier");
    if (not(identifier_is)) {
      return false;
    }
    let same_is = equal(piece, identifier_name);
    return same_is;
  }
  let named = list_filter(segments, named_is);
  let sites = list_size(named);
  return sites;
}
