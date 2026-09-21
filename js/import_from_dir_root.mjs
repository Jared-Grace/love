import { fn_name } from "./fn_name.mjs";
import { path_join } from "./path_join.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { repo_path } from "./repo_path.mjs";
import { folder_js } from "./folder_js.mjs";
export function import_from_dir_root() {
  "The directory relative imports are worked out from when the file being tidied is the current repo's own function store, spelled absolute the way the name-to-path dictionary spells places - so a relative path computed against it lands beside a real file rather than out through the tree.";
  ("The root used to be spelled relative - ../current/js - and the dictionary held absolute paths, so ",
    fn_name("path_relative"),
    " scattered ../s and sent every import of a freshly-written file to somewhere under the current working tree before before ao's path repair set them right.");
  let repo_name = repo_current_name();
  let folder = repo_path(repo_name);
  let js = folder_js();
  let r = path_join([folder, js]);
  return r;
}
