import { bible_glyph_chapters_built_upload } from "./bible_glyph_chapters_built_upload.mjs";
export async function bible_glyph_chapters_built_upload_all() {
  "Build and publish every chapter of the picture Bible, writing over what storage already holds.";
  "IT EXISTS BECAUSE A COMMAND LINE CANNOT SAY NO. Every word handed over there arrives as text, and the word false is text that counts as yes, so asking for the overwriting run by argument skips every chapter and reports success over all of them. This is the ordinary run after the building changed, spelled as a name instead of a word.";
  let codes = await bible_glyph_chapters_built_upload(false);
  let r = codes.length;
  return r;
}
