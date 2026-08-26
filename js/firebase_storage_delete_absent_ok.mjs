import { firebase_storage_delete } from "./firebase_storage_delete.mjs";
import { error_readable } from "./error_readable.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
export async function firebase_storage_delete_absent_ok(destination) {
  "$plain destination";
  "Remove one named file from storage, counting a file that is already not there as removed.";
  "What is wanted from a remove is that the file is gone, and a file that was never there is gone. So the one answer storage gives that says the goal is already met is not a failure here, and every other answer still is.";
  "This matters where a remove is tried again. A request that times out may well have been carried out at the far end, and the next attempt then meets a file that is no longer there - so a strict remove turns its own success into an error that no number of further attempts can get past. Measured on a folder of thirty thousand files: one timeout, four retries all answered no such object, and the sweep ended four folders short.";
  try {
    await firebase_storage_delete(destination);
  } catch (e) {
    let words = error_readable(e);
    let absent = text_includes(words, "No such object");
    let other = not(absent);
    if (other) {
      throw e;
    }
  }
}
