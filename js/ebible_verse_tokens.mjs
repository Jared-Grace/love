import { property_text_split_space } from "./property_text_split_space.mjs";
import { ebible_verse } from "./ebible_verse.mjs";
export async function ebible_verse_tokens(
  bible_folder,
  chapter_code,
  verse_number,
) {
  let v = await ebible_verse(bible_folder, chapter_code, verse_number);
  let s = property_text_split_space(v, "text");
  return s;
}
