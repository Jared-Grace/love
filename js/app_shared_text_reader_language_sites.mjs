import { app_shared_text_reader_language_pickers } from "./app_shared_text_reader_language_pickers.mjs";
import { list_map } from "./list_map.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_parse } from "./js_parse.mjs";
import { app_shared_text_reader_language_ast_picked } from "./app_shared_text_reader_language_ast_picked.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_text_reader_language_held_object_try } from "./app_shared_text_reader_language_held_object_try.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_text_reader_language_sites() {
  "Every place in the whole folder where a saying is handed to the reader in the language they read, each one with the file it stands in, the way of picking it went through, and the saying as it is written there.";
  "The whole folder is read rather than an index of who calls what. An index is built at some moment and answers for that moment; a button added since would be missing from it, and a reading that cannot see the newest thing is loud exactly when it does not matter and quiet exactly when it does.";
  "The ways of picking are the only files whose own calls are passed over. Each of them hands on what it was given rather than saying anything, so a saying written out at neither end is the mechanism working and not a page half turned.";
  "The count that complains and the change that repairs both ask this one question, so what gets repaired is the same set of places that was complained about. Two readings would be two chances to disagree, and the repair would then quietly fix something else.";
  "A saying fetched from a holder is followed to the holder, and the place is then filed under the holder's file rather than under the file that fetched it. That is where the words actually stand, so it is where somebody sent to mend them has to go and the only file a change can put them back on. Filing it under the fetcher would name a page that has no words on it.";
  "Reading the holder needs the whole folder open, which is why it is done here and not where a call is recognised. That reading is of one piece of writing at a time and is shared with the change that rewrites one - handing it a piece of somebody else's page would give the change something it cannot put back.";
  "Two places fetching the same holder are both set down rather than folded into one. How many sayings came through each way of picking is counted from these, and a fold would quietly make one of the ways look less used than it is.";
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
    let picked = app_shared_text_reader_language_ast_picked(ast);
    for (let one of picked) {
      let file = record.file;
      let object = one.object;
      let missing = null_is(object);
      let held_by = one.held_by;
      let unheld = null_is(held_by);
      if (missing) {
        if (not(unheld)) {
          let held = app_shared_text_reader_language_held_object_try(
            records,
            held_by,
          );
          let unwritten = null_is(held);
          if (not(unwritten)) {
            object = held;
            file = js_file_name(held_by);
          }
        }
      }
      list_add(sites, {
        file,
        picker: one.picker,
        object,
      });
    }
  }
  return sites;
}
