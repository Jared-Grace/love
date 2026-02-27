import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
import { ebible_chapters_upload_refresh } from "../../../love/public/src/ebible_chapters_upload_refresh.mjs";
export async function sandbox() {
  let chapters = await ebible_version_chapters_cache(bible_folder);
  return;
  let bible_folder = "engbsb";
  await ebible_chapters_upload_refresh(bible_folder);
}
