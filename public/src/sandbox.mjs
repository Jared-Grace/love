import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
export async function sandbox() {
  let v = await ebible_version_chapters_cache(bible_folder);
}
