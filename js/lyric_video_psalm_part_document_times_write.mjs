import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_document_times_unheard } from "./lyric_video_document_times_unheard.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { lyric_video_document_times_heard_write } from "./lyric_video_document_times_heard_write.mjs";
export async function lyric_video_psalm_part_document_times_write(
  version,
  chapter,
  verse_first,
  verse_last,
) {
  "$plain version";
  "$plain chapter";
  "$plain verse_first";
  "$plain verse_last";
  "Listens to the singing of one part of a psalm - a stanza, or half a chapter - and writes the times into that part's timing document.";
  "★ IT IS THE PART'S TWIN OF THE WHOLE CHAPTER'S COMMAND, AND THE TWO SHARE EVERY LINE OF THE LISTENING. What differs is only which of the two readings of the download folder finds the recording, and which of the two spellings names the document; the hearing, the record kept of it, and the refusal to write over somebody's ear are one function both of them call. Written as a copy instead, the two would have drifted the first time either was improved, and nothing would have gone red.";
  "★ THE PART IS SAID BY ITS TWO ENDS AND NOT BY A NUMBER, WHICH IS WHY IT COULD NOT BE ASKED FOR BEFORE. A chapter is named by one number and a stanza by none, so a command taking a chapter number had no way to be pointed at fifteen sixteenths of Psalm 119. Naming the ends is also what tells two halves of one chapter apart, and the ends are spelled here exactly as the document's address spells them so that a passage that is one file there is one passage here.";
  "The part is named and the song is found from it, rather than the song being named. That is what makes this a command somebody can read back out of the log and run again from the same four words, where a path off one machine's download folder names nothing anywhere else and could not be replayed.";
  arguments_assert(arguments, 4);
  let number_chapter = Number(chapter);
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_parts(folder_audio);
  function part_key_of(song) {
    let key_song =
      song.chapter + "_" + song.verse_first + "-" + song.verse_last;
    return key_song;
  }
  let keys = list_map(songs, part_key_of);
  let key_wanted = number_chapter + "_" + verse_first + "-" + verse_last;
  let at = keys.indexOf(key_wanted);
  if (equal(at, -1)) {
    let unsung = lyric_video_document_times_unheard(
      number_chapter,
      "no singing of this part of this chapter is on this machine",
    );
    return unsung;
  }
  let path_audio = songs[at].path_audio;
  let path_document = lyric_video_bible_part_document_path(
    version,
    "PSA",
    number_chapter,
    verse_first,
    verse_last,
  );
  let name_document =
    version + "_PSA_" + number_chapter + "_" + verse_first + "-" + verse_last;
  let r = await lyric_video_document_times_heard_write(
    number_chapter,
    path_audio,
    path_document,
    name_document,
  );
  return r;
}
