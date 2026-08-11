import { folder_repo_love } from "./folder_repo_love.mjs";
import { file_name_app_chunk } from "./file_name_app_chunk.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { file_read } from "./file_read.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { folder_public } from "./folder_public.mjs";
import { js_bundle_chunk_ids } from "./js_bundle_chunk_ids.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_map } from "./list_map.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { path_join } from "./path_join.mjs";
export async function app_shared_prod_chunks_missing(app_name) {
  "$plain app_name";
  "Every extra script one app waiting to be sent will send for and will not find, named as it would be named if it were there.";
  "An app cut into pieces is only whole where all of its pieces are. Where the page and the script travelled and the extra scripts stayed behind, everything looks right until the moment the app sends for one - and what comes back then is a refusal, which the app usually swallows and reports as having found nothing.";
  "What it will send for is read out of the app itself rather than guessed, because the numbers are the build's own choice and are written down nowhere else.";
  "An app carrying no script of its own is answered as missing nothing, rather than being read for numbers it has no place to keep. There is such an app, and asking it to be read would fail on the app that is most certainly whole.";
  "The folder is the running copy's own, worked out from where this code sits on disk rather than looked up as the repo the person at the keyboard last chose. A gate is asked this at a commit, inside a frozen copy of the repo made for that one commit, and a copy like that carries no answer to which repo a person is working in - so reading it that way failed on the lookup instead of on the folder, and a gate that cannot run reads as a fault in whatever app was being judged.";
  "Spelled from the root rather than as a step from wherever the process happens to be standing. Both answer the same today, because the runner that asks the frozen copy its questions starts the program inside the copy on purpose; but that makes the answer depend on a decision made in another function, and a bare step would quietly read the live folder while judging a frozen commit if anything ever asked from somewhere else.";
  let folder2 = folder_repo_love();
  let p = folder_public();
  let folder = path_join([folder2, p]);
  let present = await folder_app_file_names(folder, app_name);
  let source_name = file_name_js(app_name);
  let scriptless = list_includes_not(present, source_name);
  if (scriptless) {
    let r = [];
    return r;
  }
  let path = path_join([folder, source_name]);
  let text = await file_read(path);
  let ids = js_bundle_chunk_ids(text);
  function wanted_lambda(chunk_id) {
    let file_name = file_name_app_chunk(chunk_id, app_name);
    return file_name;
  }
  let wanted = list_map(ids, wanted_lambda);
  let missing = list_without_multiple(wanted, present);
  return missing;
}
