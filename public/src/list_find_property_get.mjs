import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_find_property_get(
  verses_chapter_folder,
  property_find,
  verse_number,
  property_get,
) {
  let v = list_find_property(
    verses_chapter_folder,
    property_find,
    verse_number,
  );
  let text = object_property_get(v, property_get);
  return text;
}
