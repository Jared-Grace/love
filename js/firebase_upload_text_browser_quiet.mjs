import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
import { getStorage, ref, uploadString } from "firebase/storage";
import { arguments_assert } from "./arguments_assert.mjs";
import { log_keep } from "./log_keep.mjs";
export async function firebase_upload_text_browser_quiet(destination, content) {
  arguments_assert(arguments, 2);
  ("send one piece of text up to storage from a browser with nothing shown to the person while it goes");
  ("The twin beside this one puts the loading overlay around the same send, which is right for a send somebody asked for and waits on. It is wrong for a send nobody asked for - a report of something that already went wrong should not put a spinner over the screen that has just recovered from it.");
  let app = await firebase_app_initialize();
  let storage = getStorage(app);
  let jsonRef = ref(storage, destination);
  await uploadString(jsonRef, content, "raw", {
    contentType: "application/json",
  });
  log_keep(
    firebase_upload_text_browser_quiet.name,
    "✅ JSON uploaded successfully",
  );
}
