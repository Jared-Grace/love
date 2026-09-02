import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function g_arc_approved_write_path(chapter_code) {
  "Where the arcs a reviewer has passed as rightly worded are kept - one file a chapter, holding each person's arc exactly as it stood when somebody approved it.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS NOT THE READING STORE, because reading and approving are different claims and only one of them is about the writing. A reading says somebody got to the end of it; an approval says the lines they filed no note against are right as they stand. Kept in one file the two would be one word, and an arc that had only been got through would be indistinguishable from one that had been passed - so the second reading this bench exists to remove would be asked for anyway.";
  "A SNAPSHOT AND NOT A MARK, for the same reason the reading store keeps one. What a later reviewer needs is not whether the arc has been approved but WHICH LINES were approved as they now stand, and only the text as it was passed can answer that. It also means no flag can go stale: an edited line stops matching on its own, so a revision withdraws the approval of exactly the lines it changed and of no others.";
  "THE NAME IS SPELLED RATHER THAN IMPORTED for the same reason the reading store's is: the writer imports this, so importing the writer back to borrow its name would close a ring.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("g_arc_approved_write");
  let path = storage_function_path_json(chapter_code, f_name);
  return path;
}
