import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { psalms_song_read_passage_code } from "./psalms_song_read_passage_code.mjs";
import { equal } from "./equal.mjs";
export function giveaway_psalms_songs_row_passage_defect_or_null(row) {
  arguments_assert(arguments, 1);
  ("$plain row");
  ("What is wrong with the passage one row of the giveaway record claims, judged against the name the recording carries on this disk - or nothing where the two agree.");
  ("★ THIS IS THE ONLY QUESTION IN THE RECORD THAT IS ANSWERED FROM OUTSIDE THE RECORD, AND WITHOUT IT A WRONG PASSAGE IS AGREED WITH BY EVERYTHING. The other checks compare the record against itself: the given-away name is spelled again from the pieces stored beside it. That catches a name that drifted from its pieces and it cannot catch pieces that were wrong to begin with, because a name spelled from the wrong passage matches the wrong passage perfectly and every self-comparison comes back green. The disk name is the one witness that was not written by this record, so it is the only thing that can disagree with it.");
  ("The rule being checked was stated in words rather than inferred: the name of the recording says that it is a Psalm, says which chapter, and says which verses, and a name with no verses means the whole chapter. That reading already existed as a function, so this does not restate the rule, it asks it.");
  ("★ SHARING ITS READER WITH THE WRITER IS WHAT BOUNDS THIS CHECK, AND THE BOUND IS WORTH SAYING OUT LOUD. The record was written by reading these same names with this same function, so for a row written today this asks a question the writer already answered. What it catches is everything that happens afterwards: a row edited by hand, a record merged from a peer who held an older one, and above all a reader that changes while the record does not. The record is a file that outlives the run that made it and the reader is live code, which is the ordinary way two copies of one fact come apart - and the moment they do, every name already published stops being the name the rule now produces. What it cannot catch is a reader that was wrong from the start, because then both sides are wrong in the same direction. The check that would catch that asks the chapter's own text how many verses it has, and it is a different check because it needs the text and not the name.");
  ("★ IT MUST BE THE WRITER'S READER AND NOT A LOOKALIKE, AND THAT IS NOT A TIDINESS POINT. This asked two other readers until the writer stopped asking them, and those two refuse a recording that came out of an editing session, because they feed the lyric-video timing documents where one chapter may hold only one singing. The writer now goes through the giveaway's own walk, which has no such limit and admits nine edited recordings the old pair passed over. Had this kept the old pair, the first of those nine to enter the record would have been reported here as a name nothing on disk can read - the check calling the record wrong about a file the check itself could not see. A check reading its subject through a different reader than the writer used is not checking the writer, it is comparing two readers and blaming the data.");
  ("★ THE COMPARISON RUNS FROM THE NAME TO THE CODE AND NEVER BACKWARD, BECAUSE ONE OF THESE NAMES CANNOT BE SPELLED BACK. Psalm 119 is cut into stanzas and its recordings are named by the Hebrew letter heading each one rather than by verse numbers, so the passage code for a stanza holds verse numbers that its own file name never says - and two of those letters are written as a pair of words. Spelling the disk name out of the stored code would have to invent the letter, and would also have to choose between the space and the underscore and between a dash and an underscore, each of which occurs on this disk for the same song. Reading forward asks the name what it says; spelling backward would have to guess how it was typed.");
  ("A name the reading does not accept is reported rather than passed over. Six of the recordings in this folder carry a song title where a passage should be, and a row built for one of those would otherwise sit in the record with a passage nothing on disk supports, which is the exact case this is here to notice.");
  ("One fault comes back rather than a list, because a row has one passage and there is nothing to say about it past the first thing that is wrong with it. The caller gathers these alongside the faults of the same shape it finds itself.");
  let file_name = row.file_name;
  let read = psalms_song_file_read_or_null(file_name);
  let unread_is = null_is(read);
  if (unread_is) {
    let unread = {
      fault: "file_name_unread",
      file_name: file_name,
      name_published: row.name_published,
      expected: "",
    };
    return unread;
  }
  let passage_code_read = psalms_song_read_passage_code(read);
  let same = equal(passage_code_read, row.passage_code);
  if (same) {
    return null;
  }
  let defect = {
    fault: "passage_code_differs",
    file_name: file_name,
    name_published: row.name_published,
    expected: passage_code_read,
  };
  return defect;
}
