export function bible_verses_ends(verses) {
  "For each verse in a run, whether it finishes a sentence - with null where the verse was never read and so cannot say.";
  "A verse that was not read is kept apart from one that simply did not finish a sentence, because the two mean opposite things to anything counting how far a sentence runs. Not finished says keep going; not read says nothing at all, and the counting has to stop rather than reach past it.";
  arguments_assert(arguments, 1);
  function lambda(verse) {
    let unread_is = null_is(verse);
    if (unread_is) {
      return null;
    }
    let text = property_get(verse, "text");
    let ended = bible_verse_end_is(text);
    return ended;
  }
  let ends = list_map(verses, lambda);
  return ends;
}
