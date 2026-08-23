import { bible_glyph_artwork_folder_name } from "./bible_glyph_artwork_folder_name.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
export function bible_glyph_artwork_folder() {
  "The folder the picture Bible's drawn glyph files are kept in, as a full path on this machine.";
  "It sits in the assets folder, which is the folder that gets uploaded to storage whole - so a picture downloaded into here reaches a reader by being sent up, rather than by riding along in a deploy of the whole site.";
  "A file in here is named by THIS REPO'S glyph name and not by the artwork set's, so a page asks for the glyph it already knows about. Swapping artwork sets then changes what is inside these files and never their names, and no page is touched.";
  let folder_name = bible_glyph_artwork_folder_name();
  let combined = web_assets_folder_join(folder_name);
  return combined;
}
