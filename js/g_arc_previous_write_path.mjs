import { fn_name } from "./fn_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function g_arc_previous_write_path(chapter_code) {
  "Where the arcs that were replaced are kept - one file a chapter, holding the version of each person that the current one was written over.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "ONE VERSION BACK AND NO MORE. A full history would answer questions nobody has asked - what a person said four rewrites ago is of no interest to anybody - while the one question that IS asked constantly is what this rewrite changed. Keeping one is the whole of what a diff needs, and it cannot grow.";
  "THE NAME IS SPELLED RATHER THAN IMPORTED for the same reason the live store's is: the writer imports this, so importing the writer back to borrow its name would close a ring.";
  let f_name = fn_name("g_arc_previous_write");
  let path = storage_function_path_json(chapter_code, f_name);
  return path;
}
