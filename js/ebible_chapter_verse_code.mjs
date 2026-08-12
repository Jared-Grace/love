import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_chapter_verse_code(chapter_code, verse_number) {
  "One verse named the short way, as the chapter it is in and the number it carries there.";
  "This is for a record somebody reads rather than for a page, so it stays in the codes the machinery uses instead of turning them into the book name a reader would say. A record that says LUK01:2 can be pasted straight back into the thing that found it.";
  let code = text_combine_multiple([chapter_code, ":", verse_number]);
  return code;
}
