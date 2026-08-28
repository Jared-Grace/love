import { not } from "./not.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { lyric_video_document_draft } from "./lyric_video_document_draft.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { lyric_video_document_write } from "./lyric_video_document_write.mjs";
export async function lyric_video_bible_write(
  version,
  book_code,
  chapter_number,
  path_audio,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "$plain path_audio";
  "The whole of making a lyric video, from a song and the passage it sings: hands back where the video was written.";
  "A FIRST RUN DRAFTS THE TIMES AND A SECOND RUN KEEPS THEM. Where each line begins is heard, not derived, so a first run can only spread the lines evenly over the song - which is a video worth watching once, to see the words are right, and never worth publishing. Somebody then corrects the numbers in the document this leaves behind, and running this again renders those instead of drafting over them. Redrafting a corrected document would throw away the only part of the work a command cannot do.";
  "THE VIDEO IS WRITTEN BESIDE THE SONG, WHICH IS WHERE A PERSON IS ALREADY LOOKING. Somebody who has just recorded or downloaded a song has that folder open; a video that appears somewhere inside the repo is one they have to be told how to find, and being told is the cost this exists to remove.";
  "The subtitle file is a workings-out and is left out of the repo. It holds nothing a person authored - every line of it is derived from the document and can be written again in a moment - so keeping it would be keeping a copy that can only go stale.";
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let drafted = await file_exists(path_document);
  if (not(drafted)) {
    await lyric_video_document_draft(
      version,
      book_code,
      chapter_number,
      path_audio,
      path_document,
    );
  }
  let document = await file_read_json(path_document);
  let stem = version + "_" + book_code + "_" + chapter_number;
  let path_subtitles = folder_gitignore_join(stem + ".ass");
  let folder_audio = await path_dirname(path_audio);
  let file_name =
    document.passage + " (" + document.credit + ") lyric video.mp4";
  let path_output = path_join([folder_audio, file_name]);
  await lyric_video_document_write(
    path_audio,
    path_document,
    path_subtitles,
    path_output,
  );
  let r = {
    path_document,
    path_output,
    drafted: not(drafted),
  };
  return r;
}
