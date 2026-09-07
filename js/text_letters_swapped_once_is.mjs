export function text_letters_swapped_once_is(word, other) {
  "Whether one word is another with a single pair of neighbouring letters exchanged and nothing else changed.";
  "Two letters trading places is one of the ways Cebuano writes a word it has built on, and it is also one of the commonest ways a source copies a word down wrong. Counted as letters it stands two edits away, which is the same distance as an origin somebody made up, so the count cannot tell the two apart and this can.";
  "Only neighbours are exchanged, never letters standing away from one another. Two letters swapping across a word is not a shape any writing produces; allowing it would join words that have nothing to do with each other and are merely built from the same letters.";
  "$plain word";
  "$plain other";
  "both name spellings being compared. Neither names anything that runs, reads a file, or reaches anywhere.";
  let size = word.length;
  let same_size = size === other.length;
  if (!same_size) {
    return false;
  }
  let last = size - 1;
  let i = 0;
  while (i < last) {
    let head = word.slice(0, i);
    let first = word.charAt(i);
    let second = word.charAt(i + 1);
    let tail = word.slice(i + 2);
    let swapped = head + second + first + tail;
    let same = swapped === other;
    if (same) {
      return true;
    }
    i = i + 1;
  }
  return false;
}
