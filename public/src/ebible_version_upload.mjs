import { ebible_chapters_upload } from "../../../love/public/src/ebible_chapters_upload.mjs";
import { ebible_verses_upload } from "../../../love/public/src/ebible_verses_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload() {
  marker("1");
  await ebible_verses_upload(bible_folder);
  let chapters = await ebible_chapters_upload(bible_folder2);
}
