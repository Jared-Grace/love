import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_fold_pairs_soundable } from "./functions_fold_pairs_soundable.mjs";
import { function_fold } from "./function_fold.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_fold_repair() {
  "Calls the function that already does it, in every place its body was written out by hand instead.";
  "It finds its own set, so it cannot ask for a fold the repo does not actually have - and it asks the same question again at the end, because a run that folded nothing looks exactly like a run that folded everything unless the answer afterwards is empty.";
  "Each fold is committed the moment it lands, under its own two names, rather than all of them at the end - a run over dozens of files lasts long enough for somebody else's sweep to take them first, and what that sweep leaves behind says nothing about which command made it.";
  await ai_git_noted();
  let sites = await functions_fold_pairs_soundable();
  let folded = [];
  for (let site of sites) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    let args = [x, f];
    await function_call_commit(function_fold, args);
    list_add(folded, args);
  }
  let left = await functions_fold_pairs_soundable();
  let r = {
    folded,
    remaining: left,
  };
  return r;
}
