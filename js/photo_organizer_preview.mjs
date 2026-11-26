import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_hash_name_second_or_empty } from "./html_hash_name_second_or_empty.mjs";
import { photo_organizer_folder_screen } from "./photo_organizer_folder_screen.mjs";
export async function photo_organizer_preview() {
  "A screen on the sandbox app, at hash photo_organizer, for keeping photos in folders: make folders, folders inside those to any depth, and add photos into any of them.";
  "It opens the folder named after the slash of the address, as #photo_organizer/top, so a link lands on the folder it was sent for.";
  "Everything is kept on this phone only, for now: nothing is sent to storage, so another phone does not see it.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_font_sans_serif_set_html();
  let key = html_hash_name_second_or_empty();
  await photo_organizer_folder_screen(root, key);
}
