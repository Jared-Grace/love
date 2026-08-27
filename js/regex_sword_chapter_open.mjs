export function regex_sword_chapter_open() {
  "The mark that opens a chapter in a Sword module, and the book and number of the chapter it opens.";
  "The chapter's own name is written as the book and the number joined by a dot - Gen.1 - so both are taken out here rather than the joined word being handed on for somebody else to split. A reader that carried the joined word would have to split it again at every place it wanted the number.";
  "IT ASKS FOR sID FOR THE SAME REASON THE BOOK MARK DOES. The closing mark carries eID and rides on the end of the last verse of the chapter, so taking it for an opening loses that verse and starts a chapter that never held anything. Measured against this very module, that was one verse gone from every one of the eleven hundred and eighty nine chapters.";
  "The book part is spelled as anything but a dot or a quote, so the dot that follows it is found rather than being swallowed by a run that would happily cross it.";
  let r = /<chapter\s(?=[^>]*\ssID=")[^>]*osisID="([^".]+)\.(\d+)"[^>]*\/>/;
  return r;
}
