import { app_shared_page_path_prefix } from "./app_shared_page_path_prefix.mjs";
import { bible_glyph_artwork_folder_name } from "./bible_glyph_artwork_folder_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_image_source(glyph_name) {
  "$plain glyph_name";
  "the name is one glyph's name in this repo's own vocabulary. It is a word to put in an address and nothing that runs.";
  "Where a reader's browser fetches the drawn picture for one glyph.";
  "THE NAME IN THE ADDRESS IS THIS REPO'S GLYPH NAME and never the artwork set's, which is what lets a whole artwork set be swapped without a page being touched: the files change contents and keep their names. It is also why nothing here has to know which set the picture came from.";
  "The address is built with a step back out of the folder the page sits in, because a stage page sits one folder deep and a page at the site root does not. That question is asked once for the whole repo rather than answered here, so a picture Bible opened on a phone by the machine's name on the home network reaches the same files a page on the serving machine does.";
  let path_prefix = app_shared_page_path_prefix();
  let folder_name = bible_glyph_artwork_folder_name();
  let src = text_combine_multiple([
    path_prefix,
    folder_name,
    "/",
    glyph_name,
    ".svg",
  ]);
  return src;
}
