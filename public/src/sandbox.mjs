import { js_statement_return_add } from "./js_statement_return_add.mjs";
import { json_to } from "./json_to.mjs";
import { function_open } from "./function_open.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty } from "./list_empty.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_new } from "./function_new.mjs";
import { not } from "./not.mjs";
import { function_exists } from "./function_exists.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_filter_starts_with_any } from "./list_filter_starts_with_any.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { string_starts_with_space } from "./string_starts_with_space.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { string_ends_with_space } from "./string_ends_with_space.mjs";
import { string_trim_right } from "./string_trim_right.mjs";
import { each } from "./each.mjs";
import { string_starts_with_dot } from "./string_starts_with_dot.mjs";
import { string_skip_while } from "./string_skip_while.mjs";
import { string_starts_with_digit } from "./string_starts_with_digit.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { file_read } from "./file_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let file_path = folder_user_docs_path("bible_references.hopenation.org.txt");
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  let fns = [
    string_starts_with_digit,
    string_starts_with_dot,
    string_starts_with_space,
  ];
  function lambda2(item2) {
    item2 = whitespace_normalize(item2);
    each(fns, lambda);
    function lambda(fn) {
      item2 = string_skip_while(fn, item2);
    }
    item2 = string_trim_right(string_ends_with_space, item2);
    return item2;
  }
  let mapped = list_map(split, lambda2);
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  let mapped2 = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(mapped2, mapped);
  let f_name = "bible_verses_encouragement";
  let { exists } = await function_exists(f_name);
  if (not(exists)) {
    await function_new(f_name);
  }
  async function lambda3(ast) {
    let body_block = js_declaration_single_block_body(ast);
    list_empty(body_block);
    let code = json_to(verse_references);
    let expression = js_parse_expression(code);
    js_statement_return_add(argument, list);
    list_add(body_block, expression);
  }
  let output = await function_transform(f_name, lambda3);
  await function_open(f_name);
  return verse_references;
}
