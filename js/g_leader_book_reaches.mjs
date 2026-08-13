export function g_leader_book_reaches() {
  "the books a leader arc may draw on, for each book that cannot supply its own arcs; first entry is the book the arcs are FOR, the rest are what it may also answer from";
  "ONE-WAY on purpose. A reach exists to feed a book too small to feed itself, and that need does not run both directions: Philemon's 19 passages over 216 leader turns is 11.4 uses of each, so it must borrow, while Titus at 35 is 6.2 - the edge of the 4-6 band a plant asks for - so Titus keeps its own arcs pure and is named here only as a lender. Reading the pair as one merged group would have cost Titus that purity for nothing.";
  "The Johannine run is symmetric because each of its members is separately too small (2JN 11 passages is 19.6 uses, 3JN 13 is 16.6, JUD 19 is 11.4), not because reaches are mutual by nature. Together they are 43 passages, 5.0 uses. Each names its own home first, so the three reaches are three different lists that happen to hold the same books.";
  "HARD-CODED rather than derived from a passage-count threshold. It fires on four books of sixty-six, the counts move whenever the passage division is re-cut, and which neighbour a small book should borrow from is a reading judgment (Philemon takes Titus because it is adjacent and Titus is half of 2TI, not because arithmetic picked it). A threshold would look principled and quietly re-group books nobody reviewed.";
  "The OLD TESTAMENT is not covered. Only OBA (20 passages) and HAG (28) fall under the band there; neither has a reach yet because nobody has judged which neighbour they should answer from.";
  let reaches = [
    ["PHM", "TIT"],
    ["2JN", "3JN", "JUD"],
    ["3JN", "2JN", "JUD"],
    ["JUD", "2JN", "3JN"],
  ];
  return reaches;
}
