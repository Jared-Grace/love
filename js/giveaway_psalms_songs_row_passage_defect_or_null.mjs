import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_part_or_null } from "./psalms_song_file_part_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { psalms_song_file_chapter_take } from "./psalms_song_file_chapter_take.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { equal } from "./equal.mjs";
import { giveaway_passage_code } from "./giveaway_passage_code.mjs";
export function giveaway_psalms_songs_row_passage_defect_or_null(row) {
  arguments_assert(arguments, 1);
  ("$plain row");
  ("What is wrong with the passage one row of the giveaway record claims, judged against the name the recording carries on this disk - or nothing where the two agree.");
  ("★ THIS IS THE ONLY QUESTION IN THE RECORD THAT IS ANSWERED FROM OUTSIDE THE RECORD, AND WITHOUT IT A WRONG PASSAGE IS AGREED WITH BY EVERYTHING. The other checks compare the record against itself: the given-away name is spelled again from the pieces stored beside it. That catches a name that drifted from its pieces and it cannot catch pieces that were wrong to begin with, because a name spelled from the wrong passage matches the wrong passage perfectly and every self-comparison comes back green. The disk name is the one witness that was not written by this record, so it is the only thing that can disagree with it.");
  ("The rule being checked was stated in words rather than inferred: the name of the recording says that it is a Psalm, says which chapter, and says which verses, and a name with no verses means the whole chapter. Both of those readings already existed as functions, so this does not restate the rule, it asks them.");
  ("★ SHARING ITS READERS WITH THE WRITER IS WHAT BOUNDS THIS CHECK, AND THE BOUND IS WORTH SAYING OUT LOUD. The record was written by reading these same names with these same two functions, so for a row written today this asks a question the writer already answered. What it catches is everything that happens afterwards: a row edited by hand, a record merged from a peer who held an older one, and above all a reader that changes while the record does not. The record is a file that outlives the run that made it and the readers are live code, which is the ordinary way two copies of one fact come apart - and the moment they do, every name already published stops being the name the rule now produces. What it cannot catch is a reader that was wrong from the start, because then both sides are wrong in the same direction. The check that would catch that asks the chapter's own text how many verses it has, and it is a different check because it needs the text and not the name.");
  ("★ THE COMPARISON RUNS FROM THE NAME TO THE CODE AND NEVER BACKWARD, BECAUSE ONE OF THESE NAMES CANNOT BE SPELLED BACK. Psalm 119 is cut into stanzas and its recordings are named by the Hebrew letter heading each one rather than by verse numbers, so the passage code for a stanza holds verse numbers that its own file name never says - and two of those letters are written as a pair of words. Spelling the disk name out of the stored code would have to invent the letter, and would also have to choose between the space and the underscore and between a dash and an underscore, each of which occurs on this disk for the same song. Reading forward asks the name what it says; spelling backward would have to guess how it was typed.");
  ("A name neither reading accepts is reported rather than passed over. Six of the recordings in this folder carry a song title where a passage should be, and a row built for one of those would otherwise sit in the record with a passage nothing on disk supports, which is the exact case this is here to notice.");
  ("One fault comes back rather than a list, because a row has one passage and there is nothing to say about it past the first thing that is wrong with it. The caller gathers these alongside the faults of the same shape it finds itself.");
  let file_name = row.file_name;
  let part_read = psalms_song_file_part_or_null(file_name);
  let part_missing = null_is(part_read);
  if (part_missing) {
    let whole_read = psalms_song_file_chapter_take(file_name);
    let whole_missing = null_is(whole_read);
    if (whole_missing) {
      let unread = {
        fault: "file_name_unread",
        file_name: file_name,
        name_published: row.name_published,
        expected: "",
      };
      return unread;
    }
    let chapter_code_whole = ebible_chapter_code_pad("PSA", whole_read.chapter);
    let whole_same = equal(chapter_code_whole, row.passage_code);
    if (whole_same) {
      return null;
    }
    let whole_defect = {
      fault: "passage_code_differs",
      file_name: file_name,
      name_published: row.name_published,
      expected: chapter_code_whole,
    };
    return whole_defect;
  }
  let chapter_code_part = ebible_chapter_code_pad("PSA", part_read.chapter);
  let passage_code_read = giveaway_passage_code(
    chapter_code_part,
    part_read.verse_first,
    part_read.verse_last,
  );
  let part_same = equal(passage_code_read, row.passage_code);
  if (part_same) {
    return null;
  }
  let part_defect = {
    fault: "passage_code_differs",
    file_name: file_name,
    name_published: row.name_published,
    expected: passage_code_read,
  };
  return part_defect;
}
