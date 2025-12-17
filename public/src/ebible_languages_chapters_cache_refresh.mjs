import { ebible_languages_chapters_cache } from "../../../love/public/src/ebible_languages_chapters_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_languages_chapters_cache_remove } from "./ebible_languages_chapters_cache_remove.mjs";
export async function ebible_languages_chapters_cache_refresh() {
  marker("1");
  let v = await ebible_languages_chapters_cache_remove();
  let v2 = await ebible_languages_chapters_cache();
}
