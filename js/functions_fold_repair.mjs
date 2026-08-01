import { null_not_is } from "./null_not_is.mjs";
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
  "A fold can refuse, and asking once is not enough to be done. Folding one place can expose another that was hidden underneath it, and somebody else's work can land in the middle of a run that lasts minutes - so it goes round again as long as a pass folded something, and only the pass that folds nothing decides what is left. It finishes because each fold takes lines out of the repo and none puts any back.";
  await ai_git_noted();
  let folded = [];
  let sites = [];
  let again = true;
  while (again) {
    sites = await functions_fold_pairs_soundable();
    again = false;
    for (let site of sites) {
      let x = property_get(site, "x");
      let f = property_get(site, "f");
      let args = [x, f];
      let result = await function_call_commit(function_fold, args);
      let done = null_not_is(result);
      if (done) {
        list_add(folded, args);
        again = true;
      }
    }
  }
  let r = {
    folded,
    remaining: sites,
  };
  return r;
}
