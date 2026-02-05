import { ebible_languages_chapters_cache } from "../../../love/public/src/ebible_languages_chapters_cache.mjs";
import { ebible_languages_chapters_cache_remove } from "./ebible_languages_chapters_cache_remove.mjs";
export async function ebible_languages_chapters_cache_refresh() {
  await ebible_languages_chapters_cache_remove();
  let r = await ebible_languages_chapters_cache();
  return r;
}
