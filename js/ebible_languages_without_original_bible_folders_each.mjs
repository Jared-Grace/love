import { each_async } from "./each_async.mjs";
import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
export async function ebible_languages_without_original_bible_folders_each(
  lambda,
) {
  let bible_folders = ebible_languages_without_original_bible_folders();
  await each_async(bible_folders, lambda);
}
