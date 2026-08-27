export function sword_markup_removed(markup) {
  "$plain markup";
  "One verse of a Sword module as the words a reader sees, with everything the module wrote around them taken away.";
  "A verse arrives carrying marks that are nothing to do with its words: where a paragraph began, where the one before it ended, where a psalm's title sits, and the closing halves of the book and chapter it happens to finish. All of them are directions to something laying out a page, and none of them is anything a person reads.";
  "EVERY MARK BECOMES A SPACE RATHER THAN NOTHING AT ALL. A mark can stand between two words with no space of its own on either side, and dropping it to nothing would push those words together into one that is in no bible. Running the spaces together afterwards is what stops the space that was added showing up as a gap.";
  "A psalm's title is kept as words, because it is words - A Melody of David is what the psalm says about itself, and Rotherham printed it. Only the marking around it goes.";
  let spaced = markup.replace(/<[^>]*>/g, " ");
  let single = spaced.replace(/\s+/g, " ");
  let r = single.trim();
  return r;
}
