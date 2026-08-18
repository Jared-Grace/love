import { repo_path_combine } from "./repo_path_combine.mjs";
export function bible_glyph_artwork_folder() {
  "The folder the picture Bible's drawn glyph files are kept in, as a full path on this machine.";
  "It sits under the published folder because these files are fetched by a page in a reader's browser rather than read by anything on this machine. A glyph that lived outside it would have to be copied in at build time, which is a step that can be forgotten.";
  "A file in here is named by THIS REPO'S glyph name and not by the artwork set's, so a page asks for the glyph it already knows about. Swapping artwork sets then changes what is inside these files and never their names, and no page is touched.";
  let combined = repo_path_combine("love", "public/img/glyph");
  return combined;
}
