import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_chapter_paragraphed_text_cases() {
  arguments_assert(arguments, 0);
  ("A chapter written in usfm and the plain writing it lays out to, written down rather than worked out.");
  ("What every case here guards is one sentence: nothing comes out of this that a person did not say. The marked-up file carries the translators' section titles, their notes, their parallel passage references and the publisher's own bookkeeping, all of it in the same language and the same alphabet as the scripture it surrounds. Nothing in the words themselves tells the two apart - only the mark on the line does - so a reader who loses one mark hands somebody a modern editor's sentence sitting inside a psalm, reading as a line of it.");
  ("That is a fault nobody downstream can catch. A person pasting a psalm into a slide does not have the marked-up file open beside them, and the added line is grammatical, reverent and about the passage. It looks exactly like what they asked for.");
  ("The layout is written down here too, because for poetry the layout is not decoration. Hebrew poetry says what it says by putting a line beside its answer, and a psalm run together into one paragraph has lost something the translation was carrying.");
  let cases = [
    {
      usfm: "\\c 1\n\\q1 \\v 1 A line\n\\q2 and its answer.\n",
      chapter_number: "1",
      verse_numbers_shown: true,
      text: "1 A line\n  and its answer.",
      why: "the plain shape - a couplet, its answering line stepped in two spaces, and the verse number standing in the words rather than beside them",
    },
    {
      usfm: "\\c 1\n\\q1 \\v 1 A line\n\\q2 and its answer.\n",
      chapter_number: "1",
      verse_numbers_shown: false,
      text: "A line\n  and its answer.",
      why: "the same chapter with the numbers off differs by the numbers and by nothing else. Both answers come out of one reading, so the two cannot come to disagree about where a line breaks",
    },
    {
      usfm: "\\c 1\n\\q1 \\v 1 First line.\n\\b \n\\q1 \\v 2 Second line.\n",
      chapter_number: "1",
      verse_numbers_shown: true,
      text: "1 First line.\n\n2 Second line.",
      why: "a stanza break is written into the file as a mark of its own and comes out as a blank line. This is the half of the spacing that poetry states outright",
    },
    {
      usfm: "\\c 1\n\\s1 A Title The Translators Wrote\n\\q1 \\v 1 The words.\n",
      chapter_number: "1",
      verse_numbers_shown: false,
      text: "The words.",
      why: "THE CASE THIS WHOLE CORPUS EXISTS FOR. A section title is a modern editor's summary of the passage, set in the same type and the same language as the passage, with nothing but a line break between them. Kept, it is indistinguishable from scripture to anyone who pastes this somewhere; and it was kept, until somebody read the output and said so",
    },
    {
      usfm: "\\c 1\n\\r (\\ref John 1:1|JHN 1:1\\ref*)\n\\q1 \\v 1 The words.\n",
      chapter_number: "1",
      verse_numbers_shown: false,
      text: "The words.",
      why: "the parallel passage note goes with the titles, and it is the one that carries marks inside itself. That is why a line is judged by the mark that opens it rather than by reading up to the next mark - the next mark here is inside the note",
    },
    {
      usfm: "\\c 1\n\\p \\v 1 He spoke\\f + \\fr 1.1 \\ft Or, said.\\f* to them.\n",
      chapter_number: "1",
      verse_numbers_shown: true,
      text: "1 He spoke to them.",
      why: "a footnote and everything inside it comes away together, and it comes away before the marks do. Cleared the other way round, the note's own words would be left standing in the middle of the sentence they were a note about",
    },
    {
      usfm: "\\c 1\n\\d A Psalm of David.\n\\q1 \\v 1 The words.\n",
      chapter_number: "1",
      verse_numbers_shown: false,
      text: "A Psalm of David.\nThe words.",
      why: "THE ASCRIPTION IS KEPT, and it is the one line here that looks like a title and is not one. It is in the hebrew - it is scripture - so it is named in neither list of things to drop and falls through as ordinary text",
    },
    {
      usfm: "\\c 3\n\\s1 Deliver Me\n\\d \\v 1 A Psalm of David, when he fled.\n\\b \n\\q1 O LORD, how my foes have increased!\n\\q2 How many rise up against me!\n",
      chapter_number: "3",
      verse_numbers_shown: true,
      text: "1 A Psalm of David, when he fled.\n\nO LORD, how my foes have increased!\n  How many rise up against me!",
      why: "a hundred and seventeen psalms number the ascription as verse one and write it with the ascription mark and the verse mark on the same line. Dropping that line because it opens like a heading would drop verse one of every one of them, and nothing would count what was missing. The title above it goes; the ascription below it stays, with its number",
    },
    {
      usfm: "\\c 1\n\\p \\v 1 First words. \\v 2 Second words.\n\\p \\v 3 Third words.\n",
      chapter_number: "1",
      verse_numbers_shown: true,
      text: "1 First words. 2 Second words.\n\n3 Third words.",
      why: "prose says where its paragraphs break by starting a line with a paragraph mark and in no other way, so that mark is the whole of the spacing here. It also shows why the numbers go into the words: this line carries two verses, and a number kept beside the line could only ever have named the first",
    },
    {
      usfm: "\\c 14\n\\p \\v 1 Fourteen.\n\\c 149\n\\p \\v 1 One forty-nine.\n\\c 15\n\\p \\v 1 Fifteen.\n",
      chapter_number: "149",
      verse_numbers_shown: false,
      text: "One forty-nine.",
      why: "chapter fourteen's mark is the whole of the front of chapter a hundred and forty-nine's, so a reader matching the front of the line opens at fourteen and stays open. The number is compared whole",
    },
    {
      usfm: "\\c 1\n\\b \n\\s1 Heading\n\\b \n\\p \\v 1 The words.\n\\b \n\\b \n\\p \\v 2 More.\n",
      chapter_number: "1",
      verse_numbers_shown: false,
      text: "The words.\n\nMore.",
      why: "no blank line opens the passage and none is ever laid on top of another. A blank at the top is invisible to whoever pastes this and shifts everything they paste down by a line; and once a title is dropped, the break marks the printing set around it would otherwise be left behind as a hole where it used to be",
    },
    {
      usfm: "\\c 1\n\\p \\v 1 The first words.\n\\s1 The Second Day\n\\p \\v 2 The second words.\n",
      chapter_number: "1",
      verse_numbers_shown: false,
      text: "The first words.\n\nThe second words.",
      why: "a title standing between two verses rather than above the first. Nothing about its position marks it out, and the verses on either side of it close up as though it had never been there",
    },
  ];
  return cases;
}
