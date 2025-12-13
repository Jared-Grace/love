import { each } from "../../../love/public/src/each.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
export async function sandbox() {
  each(list, function lambda(item) {});
  let v = await ebible_version_chapters_cache("bible_folder");
}
