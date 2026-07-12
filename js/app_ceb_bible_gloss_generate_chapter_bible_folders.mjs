import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
export function app_ceb_bible_gloss_generate_chapter_bible_folders() {
  let c = ebible_folder_cebuano();
  let bible_folder = "engbsb";
  let bible_folders = [c, bible_folder];
  return bible_folders;
}
