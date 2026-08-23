import { arguments_assert } from "./arguments_assert.mjs";
export function usfm_chapters_verses_cases() {
  arguments_assert(arguments, 0);
  ("A book written in usfm and the chapters and verses it comes to, written down rather than worked out.");
  ("Every case here is a shape a real published bible writes. What they have in common is that a reader who handled only the plain shape would be wrong about them silently - the verse would still come back, with somebody else's words in it, or with a footnote's words, or with a dictionary number read aloud as though it were scripture.");
  let cases = [
    {
      usfm: "\\id GEN\n\\c 1\n\\p\n\\v 1 In the beginning.\n\\v 2 And the earth.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "In the beginning.",
            },
            {
              verse_number: "2",
              text: "And the earth.",
            },
          ],
        },
      ],
      why: "the plain shape - what stands before the first chapter mark is the book's name and is dropped, and a paragraph mark between the chapter and its first verse is not a verse",
    },
    {
      usfm: "\\c 1\n\\v 1 First.\n\\c 2\n\\v 1 Second.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "First.",
            },
          ],
        },
        {
          chapter_number: "2",
          verses: [
            {
              verse_number: "1",
              text: "Second.",
            },
          ],
        },
      ],
      why: "two chapters, each keeping its own verses - the second chapter's verse one does not join the first chapter's",
    },
    {
      usfm: "\\c 1\n\\v 1 He spoke\\f + \\fr 1.1 \\ft Or, said.\\f* to them.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "He spoke to them.",
            },
          ],
        },
      ],
      why: "a footnote and everything in it comes away together. Keeping its words would put Or, said into the middle of the sentence it was a note about, and it would read as scripture",
    },
    {
      usfm: "\\c 1\n\\v 1 See it\\x - \\xo 1.1 \\xt Mark 1.1\\x* now.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "See it now.",
            },
          ],
        },
      ],
      why: "a cross reference goes the same way a footnote does - it is a translator writing to the reader rather than the book speaking",
    },
    {
      usfm: '\\c 1\n\\v 1 \\w Jesus|strong="G2424"\\w* wept.\n',
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "Jesus wept.",
            },
          ],
        },
      ],
      why: "what hangs on a word after the bar is a dictionary number and not scripture, so the bar and the number come away and the word stays",
    },
    {
      usfm: "\\c 1\n\\v 1 The \\nd Lord\\nd* is \\add my\\add* shepherd.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "The Lord is my shepherd.",
            },
          ],
        },
      ],
      why: "a mark around a word says how to print it and is heard by nobody, so the mark goes and the word it stood beside stays - the opposite of what is done to a note",
    },
    {
      usfm: "\\c 1\n\\q1\n\\v 1 A line\n\\q2 and its answer.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "A line and its answer.",
            },
          ],
        },
      ],
      why: "a verse written across two lines of poetry is one verse. The indent marks carry a digit, and a reader that stopped at the letters would leave a bare 2 standing in the middle of the psalm",
    },
    {
      usfm: "\\c 1\n\\s1 A heading\n\\v 1 The words.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "The words.",
            },
          ],
        },
      ],
      why: "a heading stands before the first verse mark and is a translator's summary rather than words of the book, so it is dropped rather than becoming a verse of its own",
    },
    {
      usfm: "\\c 1\n\\v 1-2 Both together.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1-2",
              text: "Both together.",
            },
          ],
        },
      ],
      why: "a verse spanning two numbers keeps both, as written. Counting it as a number would lose the second half of what the page says these words are",
    },
    {
      usfm: "\\c 1\n\\v 1 Here.\n\\v 2 []\n\\v 3 There.\n",
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "Here.",
            },
            {
              verse_number: "3",
              text: "There.",
            },
          ],
        },
      ],
      why: "a pair of brackets is how a translation writes a verse it has no words for. A reader shown a numbered blank would take it for a fault in the app rather than a fact about the translation",
    },
    {
      usfm: '\\c 1\n\\v 1 \\zaln-s |x-strong="H3068" x-content="יְהוָה"\\*\\w Yahweh|x-occurrence="1"\\w*\\zaln-e\\*\\zaln-s |x-strong="H0559"\\*\\w said|x-occurrence="1"\\w*\\zaln-e\\*,\n',
      chapters: [
        {
          chapter_number: "1",
          verses: [
            {
              verse_number: "1",
              text: "Yahweh said,",
            },
          ],
        },
      ],
      why: "a translation aligned word by word to the Hebrew. Three things about it are each enough on their own to ruin the verse: the pair marks are named with a hyphen, so stopping at the letters leaves a dash and a letter behind between every word; the star that closes the opening mark stands on its own away from any letters; and the marking falls between a word and its comma, which is how the comma ends up standing alone with a space either side of it",
    },
  ];
  return cases;
}
