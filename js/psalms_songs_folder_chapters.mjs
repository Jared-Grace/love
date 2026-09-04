import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { psalms_song_file_chapter_take } from "./psalms_song_file_chapter_take.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { path_join } from "./path_join.mjs";
export async function psalms_songs_folder_chapters(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every chapter of the Psalms a folder of downloaded songs holds a whole singing of, in the order of the psalter, each with the recording to work from and how many recordings of it there are.");
  ("★ ONE RECORDING IS NAMED FOR EACH CHAPTER BECAUSE A CHAPTER HAS ONE TIMING DOCUMENT, AND THE ONE NAMED IS THE EARLIEST RATHER THAN THE BEST. The renditions of a chapter differ in length, so times tapped against one of them fit none of the others; picking is a listening decision and there is nobody here to make it. The earliest is picked because it is the only one that can be picked without pretending to have listened, and how many there are travels out beside it so that a person choosing differently knows there is something to choose.");
  ("The folder is somebody's download folder and holds far more than psalms, so what is not a whole chapter is passed over rather than reported as a fault. A song of a stanza and a song of another book are both perfectly good files that this question is simply not about.");
  let file_names = await folder_read_files(folder_audio);
  let chapters = {};
  for (let file_name of file_names) {
    let read = psalms_song_file_chapter_take(file_name);
    if (equal(read, null)) {
      continue;
    }
    let held = chapters[read.chapter];
    if (not(held)) {
      held = {
        chapter: read.chapter,
        file_name: file_name,
        take: read.take,
        takes: 0,
      };
      chapters[read.chapter] = held;
    }
    held.takes = held.takes + 1;
    if (less_than(read.take, held.take)) {
      held.file_name = file_name;
      held.take = read.take;
    }
  }
  let list = object_property_names(chapters);
  let numbers = list_map(list, Number);
  function lambda(one, other) {
    let difference = subtract(one, other);
    return difference;
  }
  numbers.sort(lambda);
  function song_of(chapter) {
    let held = chapters[chapter];
    let song = {
      chapter: chapter,
      path_audio: path_join([folder_audio, held.file_name]),
      takes: held.takes,
    };
    return song;
  }
  let songs = list_map(numbers, song_of);
  return songs;
}
