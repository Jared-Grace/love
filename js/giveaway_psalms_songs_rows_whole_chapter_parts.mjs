import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { equal } from "./equal.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { not } from "./not.mjs";
export function giveaway_psalms_songs_rows_whole_chapter_parts(
  rows,
  verse_last_by_chapter,
) {
  arguments_assert(arguments, 2);
  ("$plain rows");
  ("$plain verse_last_by_chapter");
  ("Every row of a giveaway record whose verse range runs from the first verse of its chapter to the last verse that chapter has, judged against a set of chapter lengths handed in.");
  ("★ A RANGE COVERING ITS WHOLE CHAPTER PUTS ONE PSALM AT TWO PERMANENT ADDRESSES, WHICH IS THE ONE FAULT THAT CANNOT BE REPAIRED AFTER AN UPLOAD. Psalm 93 has five verses. Psalm_93_1-5.wav and Psalm_93.wav are therefore the same scripture sung twice, and the naming spells them PSA093_001-005 and PSA093 - two addresses, two places in a sorted listing, two things for somebody who wanted Psalm 93 to find, and no reason given for either. Takes of one passage are meant to be told apart by the mark at the end of the name and by nothing else, so two takes landing on two passage codes is the mark doing nothing and the passage code doing the mark's job.");
  ("★ IT WAS FOUND BY BEING ASKED ABOUT RATHER THAN BY ANY CHECK ON THIS RECORD, AND NO CHECK ON THIS RECORD COULD HAVE FOUND IT. Every other fault this record is guarded against is a contradiction inside the record: a name that is not what the naming rule spells, a name claimed twice, a recording claimed twice. This one is a contradiction between the record and the text of the psalm, and the record does not hold the text. So the question has to reach outside for the only fact that settles it - how many verses the chapter has.");
  ("★ THE REPAIR IS ON THE DISK AND NOT IN THE NAMING, WHICH IS WHY THIS REPORTS RATHER THAN CORRECTS. The rule for what a recording is called was given in words by the person who sings them: the word Psalm, then the chapter, then the verses, and no verses means the whole chapter. A file called Psalm_93_1-5.wav is that rule obeyed and a longer way of saying Psalm_93.wav, so the file is what is wrong and renaming it is what fixes it. Teaching the naming to fold a full span down to a bare chapter would hide the duplicate instead: two files would quietly share one passage code and start fighting over which take number each one gets, and that fight is silent.");
  ("★ A HALF VERSE AT EITHER END IS NOT A WHOLE SPAN, AND THE TEST HAS TO SAY SO IN ITS OWN TERMS. Six of the sung passages are cut inside a verse and name the halves with a letter - 7a, 24b, 13a. A range ending 7a stops halfway through verse seven, so it does not reach the end of a chapter whose last verse is seven, and reading 7a as the number seven would call it a whole chapter and be wrong. So both ends must be bare digits before any numbers are compared, and a letter at either end is enough on its own to leave the row alone.");
  ("★ THE CHAPTER LENGTHS ARE HANDED IN RATHER THAN FETCHED HERE, SO THAT THIS CAN BE SHOWN TO FIRE. The record on this disk has no row that offends, so running this over the record prints nothing - and a check that had stopped working would print nothing in exactly the same way. Fetching the lengths would make that the only way this could ever be run, because the fetch waits on a machine somewhere else and a written case cannot wait on one. Taking them as an argument is what lets a case name a chapter, a length and a row and watch the fault come back.");
  ("A chapter whose length was not handed in is passed over rather than guessed at, because guessing it is what would produce a wrong accusation about a permanent name.");
  ("Rows the reading cannot place are passed over without a word. That is not a silence worth closing here: the record is written by a walk that only admits names this same reading accepts, so a row it refuses is a record already broken in a way the other checks on it name loudly.");
  let found = [];
  for (let row of rows) {
    let read = psalms_song_file_read_or_null(row.file_name);
    if (equal(read, null)) {
      continue;
    }
    let whole_is = equal(read.verse_first, null);
    if (whole_is) {
      continue;
    }
    let first_plain_is = text_digits_is(read.verse_first);
    let last_plain_is = text_digits_is(read.verse_last);
    if (not(first_plain_is)) {
      continue;
    }
    if (not(last_plain_is)) {
      continue;
    }
    let left = Number(read.verse_first);
    let starts_at_one_is = equal(left, 1);
    if (not(starts_at_one_is)) {
      continue;
    }
    let chapter_verse_last = verse_last_by_chapter[read.chapter];
    let unknown_is = equal(chapter_verse_last, undefined);
    if (unknown_is) {
      continue;
    }
    let left2 = Number(read.verse_last);
    let spans_is = equal(left2, chapter_verse_last);
    if (not(spans_is)) {
      continue;
    }
    let one = {
      file_name: row.file_name,
      passage_code: row.passage_code,
      name_published: row.name_published,
      chapter: read.chapter,
      verse_first: read.verse_first,
      verse_last: read.verse_last,
      chapter_verse_last: chapter_verse_last,
    };
    found.push(one);
  }
  return found;
}
