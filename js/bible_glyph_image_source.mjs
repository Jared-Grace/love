import { bible_glyph_artwork_folder_name } from "./bible_glyph_artwork_folder_name.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { text_combine } from "./text_combine.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
export function bible_glyph_image_source(glyph_name) {
  "$plain glyph_name";
  "the name is one glyph's name in this repo's own vocabulary. It is a word to put in an address and nothing that runs.";
  "Where a reader's browser fetches the drawn picture for one glyph.";
  "THE NAME IN THE ADDRESS IS THIS REPO'S GLYPH NAME and never the artwork set's, which is what lets a whole artwork set be swapped without a page being touched: the files change contents and keep their names. It is also why nothing here has to know which set the picture came from.";
  "The address starts at storage rather than beside the page, so it is the same address wherever the page was opened from. It used to begin with a step back out of the folder the page sits in, and that step had to be worked out from how deep the page was - which came out wrong on a phone reaching the page by the machine's name on the home network.";
  let folder_name = bible_glyph_artwork_folder_name();
  let file_name = text_combine(glyph_name, ".svg");
  let path = list_join_slash_forward([folder_name, file_name]);
  let src = web_assets_url(path);
  return src;
}
