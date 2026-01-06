import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_languages_without_original_bible_folders } from "../../../love/public/src/ebible_languages_without_original_bible_folders.mjs";
export async function ebible_languages_without_original_bible_folders_each(
  lambda,
) {
  let bible_folders = ebible_languages_without_original_bible_folders();
  await each_async(bible_folders, lambda);
}
