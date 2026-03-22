import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { http_local_file_name } from "../../../love/public/src/http_local_file_name.mjs";
import { firebase_delete } from "../../../love/public/src/firebase_delete.mjs";
import { http_firebase_file_path } from "../../../love/public/src/http_firebase_file_path.mjs";
export async function ebible_version_download_zip_delete_generic(
  url_get,
  bible_folder,
) {
  let url = url_get(bible_folder);
  let f = http_firebase_file_path(url);
  await firebase_delete(f);
  let joined = http_local_file_name(url);
  await file_delete(joined);
  ("todo: delete unzipped contents");
}
