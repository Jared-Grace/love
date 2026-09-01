import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function g_arc_noted_write_path(chapter_code) {
  "Where the addresses that carried a note is kept - one file a chapter, holding the lines each person's last revision was asked to answer.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS A SECOND STORE AND NOT A FIELD ON THE ARC THAT WAS REPLACED, though the two describe one event. The replaced arc is written by the plain writer, which is shared with the live store and spells the two keys every arc entry has; a third key added there would appear on the arcs being played from as well. The pair is kept from drifting by being written in one breath by the reviser rather than by sitting in one file.";
  "ONE WAVE BACK AND NO MORE, the same as the arc it is paired with. What was asked for two revisions ago is answered or is being asked again, and either way it is not the question.";
  "THE NAME IS SPELLED RATHER THAN IMPORTED, because the writer imports this and importing it back would close a ring.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("g_arc_noted_write");
  let path = storage_function_path_json(chapter_code, f_name);
  return path;
}
