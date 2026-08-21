import { fn_name } from "./fn_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function g_arc_write_path(chapter_code) {
  "Where one chapter's written arcs are kept.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "ONE PLACE, because the writing and the reading are two different functions and a store address spelled twice is the one mistake neither of them can see. Move the file and fix only the writer, and the reader answers that the chapter holds no arcs - which is exactly what an empty chapter answers, so nothing goes red and the arcs are simply gone.";
  "THE NAME IS SPELLED RATHER THAN IMPORTED, and that is not a slip. The writer imports the reader, so importing the writer back to borrow its name would close a ring; a spelled name that a rename still follows breaks it without giving anything up.";
  let f_name = fn_name("g_arc_write");
  let path = storage_function_path_json(chapter_code, f_name);
  return path;
}
