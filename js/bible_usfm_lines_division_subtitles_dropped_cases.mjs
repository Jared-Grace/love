import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_lines_division_subtitles_dropped_cases() {
  arguments_assert(arguments, 0);
  ("Chapters of usfm written the way the printings on this disk write them, each with the lines that should still be there once the printing's own division subtitles have been taken out.");
  ("★ THE TWO PRINTINGS ARE PINNED SIDE BY SIDE ON PURPOSE, because the line being taken out and the line being kept are written with the same mark and stand in the same place. The Berean sets the range a book of the Psalter covers under the words BOOK V; the World English Bible sets a real ascription in exactly that place, and it is scripture. A rule that read where the line stands would pass every Berean case here and quietly take three ascriptions out of the other printing.");
  ("The whole book is handed in beside the chapter because the question is about the printing rather than about the line, and a chapter on its own cannot answer it. The Berean cases carry a numbered ascription from elsewhere in the book, which is the thing that settles it.");
  ("A chapter with no descriptive title in it at all is here so that the ordinary case is pinned too - the answer has to be the very lines that went in, not merely lines that read the same.");
  let berean_book = [
    "\\c 3",
    "\\d \\v 1 A Psalm of David, when he fled from his son Absalom.",
    "\\c 107",
    "\\ms BOOK V",
    "\\d Psalms 107-150",
    "\\q1 \\v 1 Give thanks to the LORD, for He is good;",
  ];
  let english_book = [
    "\\ms1 BOOK 4",
    "\\d A Prayer by Moses, the man of God.",
    "\\q1",
    "\\v 1 Lord, you have been our dwelling place for all generations.",
  ];
  let cases = [
    {
      usfm_lines: [
        "\\ms BOOK V",
        "\\d Psalms 107-150",
        "\\q1 \\v 1 Give thanks",
      ],
      book_lines: berean_book,
      kept: ["\\ms BOOK V", "\\q1 \\v 1 Give thanks"],
      described:
        "a printing that numbers its ascriptions loses its division subtitle",
    },
    {
      usfm_lines: ["\\d \\v 1 A Psalm of David.", "\\q1 \\v 2 O LORD"],
      book_lines: berean_book,
      kept: ["\\d \\v 1 A Psalm of David.", "\\q1 \\v 2 O LORD"],
      described: "the same printing keeps the ascription it numbers as a verse",
    },
    {
      usfm_lines: [
        "\\ms1 BOOK 4",
        "\\d A Prayer by Moses, the man of God.",
        "\\q1",
        "\\v 1 Lord, you have been our dwelling place",
      ],
      book_lines: english_book,
      kept: [
        "\\ms1 BOOK 4",
        "\\d A Prayer by Moses, the man of God.",
        "\\q1",
        "\\v 1 Lord, you have been our dwelling place",
      ],
      described:
        "a printing that numbers no ascription keeps one standing under a major heading",
    },
    {
      usfm_lines: ["\\q1 \\v 1 Blessed is the man", "\\q2 who does not walk"],
      book_lines: berean_book,
      kept: ["\\q1 \\v 1 Blessed is the man", "\\q2 who does not walk"],
      described:
        "a chapter with no descriptive title in it comes through as it went in",
    },
  ];
  return cases;
}
