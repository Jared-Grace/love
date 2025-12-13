import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
export async function sandbox() {
  let languages = ebible_languages();
  function lambda(item) {}
  each(list, lambda);
  let v = await ebible_version_chapters_cache("bible_folder");
}
