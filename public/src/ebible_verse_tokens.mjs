import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_verse_tokens(
  bible_folder,
  chapter_code,
  verse_number,
) {
  marker("1");
  let v = await ebible_verse(bible_folder, chapter_code, verse_number);
  object_property_set(object, property_name, value);
  return v;
}
