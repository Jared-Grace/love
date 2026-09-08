import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_local_duplicate_named } from "./functions_local_duplicate_named.mjs";
import { property_get } from "./property_get.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_local_duplicate_replace } from "./function_local_duplicate_replace.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_local_duplicate_collapse(f_name_shared) {
  "Take every copy of one shared function that somebody wrote out again inside another function, and point all of them at the shared one.";
  "It is handed a name and nothing else, and asks the reading beside it which places hold a copy, so the set it works on cannot drift from the set that is actually wrong. A caller listing the places by hand would be recording a measurement taken at some earlier moment, in a folder several people are writing to.";
  "Each place is committed as it lands, under the name of the one command that made it and that command's own real arguments. A run over twenty places is twenty changes rather than one, which is what lets a peer sweeping the folder take a step's work instead of the whole run's, and what lets a reader afterwards see which place a later fault came from.";
  "Anything already waiting to be committed is committed first, unlabelled. Without that the first place to land would file somebody else's unfinished work under its own name, and the record would say a collapse touched a file it never opened.";
  "It asks again at the end rather than counting what it did. What is left is the only answer worth having: a place that could not be reached is still a copy, and a run that reported its own step count would call that a success.";
  arguments_assert(arguments, 1);
  await ai_git_noted();
  let found = await functions_local_duplicate_named(f_name_shared);
  let listed = property_get(found, "listed");
  let collapsed = [];
  for (let row of listed) {
    let f_name = property_get(row, "f_name");
    let local_name = property_get(row, "local_name");
    let args = [f_name, local_name, f_name_shared];
    await function_call_commit(function_local_duplicate_replace, args);
    list_add(collapsed, f_name);
  }
  let again = await functions_local_duplicate_named(f_name_shared);
  let remaining = property_get(again, "listed");
  let answer = {};
  property_set(answer, "shared", f_name_shared);
  let value = list_size(collapsed);
  property_set(answer, "collapsed", value);
  let value2 = list_size(remaining);
  property_set(answer, "remaining", value2);
  property_set(answer, "remaining_listed", remaining);
  return answer;
}
