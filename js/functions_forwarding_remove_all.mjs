import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_forwarding_names } from "./functions_forwarding_names.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_forwarding_remove } from "./function_forwarding_remove.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_forwarding_remove_all() {
  "Drops every function in the repo that is only a second name for another one, in exactly the functions that hold one.";
  "Finds its own set rather than taking a list, so it cannot be asked about a name that has nothing to drop and cannot fall behind what is really there. Asking the same question again afterwards is the only honest way to say it worked, since a run that dropped nothing looks the same as one that succeeded.";
  "Each function is committed the moment it is changed rather than all of them at the end, because these are separate changes and a run over many of them lasts long enough that somebody else's sweep takes them first.";
  await ai_git_noted();
  let names = await functions_forwarding_names();
  let dropped = [];
  for (let f_name of names) {
    let args = [f_name];
    await function_call_commit(function_forwarding_remove, args);
    list_add(dropped, f_name);
  }
  let remaining = await functions_forwarding_names();
  let r = {
    dropped,
    remaining,
  };
  return r;
}
