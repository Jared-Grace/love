import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
export function bible_audio_verses_manifest_path(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Where the note saying which sound file holds which verse is kept, beside the sound files themselves.";
  "It sits in the same folder as the audio rather than in the repo, because it is a fact about that particular recording and not about the chapter. Two recordings of one chapter cut it in different places, and a note kept away from its recording would end up describing the other one.";
  arguments_assert(arguments, 2);
  let folder = bible_audio_folder(bible_folder, chapter_code);
  let p = path_join([folder, "verses.json"]);
  return p;
}
