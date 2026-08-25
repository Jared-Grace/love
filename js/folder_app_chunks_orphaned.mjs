import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_name_app_chunk } from "./file_name_app_chunk.mjs";
import { file_name_app_chunk_is } from "./file_name_app_chunk_is.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { file_read } from "./file_read.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { js_bundle_chunk_ids } from "./js_bundle_chunk_ids.mjs";
import { list_add } from "./list_add.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_pop } from "./list_pop.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
export async function folder_app_chunks_orphaned(folder, app_name) {
  "$plain folder";
  "$plain app_name";
  "Every extra script file of one app, in one folder, that nothing the app can reach ever sends for.";
  "★ A COMPILER NEVER TAKES BACK WHAT IT HAS STOPPED WRITING. Fix the thing that put a piece there and the next build simply stops naming it; the file itself stays where it was, with the date it was last written, and the folder is served and committed as it stands. So the folder outlives the reason - measured on the 25th of August, fifty megabytes of it, one package alone accounting for forty.";
  "★ THE WALK MUST START AT THE APP AND GO OUTWARD, and asking instead whether anything else in the folder names this piece is a different question with a much smaller answer. A piece left behind is usually left behind beside its neighbours, and those neighbours still name each other exactly as they did the day they were written - so a dead cluster keeps itself alive under that reading. On the same folders the outward walk found three hundred and one dead files where the neighbour reading found sixty eight.";
  "A piece sent for but not there is deliberately walked past rather than reported. That is the opposite fault and it already has somewhere to be reported, and stopping here on it would mean this could not finish its answer about a folder that has the other fault as well.";
  "An app with no script of its own left in the folder has every one of its pieces orphaned, because there is nothing there that could send for any of them.";
  arguments_assert(arguments, 2);
  let names = await folder_read_files(folder);
  function mine_is(file_name) {
    let mine = file_name_app_chunk_is(file_name, app_name);
    return mine;
  }
  let chunk_names = list_filter(names, mine_is);
  let entry_name = file_name_js(app_name);
  let entry_path = path_join([folder, entry_name]);
  let entry_there = await file_exists(entry_path);
  if (not(entry_there)) {
    return chunk_names;
  }
  let reached = [];
  let unread = [entry_path];
  while (list_empty_not_is(unread)) {
    let f_path = list_pop(unread);
    let text = await file_read(f_path);
    let ids = js_bundle_chunk_ids(text);
    for (let chunk_id of ids) {
      let file_name = file_name_app_chunk(chunk_id, app_name);
      let seen = list_includes(reached, file_name);
      if (seen) {
        continue;
      }
      let chunk_path = path_join([folder, file_name]);
      let there = await file_exists(chunk_path);
      if (not(there)) {
        continue;
      }
      list_add(reached, file_name);
      list_add(unread, chunk_path);
    }
  }
  let orphaned = list_difference(chunk_names, reached);
  return orphaned;
}
