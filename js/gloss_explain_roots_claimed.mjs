export function gloss_explain_roots_claimed(explain) {
  "Every root a gloss explanation names in so many words, in the order it names them.";
  "A claim is the word root followed by a quoted word, allowing for the two fillers the corpus actually uses between them - 'the root is', 'the root word is'. Both the straight quote and the curly pair appear in the corpus, so both are read. An explanation that names its root some other way claims nothing here, and that is the honest answer rather than a guess: the caller is meant to fall back to a weaker test when this comes back empty.";
  let pattern = /root(?: word)?(?: is)?\s*['‘"]([^'’"]+)['’"]/g;
  let claimed = [];
  let match = pattern.exec(explain);
  while (match) {
    claimed.push(match[1]);
    match = pattern.exec(explain);
  }
  return claimed;
}
