import { fn_name } from "./fn_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function g_arc_reviewed_write_path(chapter_code) {
  "Where the arcs a person has actually read are kept - one file a chapter, holding each person's arc exactly as it stood when somebody said they had read it.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS NOT THE REPLACED STORE, and the difference is the whole reason it exists. The replaced store keeps the version before the LAST write, which moves every time anybody writes; a snapshot taken when a person read the arc must not move when a writer touches it, or the record of what was read is destroyed by the very edits it exists to measure. Two writes in one afternoon already lost such a record once.";
  "A SNAPSHOT AND NOT A MARK, because a mark could only ever say yes or no. What a second reading needs is not whether the arc changed but WHICH LINES changed, and only the text as it was read can answer that. It also means the record cannot lie: nothing has to remember to clear a flag, since an edited line stops matching on its own.";
  "THE NAME IS SPELLED RATHER THAN IMPORTED for the same reason the live store's is: the writer imports this, so importing the writer back to borrow its name would close a ring.";
  let f_name = fn_name("g_arc_reviewed_write");
  let path = storage_function_path_json(chapter_code, f_name);
  return path;
}
