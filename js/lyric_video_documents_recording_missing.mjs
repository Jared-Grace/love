import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { path_basename } from "./path_basename.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function lyric_video_documents_recording_missing(version) {
  "$plain version";
  "Every timing document of a psalm whose singing is not on this machine, which is the set of documents nothing here can listen to again.";
  "★ IT IS THE QUESTION A FAILED RE-RUN ASKS AFTERWARDS, AND BEFORE THIS IT COULD ONLY BE ASKED ONE DOCUMENT AT A TIME. A writer handed a chapter and a mark it cannot find answers that no singing of it is on this machine, which is the truth and tells you nothing about the other two hundred and ten documents. Psalm 131's second singing turned out to be one of these - it was drafted from a recording that is no longer in the download folder, so its flat spread cannot be mended here however many times it is asked for - and finding that out took a reading of the folder by hand, with a shape typed out from memory that was wrong the first time.";
  "★ BOTH READINGS OF THE FOLDER ARE ASKED, BECAUSE A PSALM SUNG IN PARTS IS NOT FOUND BY THE READING THAT FINDS A WHOLE ONE. The two readings refuse each other's names on purpose: a whole-chapter name with verses in it is not a chapter, and a part name without them is not a part. Asking only one of them would report every document of the other kind as having no recording, which is the most convincing way there is to be wrong - nineteen part documents would have come back as unmendable with nothing saying the folder had never been looked at for them.";
  "★ THE ANSWER IS THE NAMES AND NOT A COUNT, BECAUSE THE ONLY THING TO DO WITH IT IS GO AND LOOK FOR A RECORDING. A count says how big the hole is and a name says which singing to find, and only the second can be acted on. The counts come back as well so that a reading can be told from a reading of nothing: a folder with no psalms in it at all would otherwise answer that every document is missing its recording, which is true and is not what the reader would take it to mean.";
  "The version is said rather than read off the document names, because a name begins with it. Documents of a second version would all be reported as having no recording of the first version's naming, which is a sentence nobody asked for.";
  "A document named here is not a fault. It means only that the singing it was timed against is somewhere else now, so whatever its times are - a person's, a machine's, or the flat spread it was drafted with - they are what this machine has, and the way to change them is to bring the recording back.";
  arguments_assert(arguments, 1);
  let folder_audio = folder_user_downloads_path("");
  let names_recorded = [];
  async function recorded_add(path_passage, mark) {
    "The name a song would be filed under is spelled the way the writers spell it, through the same two functions, so a document and the recording it was heard from cannot come to be named differently here than they are there.";
    let path_document = lyric_video_recording_document_path(path_passage, mark);
    let file_name = await path_basename(path_document);
    let name_document = text_without_ending(file_name, ".json");
    names_recorded.push(name_document);
  }
  let songs_chapters = await psalms_songs_folder_chapters(folder_audio);
  for (let song of songs_chapters) {
    let path_passage = lyric_video_bible_document_path(
      version,
      "PSA",
      song.chapter,
    );
    await recorded_add(path_passage, song.mark);
  }
  let songs_parts = await psalms_songs_folder_parts(folder_audio);
  for (let song of songs_parts) {
    let path_passage = lyric_video_bible_part_document_path(
      version,
      "PSA",
      song.chapter,
      song.verse_first,
      song.verse_last,
    );
    await recorded_add(path_passage, song.mark);
  }
  let read = await lyric_video_documents_read();
  let missing = [];
  for (let one of read) {
    let name = property_get(one, "name");
    let absent = list_includes_not(names_recorded, name);
    if (absent) {
      missing.push(name);
    }
  }
  let r = {
    version: version,
    documents: read.length,
    recordings: names_recorded.length,
    missing: missing,
  };
  return r;
}
