export function regex_sword_book_open() {
  "The mark that opens a book in a Sword module, and the name of the book it opens.";
  "A Sword module writes a book as a pair of marks standing where it starts and where it ends, rather than as something the words sit inside. Both marks carry the same book name, so a reader that asked only for the name would be told a book is beginning at the very place one is ending.";
  "THE OPENING MARK IS THE ONE CARRYING sID AND THAT IS THE WHOLE DIFFERENCE. The closing mark carries eID instead, and it is not written on a line of its own - it is stuck on the end of the last verse of the book. So a reader that took it for an opening would swallow that verse as a heading and lose it, and would lose exactly one verse per book without anything looking wrong.";
  "The two lookaheads ask about the same tag from the front rather than spelling one order of the attributes. osis2mod writes them in the order osisID, sID, type for a book and nothing promises that order, so requiring it would make the reader depend on a habit of the writing tool.";
  let r =
    /<div\s(?=[^>]*\ssID=")(?=[^>]*type="book")[^>]*osisID="([^"]+)"[^>]*\/>/;
  return r;
}
