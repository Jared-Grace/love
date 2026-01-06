import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_chapters_upload(bible_folder) {
  marker("1");
  let chapters = await ebible_version_chapters_cache(bible_folder);
  return chapters;
}
