import { ebible_version_upload_second } from "../../../love/public/src/ebible_version_upload_second.mjs";
import { ebible_verses_upload } from "../../../love/public/src/ebible_verses_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload(bible_folder) {
  marker("1");
  await ebible_verses_upload(bible_folder);
  await ebible_version_upload_second(bible_folder);
}
