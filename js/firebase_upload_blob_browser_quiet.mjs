import {getStorage, ref, uploadBytes} from "firebase/storage";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
export async function firebase_upload_blob_browser_quiet(destination, blob) {
  arguments_assert(arguments, 2);
  ("send one file's bytes up to storage from a browser, with nothing drawn over the page while it goes - for a send that happens behind a person's back, where covering the screen would stop them doing the next thing");
  ("The kind of file is the one the browser already knows the file to be, so a photo is stored as the picture it is rather than as text.");
  let app = await firebase_app_initialize();
  let storage = getStorage(app);
  let file_ref = ref(storage, destination);
  await uploadBytes(file_ref, blob, {
    contentType: blob.type,
  });
}
