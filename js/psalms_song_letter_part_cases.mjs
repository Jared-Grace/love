import { arguments_assert } from "./arguments_assert.mjs";
export function psalms_song_letter_part_cases() {
  arguments_assert(arguments, 0);
  ("Every passage any singing on this disk addresses by letter rather than by whole verses, with the first and last line the printing must hand back for it.");
  ("★ EACH LINE HERE WAS READ OFF THE SINGING AND NOT OFF THE PRINTING, WHICH IS WHY THIS CAN JUDGE THE PIECE RULE AT ALL. The letter is an address a person wrote on a file, so what it means is whatever they sang under it. Measured 2026-10-02 by having the recordings heard with none of the words handed over: the singing named 95_7b-11 opens on Today, if you hear His voice, and the singing named 104_24c-31 opens on the earth is full of Your creatures. A corpus copied out of the printing instead would agree with whatever the code currently does and could never disagree with it.");
  ("The two halves of a cut verse are both written down, because a rule that moves the cut moves them in opposite directions and either one alone would miss half of that. Psalm 104 verse 24 is the whole reason this exists: counting its sentences gives two pieces and the singer cut three, so a rule that goes back to counting sentences loses the last line of 14-24b and loses 24c-31 entirely.");
  ("Psalm 95 and Psalm 145 are the guard against overcorrecting. Neither verse has a semicolon in it, and counting every printed line would move both their letters - 95's 7b would open on and we are the people of His pasture, which is not what was sung. So these two fail on a rule that is too loose, and 104 fails on one that is too tight.");
  ("Psalm 145 opens on its ascription because the printing numbers that as verse 1, so the first line of 1-13a is Of David rather than the first thing sung. That is the printing's answer and is written down as it stands - whether a singing opens on the ascription is a question about the singing and is asked where the times are.");
  ("Only the first and last line are written down rather than all of them, because a cut is a decision about where a passage starts and stops and the lines between are the printing's business. Holding every line would make this corpus go red whenever a translation was corrected, which is a different fault and would be reported as this one.");
  let cases = [
    {
      name: "the first half of Psalm 95, stopping inside verse 7 after the sentence about God's pasture",
      version: "bsb",
      book_code: "PSA",
      chapter_number: 95,
      verse_first: "1",
      verse_last: "7a",
      line_first: "Come, let us sing for joy to the LORD;",
      line_last: "the sheep under His care.",
    },
    {
      name: "the second half of Psalm 95, which the singer opens on the next sentence and not on the next line",
      version: "bsb",
      book_code: "PSA",
      chapter_number: 95,
      verse_first: "7b",
      verse_last: "11",
      line_first: "Today, if you hear His voice,",
      line_last: "“They shall never enter My rest.”",
    },
    {
      name: "the first half of Psalm 104's middle third, stopping inside verse 24 one line further on than counting sentences allows",
      version: "bsb",
      book_code: "PSA",
      chapter_number: 104,
      verse_first: "14",
      verse_last: "24b",
      line_first: "He makes the grass grow for the livestock",
      line_last: "In wisdom You have made them all;",
    },
    {
      name: "the passage whose letter counting sentences cannot answer at all, opening on the third line of verse 24",
      version: "bsb",
      book_code: "PSA",
      chapter_number: 104,
      verse_first: "24c",
      verse_last: "31",
      line_first: "the earth is full of Your creatures.",
      line_last: "may the LORD rejoice in His works.",
    },
    {
      name: "the first half of Psalm 145, stopping inside verse 13 where its two sentences meet",
      version: "bsb",
      book_code: "PSA",
      chapter_number: 145,
      verse_first: "1",
      verse_last: "13a",
      line_first: "A Psalm of praise. Of David.",
      line_last: "and Your dominion endures through all generations.",
    },
    {
      name: "the second half of Psalm 145, opening on the second sentence of that verse",
      version: "bsb",
      book_code: "PSA",
      chapter_number: 145,
      verse_first: "13b",
      verse_last: "21",
      line_first: "The LORD is faithful in all His words",
      line_last: "forever and ever.",
    },
  ];
  return cases;
}
