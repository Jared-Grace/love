import { json_to } from "./json_to.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { facebook_dialog_labels } from "./facebook_dialog_labels.mjs";
export async function facebook_composer_public_ai_off_assert(page) {
  "$plain page";
  "Throws unless the open box for a new post reads public and its AI label reads off, naming the buttons it did find.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let labels = await facebook_dialog_labels(page);
  function public_is(l) {
    let a = l.indexOf("Sharing with Public");
    let reads_public = greater_than_equal(a, 0);
    return reads_public;
  }
  let b = labels.some(public_is);
  if (not(b)) {
    throw new Error(
      "privacy does not read public; buttons: " + json_to(labels),
    );
  }
  function ai_off_is(l) {
    let a2 = l.indexOf("AI label off");
    let reads_off = greater_than_equal(a2, 0);
    return reads_off;
  }
  let b2 = labels.some(ai_off_is);
  if (not(b2)) {
    throw new Error("AI label does not read off; buttons: " + json_to(labels));
  }
}
