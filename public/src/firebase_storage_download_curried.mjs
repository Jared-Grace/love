import { firebase_storage_download } from "../../../love/public/src/firebase_storage_download.mjs";
export async function firebase_storage_download_curried(project_url) {
  return async function firebase_storage_download_curried_result(destination) {
    return await firebase_storage_download(project_url, destination);
  };
}
