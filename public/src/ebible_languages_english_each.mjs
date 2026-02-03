import { ebible_languages_without_original_english_bible_folders_each } from "../../../love/public/src/ebible_languages_without_original_english_bible_folders_each.mjs";
import { ebible_versions_english_choices_each } from "../../../love/public/src/ebible_versions_english_choices_each.mjs";
export async function ebible_languages_english_each(lambda$bible_folder) {
  await ebible_languages_without_original_english_bible_folders_each(
    lambda$bible_folder,
  );
  await ebible_versions_english_choices_each(lambda$bible_folder);
}
