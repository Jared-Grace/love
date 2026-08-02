import { file_exists } from "./file_exists.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { file_read } from "./file_read.mjs";
import { firebase_prod_hashes_generic } from "./firebase_prod_hashes_generic.mjs";
import { list_add } from "./list_add.mjs";
import { qa_snapshot_app_file_path } from "./qa_snapshot_app_file_path.mjs";
export async function qa_snapshot_app_hashes(folder, app_name) {
  "$plain app_name";
  "One short word standing for each piece of an app that was just built inside the frozen copy";
  "This is the point of building there at all. What comes out of a frozen copy came from one commit, so these words are a record of what that commit builds into - and a record of that can be compared against what is waiting to be sent, which is the only way anybody can say the two are the same thing";
  "Each piece is asked for rather than assumed present, the same way its neighbours ask. Taking the pair on faith made every page carrying no script of its own report one that was never there";
  "The reducing is handed to the shared one rather than done again here. Both sides of a comparison have to be reduced the same way or the comparison means nothing, and the surest way to keep them the same is for there to be only one of them";
  let html = file_name_html(app_name);
  let js = file_name_js(app_name);
  let candidates = [html, js];
  let present = [];
  for (let file_name of candidates) {
    let path = qa_snapshot_app_file_path(folder, file_name);
    let there = await file_exists(path);
    if (there) {
      list_add(present, file_name);
    }
  }
  async function reader(file_name) {
    let path = qa_snapshot_app_file_path(folder, file_name);
    let text = await file_read(path);
    return text;
  }
  let hashes = await firebase_prod_hashes_generic(present, reader);
  return hashes;
}
