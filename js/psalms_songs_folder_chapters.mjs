import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { songs_folder_passage_takes } from "./songs_folder_passage_takes.mjs";
import { psalms_song_file_chapter_take } from "./psalms_song_file_chapter_take.mjs";
import { list_map } from "./list_map.mjs";
export async function psalms_songs_folder_chapters(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every chapter of the Psalms a folder of downloaded songs holds a whole singing of, in the order of the psalter, each with the recording to work from and how many recordings of it there are.");
  ("★ ONE RECORDING IS NAMED FOR EACH CHAPTER BECAUSE A CHAPTER HAS ONE TIMING DOCUMENT, AND WHICH ONE THAT IS IS NO LONGER DECIDED HERE. Naming the earliest take, and counting how many there are, is the same rule for a whole chapter and for a stanza, and it now lives once in the walk this hands its reading to. It used to live here as well, in a loop spelled out a second time beside the part finder's, where the two could have come to disagree about which recording a passage means without anything going red.");
  ("What is left here is the two things that are genuinely about chapters: that a chapter is said by a number alone, so a number is what a passage is keyed by; and that the order wanted is the psalter's, which for whole chapters is just the chapters counting up.");
  ("The folder is somebody's download folder and holds far more than psalms, so what is not a whole chapter is passed over rather than reported as a fault. A song of a stanza and a song of another book are both perfectly good files that this question is simply not about.");
  function chapter_keyed(read) {
    let chapter = read.chapter;
    return chapter;
  }
  function chapter_before(one, other) {
    let difference = subtract(one.read.chapter, other.read.chapter);
    return difference;
  }
  function song_of(passage) {
    let song = {
      chapter: passage.read.chapter,
      path_audio: passage.path_audio,
      takes: passage.takes,
    };
    return song;
  }
  let passages = await songs_folder_passage_takes(
    folder_audio,
    psalms_song_file_chapter_take,
    chapter_keyed,
  );
  passages.sort(chapter_before);
  let songs = list_map(passages, song_of);
  return songs;
}
