import { getBlob, getStorage, ref } from "firebase/storage";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
export async function firebase_download_blob_browser_or_null(path) {
  "$plain path";
  "One file's bytes brought down from storage in a browser, read as whoever is signed in, or null when they cannot be had - the file is not there, or this person may not read it. Both are the same answer to a page asking whether there is something to show.";
  arguments_assert(arguments, 1);
  let app = await firebase_app_initialize();
  let storage = getStorage(app);
  let file_ref = ref(storage, path);
  try {
    let blob = await getBlob(file_ref);
    return blob;
  } catch (e) {
    return null;
  }
}
