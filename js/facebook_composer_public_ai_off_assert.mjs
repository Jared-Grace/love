import { facebook_dialog_labels } from "./facebook_dialog_labels.mjs";
export async function facebook_composer_public_ai_off_assert(page) {
  "$plain page";
  "Throws unless the open box for a new post reads public and its AI label reads off, naming the buttons it did find.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let labels = await facebook_dialog_labels(page);
  function public_is(l) {
    let reads_public = l.indexOf("Sharing with Public") >= 0;
    return reads_public;
  }
  if (!labels.some(public_is)) {
    throw new Error(
      "privacy does not read public; buttons: " + JSON.stringify(labels),
    );
  }
  function ai_off_is(l) {
    let reads_off = l.indexOf("AI label off") >= 0;
    return reads_off;
  }
  if (!labels.some(ai_off_is)) {
    throw new Error(
      "AI label does not read off; buttons: " + JSON.stringify(labels),
    );
  }
}
