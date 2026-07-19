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
import { each_async } from "./each_async.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_verses_uplifting_package_write(bible_folder) {
  let lines = bible_verses_uplifting();
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
    let exists = property_exists(chapter_cache, chapter_code);
    let chapter_verses = null;
    if (exists) {
      chapter_verses = property_get(chapter_cache, chapter_code);
    } else {
      chapter_verses = await ebible_verses(folder, chapter_code);
      property_set(chapter_cache, chapter_code, chapter_verses);
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
  let name = text_combine_multiple(["bible/uplifting/", bible_folder, ".json"]);
  let joined_path = folder_public_join(name);
  let path = await user_repo_path_combine(joined_path);
  let json = json_to(map);
  await file_overwrite(path, json);
}
