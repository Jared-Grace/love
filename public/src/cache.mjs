import { ebible_version_chapters } from "../../../love/public/src/ebible_version_chapters.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function cache(bible_folder) {
  marker("1");
  return await ebible_version_chapters(bible_folder);
}
