import { app_shared_loading_wait_text } from "./app_shared_loading_wait_text.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_loading_message_text() {
  "the single line shown under the loading spinner, shared by the runtime overlay and the build-time static splash so the wording never drifts between them";
  "THE WORDS ARE ASKED FOR AND THE PICTURE IS PUT ON HERE, which is why this is two calls and not one. What is said changes with the reader; the folded hands do not, and a picture written into the sentence would have to be placed again by hand in every language it was translated into.";
  "ASKED AT THE MOMENT IT IS SHOWN AND NOT KEPT. The static splash asks while the page is being built, where the answer can only be English, and the running app asks again once it knows the reader - so the same call gives the two of them different lines, on purpose.";
  let words = app_shared_loading_wait_text();
  let hands = emoji_pray();
  let r = text_combine_multiple([words, " ", hands]);
  return r;
}
