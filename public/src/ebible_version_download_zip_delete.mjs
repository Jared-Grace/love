import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_download_zip_delete(bible_folder) {
  marker("1");
  return await ebible_version_download(bible_folder);
}
