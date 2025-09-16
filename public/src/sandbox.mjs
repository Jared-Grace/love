import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter } from "./list_filter.mjs";
import { file_read } from "./file_read.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function sandbox() {
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  let mapped = list_map_property(books, "text");
  let file_path = "C:\\Users\\chris\\Documents\\god_created_man_why.txt";
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  function lambda(item) {
    list_add(list, item2);
  }
  let filtered = list_filter(split, lambda);
}
