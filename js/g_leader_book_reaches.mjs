export function g_leader_book_reaches() {
  "the books a leader arc may draw on, for each book that cannot supply its own arcs; first entry is the book the arcs are FOR, the rest are what it may also answer from";
  "ONE-WAY on purpose. A reach exists to feed a book too small to feed itself, and that need does not run both directions: Philemon's 19 passages over 216 leader turns is 11.4 uses of each, so it must borrow, while Titus at 35 is 6.2 - the edge of the 4-6 band a plant asks for - so Titus keeps its own arcs pure and is named here only as a lender. Reading the pair as one merged group would have cost Titus that purity for nothing.";
  "EVERY REACH LOOKS BACKWARD, never forward, and that is what lets a leader arc be capped at the chapter its plant is reading without losing anything. The two questions look alike and are not: a reach asks whether there is enough Scripture to draw on, a cap asks whether the player has met the text yet, and they agree only when the lender comes first in the canon. Philemon was written first and hid that, because Titus precedes it, so capping cost it nothing. The Johannine books were not: 2JN reaching into 3JN and JUD collapses to 11 passages under a cap - 19.6 uses, worse than the problem the reach was built to fix. So each of them borrows from what stands before it. 2JN takes 1JN (110 passages, 2.0 uses), 3JN takes both (123, 1.8), and JUD needs no change because 2JN and 3JN already precede it (43, 5.0).";
  "BELOW THE BAND IS NOT A DEFECT. The band binds at its TOP - a passage answered more than about six times in one plant starts repeating itself - so a wider pool buys variety and costs nothing. 1JN is 99 passages and so most of what 2JN reaches, which is honest rather than lopsided: 2JN is one chapter of eleven passages and a plant spans thirty-five to fifty-six, so a plant standing on 2JN was always going to be mostly its neighbour.";
  "HARD-CODED rather than derived from a passage-count threshold. It fires on four books of sixty-six, the counts move whenever the passage division is re-cut, and which neighbour a small book should borrow from is a reading judgment (Philemon takes Titus because it is adjacent and Titus is half of 2TI, not because arithmetic picked it). A threshold would look principled and quietly re-group books nobody reviewed.";
  "The OLD TESTAMENT is not covered. Only OBA (20 passages) and HAG (28) fall under the band there; neither has a reach yet because nobody has judged which neighbour they should answer from.";
  let reaches = [
    ["PHM", "TIT"],
    ["2JN", "1JN"],
    ["3JN", "1JN", "2JN"],
    ["JUD", "2JN", "3JN"],
  ];
  return reaches;
}
