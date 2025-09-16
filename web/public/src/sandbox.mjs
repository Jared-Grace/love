import { list_map } from "./list_map.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_map_prefix_without_any } from "./list_map_prefix_without_any.mjs";
import { marker } from "./marker.mjs";
import { list_filter_starts_with_any } from "./list_filter_starts_with_any.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { file_read } from "./file_read.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function sandbox() {
  marker("1");
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  let mapped = list_map_property(books, "text");
  let file_path = "C:\\Users\\chris\\Documents\\god_created_man_why.txt";
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  let verse_references = list_filter_starts_with_any(mapped, split);
  let mapped2 = list_map_prefix_without_any(verse_references, mapped);
  function lambda(item) {
    let split2 = string_split_space(item);
    return split2;
  }
  let mapped3 = list_map(mapped2, lambda);
  return mapped3;
}
