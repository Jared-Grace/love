import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chapter_audio_join } from "./bible_audio_chapter_audio_join.mjs";
import { bible_audio_chapter_lines_timed } from "./bible_audio_chapter_lines_timed.mjs";
import { ebible_bible_folder_version_word } from "./ebible_bible_folder_version_word.mjs";
import { ebible_chapter_code_parse } from "./ebible_chapter_code_parse.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { lyric_video_document } from "./lyric_video_document.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { bible_audio_folder_book_video } from "./bible_audio_folder_book_video.mjs";
import { lyric_video_document_write } from "./lyric_video_document_write.mjs";
export async function bible_audio_chapter_video_write(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Makes the video of a recorded chapter - the chapter's own words on screen as they are read aloud - and hands back where it put it.";
  "★ IT IS THE VERY RENDERER THE SUNG PSALMS ALREADY USE, ASKED WITH A DIFFERENT DOCUMENT. A video of words over a sound is one job whether the sound is sung or spoken, and the only thing the two kinds disagree about is where the times came from - heard, here, and spread and then corrected by hand for a song. So the difference is spent entirely on making the document, and not one line of the rendering is written twice.";
  "★ THE OLDER WAY OF MAKING THIS BUILT A PICTURE AND A LITTLE VIDEO FOR EVERY PIECE AND JOINED THEM, which is one drawing and one encoding per piece and a join on top, where this is a single pass over the whole chapter. It also could not put a line on screen without ending a video, so nothing could ever be shown behind the words or beneath them.";
  "★ THE TIMING DOCUMENT IS NOT KEPT WITH THE REPOSITORY, BECAUSE NOBODY AUTHORS IT. Every number in it was measured from the sound a moment before it was written, so a kept copy could only go stale against a chapter recorded again - and a stale copy of a derived thing is worse than no copy, because it looks exactly like a correct one. A song's document is kept for the opposite reason: a person corrected it by ear, and that work exists nowhere else.";
  "★ THE VIDEO IS WRITTEN WHERE THE OLDER WAY WROTE IT, so that whatever joins a book's chapters into one long video finds them exactly where it always looked.";
  arguments_assert(arguments, 2);
  let path_audio = await bible_audio_chapter_audio_join(
    bible_folder,
    chapter_code,
  );
  let measured = await bible_audio_chapter_lines_timed(
    bible_folder,
    chapter_code,
  );
  let characters_max = lyric_video_screen_characters_max();
  let lines = lyric_video_lines_split_characters_max(measured, characters_max);
  let version = ebible_bible_folder_version_word(bible_folder);
  let parsed = ebible_chapter_code_parse(chapter_code);
  let book_code = property_get(parsed, "book_code");
  let chapter_number = ebible_chapter_code_to_number(chapter_code);
  let passage = await bible_usfm_version_passage_text(
    version,
    book_code,
    chapter_number,
  );
  let credit = bible_usfm_version_credit_text(version);
  let duration = await audio_file_duration(path_audio);
  let document = lyric_video_document(passage, credit, duration, lines);
  let stem = text_combine_multiple([version, "_", chapter_code]);
  let name = text_combine_multiple([stem, ".json"]);
  let path_document = folder_gitignore_join(name);
  let name2 = text_combine_multiple([stem, ".ass"]);
  let path_subtitles = folder_gitignore_join(name2);
  await file_overwrite_json(path_document, document);
  let path_output = bible_audio_folder_book_video(bible_folder, chapter_code);
  await lyric_video_document_write(
    path_audio,
    path_document,
    path_subtitles,
    path_output,
  );
  return path_output;
}
