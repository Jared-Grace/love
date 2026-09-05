import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_document_times_unheard } from "./lyric_video_document_times_unheard.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { lyric_video_document_times_heard_write } from "./lyric_video_document_times_heard_write.mjs";
export async function lyric_video_psalm_document_times_write(version, chapter) {
  "$plain version";
  "$plain chapter";
  "Listens to the singing of one whole chapter of the Psalms and writes the times into that chapter's timing document.";
  "★ THE LISTENING IS NOT HERE, AND KEEPING IT ELSEWHERE IS WHAT LET A STANZA BE TIMED AT ALL. Every line of the hearing - the two readings, the record kept of both, the mark saying the times are a machine's, the refusal to write over somebody's ear - is the same work whether the song is a whole psalm or eight verses of one. It used to live in this function, welded to finding a chapter by its number, and the effect was that nineteen part documents could not be reached by any command and sat holding the flat spread they were drafted with.";
  "WHAT IS LEFT HERE IS THE TWO THINGS GENUINELY ABOUT A WHOLE CHAPTER: that a chapter is said by a number alone, so the folder of songs is read for whole chapters and keyed by number; and that the document's address is the plain one rather than the one carrying a passage's two ends.";
  "THE CHAPTER IS NAMED AND THE SONG IS FOUND FROM IT, RATHER THAN THE SONG BEING NAMED. That is what makes this a command somebody can read back out of the log and run again from the same two words, where a path off one machine's download folder names nothing anywhere else and could not be replayed.";
  arguments_assert(arguments, 2);
  let number_chapter = Number(chapter);
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  let numbers = list_map_property(songs, "chapter");
  let at = numbers.indexOf(number_chapter);
  if (equal(at, -1)) {
    let unsung = lyric_video_document_times_unheard(
      number_chapter,
      "no whole singing of this chapter is on this machine",
    );
    return unsung;
  }
  let path_audio = songs[at].path_audio;
  let path_document = lyric_video_bible_document_path(
    version,
    "PSA",
    number_chapter,
  );
  let name_document = version + "_PSA_" + number_chapter;
  let r = await lyric_video_document_times_heard_write(
    number_chapter,
    path_audio,
    path_document,
    name_document,
  );
  return r;
}
