import { js_fold } from "./js_fold.mjs";
import { fn_name } from "./fn_name.mjs";
export function comment_migrate_probe() {
  let f_name = fn_name("js_fold");
  `a comment naming ${f_name} through the wrapper`;
  ("a comment naming ", js_fold.name, " as bare text in a template");
  ("a comment naming ", js_fold.name, " as bare text in a plain string");
  let a = 1;
  return a;
}
