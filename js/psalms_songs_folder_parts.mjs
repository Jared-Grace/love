import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { songs_folder_recordings } from "./songs_folder_recordings.mjs";
import { psalms_song_file_part_or_null } from "./psalms_song_file_part_or_null.mjs";
import { list_map } from "./list_map.mjs";
export async function psalms_songs_folder_parts(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every singing of a part of a chapter of the Psalms a folder of downloaded songs holds, in the order of the psalter, each with the recording it is and which take of that part it is.");
  ("★ IT IS THE COMPANION OF THE WHOLE-CHAPTER FINDING, AND BETWEEN THEM THEY ACCOUNT FOR EVERY PSALM SONG IN THE FOLDER. Two findings rather than one is what keeps a part out of a whole chapter's document; the same folder read twice with two readings is cheap, and one reading answering both questions would have to hand back a chapter number that means two different things.");
  ("★ EVERY RECORDING IS A ROW, BECAUSE TWO SINGINGS OF A PASSAGE ARE TWO SONGS. The stanza Qoph of Psalm 119 is sung five times and the two singings of Psalm 147:12-20 run to two and a half minutes and to nearly three; they are different arrangements and the point of having sung a passage twice is to have both. Answering with one recording and a count left the rest unreachable.");
  ("A passage is told apart by its chapter and both its ends together, which is what lets two halves of one chapter be two passages, and the ends are spelled exactly as the address spells them.");
  ("The order is the psalter's: by chapter, and within a chapter by where the part opens. A part opening inside a verse is placed by the verse it opens in and then by which half of that verse, so the second half of Psalm 145 follows the first even though both of them open at thirteen. Takes of one passage follow each other in the order the file names number them, so the earliest singing is still the first row of its passage.");
  function part_before(one, other) {
    let chapters = subtract(one.read.chapter, other.read.chapter);
    let same_chapter = equal(chapters, 0);
    if (not(same_chapter)) {
      return chapters;
    }
    let first_one = parseInt(one.read.verse_first, 10);
    let first_other = parseInt(other.read.verse_first, 10);
    let verses = subtract(first_one, first_other);
    let same_verse = equal(verses, 0);
    if (not(same_verse)) {
      return verses;
    }
    let same_half = equal(one.read.verse_first, other.read.verse_first);
    if (not(same_half)) {
      let earlier = less_than(one.read.verse_first, other.read.verse_first);
      let halves = earlier ? -1 : 1;
      return halves;
    }
    let same_end = equal(one.read.verse_last, other.read.verse_last);
    if (not(same_end)) {
      let shorter = less_than(one.read.verse_last, other.read.verse_last);
      let ends = shorter ? -1 : 1;
      return ends;
    }
    let takes = subtract(one.read.take, other.read.take);
    return takes;
  }
  function part_of(recording) {
    let song = {
      chapter: recording.read.chapter,
      verse_first: recording.read.verse_first,
      verse_last: recording.read.verse_last,
      take: recording.read.take,
      path_audio: recording.path_audio,
    };
    return song;
  }
  let recordings = await songs_folder_recordings(
    folder_audio,
    psalms_song_file_part_or_null,
  );
  recordings.sort(part_before);
  let songs = list_map(recordings, part_of);
  return songs;
}
