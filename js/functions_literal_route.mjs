import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_literal_route } from "./function_literal_route.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_literal_route(f_names_comma, getter_f_name) {
  arguments_assert(arguments, 2);
  ("Points several files' field names at one getter, naming them as one");
  ("comma-joined word.");
  ("This is the verb the report of repeated spellings has always been asking for");
  ("and never had. The repair it offers is the same two names at every site, so");
  ("running the single command once per file leaves the repetition in the history");
  ("instead of taking it out of the code - and a run of the same word over and over");
  ("cannot be messaged with the command that made it.");
  ("The set is taken rather than worked out, because it is a real choice. Every");
  ("file spelling the word is not the answer: the same word in two files can be a");
  ("coincidence, and routing a coincidence invents a dependency that nobody wrote");
  ("and that a later change to the getter will carry into a file which never meant");
  ("it.");
  ("Each file is committed as it lands, and whatever was already noted is committed");
  ("first, so no step files somebody else's uncommitted work under its own name.");
  await ai_git_noted();
  let f_names = text_split_comma(f_names_comma);
  let outputs = [];
  for (let f_name of f_names) {
    let args = [f_name, getter_f_name];
    let output = await function_call_commit(function_literal_route, args);
    list_add(outputs, output);
  }
  return outputs;
}
