import { file_overwrite } from "./file_overwrite.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { json_to } from "./json_to.mjs";
import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { ebible_references_parse_lines_generic } from "./ebible_references_parse_lines_generic.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_copy } from "./object_copy.mjs";
import { null_is } from "./null_is.mjs";
import { object_values } from "./object_values.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each_async } from "./each_async.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { text_to } from "./text_to.mjs";
import { bible_interlinear_verses_upload_folder } from "./bible_interlinear_verses_upload_folder.mjs";
import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_verses_uplifting_package_write(bible_folder) {
  let lines = bible_verses_uplifting();
  let interlinear_folder = bible_interlinear_verses_upload_folder();
  let is_interlinear = bible_folder === interlinear_folder;
  let interlinear_chapters = null;
  if (is_interlinear) {
    interlinear_chapters = await bible_interlinear_chapters();
    function chapter_normalize(chapter_verses) {
      function verse_normalize(verse) {
        let number = property_get(verse, "verse_number");
        property_set(verse, "verse_number", text_to(number));
      }
      each(chapter_verses, verse_normalize);
    }
    each_object(interlinear_chapters, chapter_normalize);
  }
  let books_cache = {};
  async function books_get(folder) {
    let cached = property_get_or_null(books_cache, folder);
    if (null_is(cached)) {
      cached = await ebible_version_books(folder);
      property_set(books_cache, folder, cached);
    }
    return cached;
  }
  let chapter_cache = {};
  async function verse_get(folder, chapter_code, verse_number) {
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
    let found = list_find_property_or_null(
      chapter_verses,
      "verse_number",
      verse_number,
    );
    if (null_is(found)) {
      return null;
    }
    return object_copy(found);
  }
  let bible_folders = [bible_folder];
  let map = {};
  async function line_each(line) {
    let verses = await ebible_references_parse_lines_generic(
      books_get,
      bible_folders,
      [line],
      verse_get,
    );
    let present_verses = list_filter_null_not_is(verses);
    let texts = list_map_property(present_verses, "text");
    let present = list_filter_null_not_is(texts);
    let joined = list_join_space(present);
    property_set(map, line, joined);
  }
  await each_async(lines, line_each);
  let values = object_values(map);
  let present = list_filter(values, text_empty_not_is);
  let count = list_size(present);
  let empty = list_empty_is(present);
  if (empty) {
    return count;
  }
  let name = text_combine_multiple(["bible/uplifting/", bible_folder, ".json"]);
  let joined_path = folder_public_join(name);
  let path = await user_repo_path_combine(joined_path);
  let json = json_to(map);
  await file_overwrite(path, json);
  return count;
}
