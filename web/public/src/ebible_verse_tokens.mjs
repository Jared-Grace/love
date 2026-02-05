import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_verse_tokens(
  bible_folder,
  chapter_code,
  verse_number,
) {
  let v = await ebible_verse(bible_folder, chapter_code, verse_number);
  let text = object_property_get(v, "text");
  let s = string_split_space(text);
  return s;
}
