import { ebible_verse_marks_gaps_unexplained_summaries } from "./ebible_verse_marks_gaps_unexplained_summaries.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function ebible_verse_marks_gaps_unexplained() {
  "Every verse number a chapter leaves out that neither the known publishing fault nor the known textual omissions account for, gathered under the translation it is in.";
  arguments_assert(arguments, 0);
  ("A chapter somebody has already read and written down a judgment about is taken away too, at whichever width they wrote it - the bible, the book, or the chapter. That is the third subtraction and the only one that stands on a person rather than on a measure, and it is what stops this answer growing back to its full size every time it is asked. What comes out is the part nobody has looked at yet, which is what a next letter is made of.");
  ("Two of the three reasons a number can be missing need no judgment at all, so they are taken away first and what is left is the only part a person has to read. A chapter carrying a displaced id is missing that number because of the fault already being written about, and reporting it again as a gap asks the same reader to fix the same thing twice. A number on the critical-text list is missing because the translation's editors meant it to be.");
  ("Gathered under the translation rather than listed one gap at a time, because that is what turns the answer from a thing nobody can read into a thing anybody can. The corpus holds a few thousand gaps, and a translation skipping four thousand numbers is one question about that translation - is this how it numbers, or is something wrong - while a translation skipping four is four chapters worth naming in a letter. Both are one row here, and the count is what tells them apart, so no line has to be drawn in advance.");
  ("Nothing is dropped for being widely shared. Sharing was what found the critical-text list, and once found the list stands on its own, so the count is not consulted again. A gap shared by five translations of the Septuagint is still reported here, because whether the Greek text is the reason for it is a judgment about those translations and this hands it over rather than making it.");
  ("How many whole chapters the translation skips is carried alongside, because a translation with a hole in its chapters is publishing a selection and its missing verses are that same editorial choice. It is a field and not a filter, for the same reason as the paragraph above: mwf2018 leaves out fifty-one verses of Matthew 27 and skips Psalms entirely, and the second fact is what settles the first - but the reader is the one who should get to see both and say so.");
  let summaries = await ebible_verse_marks_gaps_unexplained_summaries();
  function gaps_of(summary) {
    let gaps = property_get(summary, "gaps");
    return gaps;
  }
  list_sort_number_mapper_reverse(summaries, gaps_of);
  return summaries;
}
