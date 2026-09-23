import {getStorage, ref, uploadBytes} from "firebase/storage";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
export async function firebase_upload_blob_browser_quiet_custom(
  destination,
  blob,
  custom,
) {
  "$plain destination";
  "$plain blob";
  "$plain custom";
  "Send one file's bytes up to storage from a browser, with nothing drawn over the page, carrying words of its own beside it - custom is an object of text values.";
  "Those words matter because a page opened at an address the store does not know may ask about a file but may not read it. What is said about a file reaches every page; what is in it does not.";
  arguments_assert(arguments, 3);
  let app = await firebase_app_initialize();
  let storage = getStorage(app);
  let file_ref = ref(storage, destination);
  await uploadBytes(file_ref, blob, {
    contentType: blob.type,
    customMetadata: custom,
  });
}
