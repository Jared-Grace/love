import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
import { file_extension_mp3 } from "./file_extension_mp3.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_chunk_path(bible_folder, chapter_code, chunk) {
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain chunk";
  "Where the sound of one piece of a recorded chapter is kept.";
  "★ THE ADDRESS IS ASKED FOR IN ONE PLACE BECAUSE TWO READERS OF THE SAME PIECES MUST NEVER DISAGREE ABOUT WHERE THEY ARE. One of them measures how long each piece lasts and the other hands the pieces over to be joined end to end. Were they to spell the name apart, a change to how a piece is named would move one and not the other, and the video would then be timed against sound it was not made from - which is a fault nobody can see in the code and everybody can hear in the video.";
  arguments_assert(arguments, 3);
  let folder = bible_audio_folder(bible_folder, chapter_code);
  let t = text_to(chunk);
  let e = file_extension_mp3();
  let name = text_combine_multiple([t, e]);
  let p = path_join([folder, name]);
  return p;
}
