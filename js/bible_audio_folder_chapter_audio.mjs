import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_extension_mp3 } from "./file_extension_mp3.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_folder_chapter_audio(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Where a chapter's whole sound is kept, once its pieces have been joined into one.";
  "★ IT SITS BESIDE THE PIECES IT WAS MADE FROM AND IS NAMED FOR THE CHAPTER, so that the joined whole is told apart from the recorded pieces by its name alone. A piece is named for its number, so a name that is a chapter's code can never be mistaken for one, and nothing has to keep a list of which files are workings and which is the finished thing.";
  arguments_assert(arguments, 2);
  let folder = bible_audio_folder(bible_folder, chapter_code);
  let e = file_extension_mp3();
  let name = text_combine_multiple([chapter_code, e]);
  let p = path_join([folder, name]);
  return p;
}
