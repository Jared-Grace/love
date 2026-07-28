import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_replace } from "./function_replace.mjs";
export async function functions_replace(f_names_comma, f_name_after) {
  arguments_assert(arguments, 2);
  ("Collapses several names onto one, naming the ones to go as a single");
  ("comma-joined word. This is the end of every constant collapse: once four");
  ("getters all hand back the same shared value they do the same work under four");
  ("names, and the gate that watches for that asks for the four to go rather than");
  ("to stay as covers over the one.");
  ("Each name is committed as it goes rather than all of them at the end, because");
  ("the run is several independent changes and each one is a command with its own");
  ("real arguments. What is already noted is committed first, so a step cannot");
  ("file somebody else's uncommitted work under its own name.");
  await ai_git_noted();
  let f_names = text_split_comma(f_names_comma);
  for (let f_name of f_names) {
    let args = [f_name, f_name_after];
    await function_call_commit(function_replace, args);
  }
}
