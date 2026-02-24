import { firebase_storage_download } from "../../../love/public/src/firebase_storage_download.mjs";
export function firebase_storage_download_curried(project_url) {
  let r2 = async function firebase_storage_download_curried_result(
    destination,
  ) {
    let r = await firebase_storage_download(project_url, destination);
    return r;
  };
  return r2;
}
