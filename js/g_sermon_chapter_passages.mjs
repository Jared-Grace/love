import { fn_name } from "./fn_name.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
export async function g_sermon_chapter_passages(chapter) {
  "find a written chapter across both sermon stores (the write store first, then the edited bible store) and return its ordered passages";
  let v = g_sermon_edited_store_name();
  let stores = [fn_name("g_sermon_write"), v];
  for (let store of stores) {
    let path = storage_function_path_json(chapter, store);
    let exists = await file_exists(path);
    if (exists) {
      let data = await file_read_json(path);
      let passages = property_get_or(data, "passages", []);
      return passages;
    }
  }
  let r = [];
  return r;
}
