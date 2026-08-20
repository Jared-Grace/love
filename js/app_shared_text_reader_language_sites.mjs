import { app_shared_text_reader_language_ast_objects } from "./app_shared_text_reader_language_ast_objects.mjs";
import { app_shared_text_reader_language_pickers } from "./app_shared_text_reader_language_pickers.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { not } from "./not.mjs";
export async function app_shared_text_reader_language_sites() {
  "Every place in the whole folder where a saying is handed to the reader in the language they read, each one with the file it stands in and the saying as it is written there.";
  "The whole folder is read rather than an index of who calls what. An index is built at some moment and answers for that moment; a button added since would be missing from it, and a reading that cannot see the newest thing is loud exactly when it does not matter and quiet exactly when it does.";
  "The ways of picking are the only files whose own calls are passed over. Each of them hands on what it was given rather than saying anything, so a saying written out at neither end is the mechanism working and not a page half turned.";
  "The count that complains and the change that repairs both ask this one question, so what gets repaired is the same set of places that was complained about. Two readings would be two chances to disagree, and the repair would then quietly fix something else.";
  let pickers = app_shared_text_reader_language_pickers();
  let picker_files = list_map(pickers, js_file_name);
  let records = await js_files_texts();
  let sites = [];
  for (let record of records) {
    let text = record.text;
    let mentions = text_includes_multiple_is(text, pickers);
    if (not(mentions)) {
      continue;
    }
    let mechanism = list_includes(picker_files, record.file);
    if (mechanism) {
      continue;
    }
    let ast = js_parse(text);
    let objects = app_shared_text_reader_language_ast_objects(ast);
    for (let object of objects) {
      list_add(sites, {
        file: record.file,
        object,
      });
    }
  }
  return sites;
}
