import { text_frozen } from "./text_frozen.mjs";
export function bible_glyph_chapters_literal_bible_folder() {
  "The storage folder holding each chapter's interlinear words for the word-for-word drawing.";
  "FROZEN, because the page reads it by this name once it is uploaded, and a folder renamed after that strands every chapter already there.";
  let folder = text_frozen("glyph_literal");
  return folder;
}
