import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { songs_folder_passage_takes } from "./songs_folder_passage_takes.mjs";
import { psalms_song_file_part_or_null } from "./psalms_song_file_part_or_null.mjs";
import { list_map } from "./list_map.mjs";
export async function psalms_songs_folder_parts(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every part of a chapter of the Psalms a folder of downloaded songs holds a singing of, in the order of the psalter, each with the recording to work from and how many recordings of it there are.");
  ("★ IT IS THE COMPANION OF THE WHOLE-CHAPTER FINDING, AND BETWEEN THEM THEY ACCOUNT FOR EVERY PSALM SONG IN THE FOLDER. Until now a song of a stanza or of half a chapter was passed over silently by the only finder there was, so a drafting run over that folder finished saying it was done while nineteen passages had never been looked at. Two findings rather than one is what keeps a part out of a whole chapter's document; the same folder read twice with two readings is cheap, and one reading answering both questions would have to hand back a chapter number that means two different things.");
  ("A passage is keyed by its chapter and both its ends together, which is what lets two halves of one chapter be two passages and the two spellings of one half be one passage sung twice. The ends are spelled into the key exactly as the address spells them, so a passage that is one file here is one file there.");
  ("The order is the psalter's: by chapter, and within a chapter by where the part opens. A part opening inside a verse is placed by the verse it opens in and then by which half of that verse, so the second half of Psalm 145 follows the first even though both of them open at thirteen.");
  function part_keyed(read) {
    let key = read.chapter + "_" + read.verse_first + "-" + read.verse_last;
    return key;
  }
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
    if (same_half) {
      let r = 0;
      return r;
    }
    let earlier = less_than(one.read.verse_first, other.read.verse_first);
    let halves = earlier ? -1 : 1;
    return halves;
  }
  function part_of(passage) {
    let song = {
      chapter: passage.read.chapter,
      verse_first: passage.read.verse_first,
      verse_last: passage.read.verse_last,
      path_audio: passage.path_audio,
      takes: passage.takes,
    };
    return song;
  }
  let passages = await songs_folder_passage_takes(
    folder_audio,
    psalms_song_file_part_or_null,
    part_keyed,
  );
  passages.sort(part_before);
  let songs = list_map(passages, part_of);
  return songs;
}
