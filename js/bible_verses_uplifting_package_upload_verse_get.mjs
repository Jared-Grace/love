import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { property_set } from "./property_set.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { object_copy } from "./object_copy.mjs";
export async function bible_verses_uplifting_package_upload_verse_get(
  folder,
  chapter_code,
  verse_number,
  is_interlinear,
  interlinear_chapters,
  chapter_cache,
) {
  arguments_assert(arguments, 6);
  let chapter_verses = null;
  if (is_interlinear) {
    chapter_verses = property_get_or_null(interlinear_chapters, chapter_code);
    if (null_is(chapter_verses)) {
      return null;
    }
  } else {
    let exists = property_exists(chapter_cache, chapter_code);
    if (exists) {
      chapter_verses = property_get(chapter_cache, chapter_code);
    } else {
      chapter_verses = await ebible_verses(folder, chapter_code);
      property_set(chapter_cache, chapter_code, chapter_verses);
    }
  }
  let property_name = verse_number_key();
  let found = list_find_property_or_null(
    chapter_verses,
    property_name,
    verse_number,
  );
  if (null_is(found)) {
    return null;
  }
  let copy = object_copy(found);
  return copy;
}
