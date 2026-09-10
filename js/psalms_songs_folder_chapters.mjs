import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { songs_folder_recordings } from "./songs_folder_recordings.mjs";
import { psalms_song_file_chapter_take } from "./psalms_song_file_chapter_take.mjs";
import { songs_recordings_marked } from "./songs_recordings_marked.mjs";
import { list_map } from "./list_map.mjs";
export async function psalms_songs_folder_chapters(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every singing of a whole chapter of the Psalms a folder of downloaded songs holds, in the order of the psalter, each with the recording it is and the short mark that tells it apart from the other singings of the same chapter.");
  ("★ EVERY RECORDING IS A ROW, BECAUSE TWO SINGINGS OF A PSALM ARE TWO SONGS. This used to answer with one recording per chapter and a count of how many there were, which meant the count was the only trace of the others and nothing downstream could reach them: Psalm 110 is sung five times in different arrangements, and four of those had no document, no video and no name to be given one under. A row each is what lets each arrangement be timed and shown on its own terms.");
  ("★ THE MARK IS ASKED FOR RATHER THAN THE TAKE NUMBER BEING USED, BECAUSE THE NUMBER DOES NOT SAY WHICH RECORDING. The numbering in these file names was put there by the thing that downloaded them, which numbered the compressed copies and the lossless copies as two separate runs - so a chapter can hold two differently numbered files that are the same performance, and two identically numbered files that are not. Measured across this folder, six passages had a collision and two of those were genuinely different arrangements sharing one address. What tells recordings apart is a question about the whole set of them, so the set is handed over and the answer comes back on each row.");
  ("What is left here is the two things that are genuinely about chapters: that a chapter is said by a number alone, and that the order wanted is the psalter's, which for whole chapters is just the chapters counting up. Within one chapter the takes follow in the order the file names number them, and recordings the names number alike follow in the order of their marks, so the ordering is settled whatever the folder holds.");
  ("The folder is somebody's download folder and holds far more than psalms, so what is not a whole chapter is passed over rather than reported as a fault. A song of a stanza and a song of another book are both perfectly good files that this question is simply not about.");
  function chapter_key_of(read) {
    let key = String(read.chapter);
    return key;
  }
  function chapter_before(one, other) {
    let chapters = subtract(one.read.chapter, other.read.chapter);
    let same_chapter = equal(chapters, 0);
    if (not(same_chapter)) {
      return chapters;
    }
    let takes = subtract(one.read.take, other.read.take);
    let same_take = equal(takes, 0);
    if (not(same_take)) {
      return takes;
    }
    let same_mark = equal(one.mark, other.mark);
    if (same_mark) {
      let r = 0;
      return r;
    }
    let earlier = less_than(one.mark, other.mark);
    let marks = earlier ? -1 : 1;
    return marks;
  }
  function song_of(recording) {
    let song = {
      chapter: recording.read.chapter,
      mark: recording.mark,
      path_audio: recording.path_audio,
    };
    return song;
  }
  let recordings = await songs_folder_recordings(
    folder_audio,
    psalms_song_file_chapter_take,
  );
  let marked = songs_recordings_marked(recordings, chapter_key_of);
  marked.sort(chapter_before);
  let songs = list_map(marked, song_of);
  return songs;
}
