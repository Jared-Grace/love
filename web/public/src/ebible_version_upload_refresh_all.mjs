import { ebible_version_upload_refresh } from "../../../love/public/src/ebible_version_upload_refresh.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload_refresh_all(bible_folder) {
  marker("1");
  return await ebible_version_upload_refresh(bible_folder);
}
