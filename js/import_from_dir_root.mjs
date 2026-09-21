import { fn_name } from "./fn_name.mjs";
import { path_join } from "./path_join.mjs";
import { repo_path } from "./repo_path.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
import { folder_js } from "./folder_js.mjs";
export async function import_from_dir_root() {
  "The directory relative imports are worked out from when the file being tidied is the current repo's own function store, spelled absolute the way the name-to-path dictionary spells places - so a relative path computed against it lands beside a real file rather than out through the tree.";
  ("The root used to be spelled relative - ../current/js - and the dictionary held absolute paths, so ",
    fn_name("path_relative"),
    " scattered ../s and sent every import of a freshly-written file to somewhere under the current working tree before ao's path repair set them right.");
  ("Which repo to anchor to is the one the person is working in - the same one a freshly-written file lands in - not the repo the process happened to start in. A run dispatched from the tool's own folder while the work sits next door in another repo would otherwise measure the new file against the wrong tree and write ./ for a neighbour's functions, the very thing this was meant to cure.");
  let repo_name = await user_repo_get();
  let folder = repo_path(repo_name);
  let js = folder_js();
  let r = path_join([folder, js]);
  return r;
}
