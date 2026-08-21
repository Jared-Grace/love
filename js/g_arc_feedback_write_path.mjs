import { fn_name } from "./fn_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function g_arc_feedback_write_path(chapter_code) {
  "Where the notes standing against one chapter's arcs are kept - what is wrong with a line, said without saying what it should be instead.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT HOLDS DEFECTS AND NEVER REPLACEMENTS, and that is the whole shape of it. A note saying what a line should say has done the writing, so the writer is needed again for the next line and the one after; a note saying what is wrong with the line leaves the writing where it belongs and teaches whoever reads it something that fires on lines nobody has looked at yet. The second costs the reader one sentence and the first costs them the line.";
  "ONE STORE FOR TWO SOURCES, which is what makes the reading shrink. A person reading an arc and a check run over it are answering the same question, so their answers belong in the same place - and every check added from then on files its findings here before the person ever opens the arc. What the person is left with is what no check could see, which is the only part that needed a person.";
  let f_name = fn_name("g_arc_feedback_add");
  let path = storage_function_path_json(chapter_code, f_name);
  return path;
}
