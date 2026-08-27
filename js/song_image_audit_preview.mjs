import { song_image_page_shell } from "./song_image_page_shell.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_audit_row } from "./song_image_audit_row.mjs";
export function song_image_audit_preview() {
  "the whole hymn laid out for checking against Scripture, on the sandbox app at the hash song_image_audit: every couplet in the order it is sung, with its picture, the verses its words rest on, the verses its symbol rests on, and an account of each";
  "the hash is written as plain words rather than as a spelled function name, because that is what it is - a key in the previews registry, which nothing answers to as a function";
  "all thirty-six are shown and not the thirty-two distinct ones, because the thing being checked is the film, and in the film a repeated couplet is sung again and its picture is shown again. A list of distinct symbols would be a check on the drawing rather than on what a viewer sees.";
  "the page around the bands is drawn by the one that draws it for the review page too, so the two stay the same page with different contents rather than becoming two pages";
  let said =
    "every couplet as it is sung, with the picture it is sung over, " +
    "what the words rest on in Scripture and what the picture rests on";
  let root = song_image_page_shell(said);
  let couplets = song_image_couplets();
  for (let couplet of couplets) {
    song_image_audit_row(root, couplet);
  }
  return root;
}
