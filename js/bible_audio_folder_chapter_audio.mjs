import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_folder_mp3_path } from "./bible_audio_folder_mp3_path.mjs";
export function bible_audio_folder_chapter_audio(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Where a chapter's whole sound is kept, once its pieces have been joined into one.";
  "★ IT SITS BESIDE THE PIECES IT WAS MADE FROM AND IS NAMED FOR THE CHAPTER, so that the joined whole is told apart from the recorded pieces by its name alone. A piece is named for its number, so a name that is a chapter's code can never be mistaken for one, and nothing has to keep a list of which files are workings and which is the finished thing.";
  "THAT NAMING IS THE WHOLE OF WHAT IS DECIDED HERE. Which folder the file sits in and what it is stored as are the same for every sound file of a chapter and are asked for by name, so the whole and the pieces it was made from cannot come to disagree about where they live.";
  arguments_assert(arguments, 2);
  let p = bible_audio_folder_mp3_path(bible_folder, chapter_code, chapter_code);
  return p;
}
