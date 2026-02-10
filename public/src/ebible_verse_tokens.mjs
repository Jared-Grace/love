import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
export async function ebible_verse_tokens(
  bible_folder,
  chapter_code,
  verse_number,
) {
  let v = await ebible_verse(bible_folder, chapter_code, verse_number);
  let text = property_get(v, "text");
  let s = text_split_space(text);
  return s;
}
