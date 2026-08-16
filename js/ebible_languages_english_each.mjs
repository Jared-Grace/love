import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_languages_without_original_english_bible_folders_each } from "./ebible_languages_without_original_english_bible_folders_each.mjs";
export async function ebible_languages_english_each(lambda$bible_folder) {
  await ebible_languages_without_original_english_bible_folders_each(
    lambda$bible_folder,
  );
  let e = ebible_folder_english();
  lambda$bible_folder(e);
}
