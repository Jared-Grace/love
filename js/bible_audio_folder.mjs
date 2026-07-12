import { folder_user } from "./folder_user.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_folder(bible_folder, chapter_code) {
  let folder = path_join(["audio", "bible", bible_folder, chapter_code]);
  let f = folder_user(folder);
  return f;
}
