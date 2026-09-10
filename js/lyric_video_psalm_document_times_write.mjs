import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_document_times_unheard } from "./lyric_video_document_times_unheard.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { lyric_video_take_document_path } from "./lyric_video_take_document_path.mjs";
import { path_basename } from "./path_basename.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { lyric_video_document_times_heard_write } from "./lyric_video_document_times_heard_write.mjs";
export async function lyric_video_psalm_document_times_write(
  version,
  chapter,
  take,
) {
  "$plain version";
  "$plain chapter";
  "$plain take";
  "Listens to one singing of a whole chapter of the Psalms and writes the times into that singing's timing document.";
  "★ THE LISTENING IS NOT HERE, AND KEEPING IT ELSEWHERE IS WHAT LET A STANZA BE TIMED AT ALL. Every line of the hearing - the two readings, the record kept of both, the mark saying the times are a machine's, the refusal to write over somebody's ear - is the same work whether the song is a whole psalm or eight verses of one. It used to live in this function, welded to finding a chapter by its number, and the effect was that nineteen part documents could not be reached by any command and sat holding the flat spread they were drafted with.";
  "★ THE SINGING IS SAID AS WELL AS THE CHAPTER, BECAUSE A CHAPTER SUNG FIVE TIMES IS FIVE SONGS AND EACH HAS ITS OWN TIMES. Naming the chapter alone reached whichever recording came first and left the others unhearable; worse, the four arrangements differ in length, so times heard off one of them and written to a document the others share would be wrong for every one of them. The take is the number the recording's own file name carries, so the two words that name a song here are the two a person can read off the folder.";
  "WHAT IS LEFT HERE IS THE THINGS GENUINELY ABOUT A WHOLE CHAPTER: that a chapter is said by a number alone, so the folder of songs is read for whole chapters; and that the document's address is the plain one rather than the one carrying a passage's two ends.";
  "THE CHAPTER IS NAMED AND THE SONG IS FOUND FROM IT, RATHER THAN THE SONG BEING NAMED. That is what makes this a command somebody can read back out of the log and run again from the same three words, where a path off one machine's download folder names nothing anywhere else and could not be replayed.";
  "What the hearing is filed under is read back off the document's own address rather than spelled a second time, so a record and the document it is about cannot come to be named differently.";
  arguments_assert(arguments, 3);
  let number_chapter = Number(chapter);
  let number_take = Number(take);
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  function chapter_key_of(song) {
    let key_song = song.chapter + " (" + song.take + ")";
    return key_song;
  }
  let keys = list_map(songs, chapter_key_of);
  let key_wanted = number_chapter + " (" + number_take + ")";
  let at = keys.indexOf(key_wanted);
  if (equal(at, -1)) {
    let unsung = lyric_video_document_times_unheard(
      number_chapter,
      "no whole singing of this chapter under this take is on this machine",
    );
    return unsung;
  }
  let path_audio = songs[at].path_audio;
  let path_passage = lyric_video_bible_document_path(
    version,
    "PSA",
    number_chapter,
  );
  let path_document = lyric_video_take_document_path(path_passage, number_take);
  let file_name = await path_basename(path_document);
  let name_document = text_without_ending(file_name, ".json");
  let r = await lyric_video_document_times_heard_write(
    number_chapter,
    path_audio,
    path_document,
    name_document,
  );
  return r;
}
