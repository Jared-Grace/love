import { deleteObject, getStorage, ref } from "firebase/storage";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
export async function firebase_delete_browser_if_exists(path) {
  "$plain path";
  "Deletes one file from storage in a browser, as whoever is signed in, and answers whether there was one to delete. A file that is not there is the outcome wanted, so it answers false rather than failing; any other refusal - not signed in, not allowed - still fails, because then the file may well still be there.";
  arguments_assert(arguments, 1);
  let app = await firebase_app_initialize();
  let storage = getStorage(app);
  let file_ref = ref(storage, path);
  try {
    await deleteObject(file_ref);
    return true;
  } catch (e) {
    if (equal(e.code, "storage/object-not-found")) {
      return false;
    }
    throw e;
  }
}
