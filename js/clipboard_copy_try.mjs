import { fn_name } from "./fn_name.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
export async function clipboard_copy_try(text) {
  "copy to the clipboard where a failure to copy must not be allowed to stop what is going on around it. a browser refuses navigator.clipboard.writeText unless the writing follows something the person just did, and it refuses it again when the document is not the focused one - so on a page that copies while it is opening, rather than under a thumb, the refusal is the normal case and not the rare one.";
  ("the refusal arrives as a throw, which is the wrong shape for it here: the copy is the last and least of what the caller wanted, and letting it throw hands a whole page's worth of work to an error path over a convenience that was never guaranteed. so it is caught and the caller carries on. call the plain ",
    fn_name("clipboard_copy"),
    " wherever the copy IS the thing asked for - a button whose only job is to copy has to say so when it fails, and silence there would be a lie.");
  async function lambda() {
    await clipboard_copy(text);
  }
  await catch_null_async(lambda);
}
