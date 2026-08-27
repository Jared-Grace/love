import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_folder(bible_folder, chapter_code) {
  let root = bible_audio_root_folder();
  let f = path_join([root, bible_folder, chapter_code]);
  return f;
}
