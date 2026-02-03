import { ebible_version_upload } from "../../../love/public/src/ebible_version_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload_refresh(bible_folder) {
  marker("1");
  let v = await ebible_version_upload(bible_folder);
  return v;
}
