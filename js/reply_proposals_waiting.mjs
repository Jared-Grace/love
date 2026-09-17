import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals } from "./reply_proposals.mjs";
import { data_given_reply_applied_folder } from "./data_given_reply_applied_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function reply_proposals_waiting() {
  arguments_assert(arguments, 0);
  ("The changes to the reply rules that have not gone into the code yet.");
  ("★ AN APPLIED CHANGE IS LEFT OUT BY ITS RECORD AND NOT BY BEING TAKEN OUT OF THE LIST. Applying happens on the serving machine the moment the last file is approved, and taking an entry out of the list means rewriting the function that holds every other change as well - which is the one file a peer writing the next change is most likely to have open. A record beside it touches nothing anybody else is editing.");
  ("Once applied, a change's lines stop matching its file, because they are now in it. Left in the list it would read as a change gone stale, so everything that reads the list for what is still waiting asks this instead.");
  let proposals = await reply_proposals();
  let folder = data_given_reply_applied_folder();
  let files = await folder_read_files_exists_ensure(folder);
  let applied = [];
  for (let named of files) {
    let p = path_join([folder, named]);
    let stored = await file_read_json(p);
    let title = property_get(stored, "title");
    list_add(applied, title);
  }
  function waiting_is(proposal) {
    let title = property_get(proposal, "title");
    let r = list_includes_not(applied, title);
    return r;
  }
  let waiting = list_filter(proposals, waiting_is);
  return waiting;
}
