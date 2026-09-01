import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { file_extension_mp3 } from "./file_extension_mp3.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_folder_mp3_path(bible_folder, chapter_code, stem) {
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain stem";
  arguments_assert(arguments, 3);
  ("Where one sound file of a recorded chapter is kept, given the word its name is built on.");
  ("★ EVERY SOUND FILE OF A CHAPTER LIVES IN ONE FOLDER AND IS AN MP3, AND THAT WAS WRITTEN OUT ONCE PER KIND OF FILE. The pieces are named for their number and the joined whole is named for the chapter, which is the whole of the difference between them; everything else - which folder, which ending, how the ending is stuck on - was the same run of lines standing at the end of both.");
  ("THE ONE WORD THAT DIFFERS IS THE ONE THING HANDED IN. A caller decides what its file is named after and nothing else, so a change to where the sound of a chapter lives, or to what it is stored as, moves every kind of file at once rather than whichever kind somebody remembered.");
  let folder = bible_audio_folder(bible_folder, chapter_code);
  let e = file_extension_mp3();
  let name = text_combine_multiple([stem, e]);
  let p = path_join([folder, name]);
  return p;
}
