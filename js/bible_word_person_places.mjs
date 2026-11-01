export function bible_word_person_places() {
  "The passages where scripture names a person by a name others share, keyed by a word for that person: a book and chapter for a whole chapter, or a book, chapter and verse for one verse.";
  "A PLAIN NAME SAYS WHO IT IS BY WHERE IT STANDS. Seven women are called Mary, and a verse that says only Mary means the one the passage is about - the Mary who sat at Jesus' feet in Luke 10 is Martha's sister, not Jesus' mother. Asked for by the human 2026-11-01.";
  "EVERY VERSE THAT NAMES MARY IS PLACED, read from the World English Bible's New Testament 2026-11-01. Where one verse names two of them - Mary Magdalene and Mary the mother of James in Matthew 27:56 - both are placed there, and the verse's own words decide when they spell the longer name.";
  "Mary the wife of Clopas stands at the cross in John 19:25; Smith's and the Catholic Encyclopedia both take her for the mother of James and Joses, so their one article on her is placed at both.";
  let r = {
    mary_mother: [
      "MAT1",
      "MAT2",
      "MAT13:55",
      "MRK6:3",
      "LUK1",
      "LUK2",
      "ACT1:14",
    ],
    mary_magdalene: [
      "MAT27:56",
      "MAT27:61",
      "MAT28:1",
      "MRK15:40",
      "MRK15:47",
      "MRK16:1",
      "MRK16:9",
      "LUK8:2",
      "LUK24:10",
      "JHN19:25",
      "JHN20",
    ],
    mary_bethany: ["LUK10", "JHN11", "JHN12"],
    mary_james: [
      "MAT27:56",
      "MAT27:61",
      "MAT28:1",
      "MRK15:40",
      "MRK15:47",
      "MRK16:1",
      "LUK24:10",
    ],
    mary_clopas: ["JHN19:25"],
    mary_mark: ["ACT12:12"],
    mary_rome: ["ROM16:6"],
  };
  return r;
}
