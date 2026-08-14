import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_write } from "./file_write.mjs";
import { text_hash } from "./text_hash.mjs";
import { property_set } from "./property_set.mjs";
export async function qa_promoted_public_copy_case_app_write(folder) {
  "Put a small app into this folder as though it had just been built, and answer with its name, its page, and the note of what is being served that goes with it.";
  "It is the app the cases are made out of. Two files is what an app is at its smallest - a page and the script it sends for - and every way a copy can be false is a way one of those two can be wrong, so nothing bigger is needed to tell them apart.";
  "The note is reduced the same way the note of the live site is reduced, so what the reading is handed here is the same kind of thing it is handed in earnest.";
  let app_name = "replace";
  let page_name = file_name_html(app_name);
  let source_name = file_name_js(app_name);
  let page_open = `<!doctype html><html><head><title>replace</title></head><body><script src="`;
  let page_close = `"></script></body></html>`;
  let page_text = text_combine_multiple([page_open, source_name, page_close]);
  let source_text = `console.log("replace, as it was built");`;
  let f_path = path_join([folder, page_name]);
  await file_write(f_path, page_text);
  let f_path2 = path_join([folder, source_name]);
  await file_write(f_path2, source_text);
  let noted = {};
  let value = text_hash(page_text);
  property_set(noted, page_name, value);
  let value2 = text_hash(source_text);
  property_set(noted, source_name, value2);
  let served = {};
  property_set(served, app_name, noted);
  let r = {
    app_name,
    page_text,
    served,
  };
  return r;
}
