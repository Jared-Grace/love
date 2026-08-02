import { baseline_writers_names } from "./baseline_writers_names.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function baselines_stale_repair() {
  "puts every ratchet's record back in step with the repo, one writer at a time, each committed under its own name. a ratchet goes red two ways and they are opposite: something new offends, or something that used to offend no longer does and the record still names it. only the first is a fault. the second is the repo having got BETTER, and it stops a build the same way";
  "safe to run at any moment because every writer here is guarded against growth - a writer cannot record a new offence, only drop one that has gone. so this can tighten a ratchet and can never loosen one, whatever state the folder is in when it runs";
  "a writer that has to be told something is passed over. those are the shared writers the others call, not ratchets of their own, and a step that needed an argument would have to have it guessed for it";
  "anything already noted is committed first, so the first writer's commit carries its own files and not a neighbour's leftovers";
  await ai_git_noted();
  let f_names = await baseline_writers_names();
  let shrunk = [];
  let skipped = [];
  for (let f_name of f_names) {
    let fn = await function_import_unalias(f_name);
    let wants_arguments = greater_than(fn.length, 0);
    if (wants_arguments) {
      list_add(skipped, f_name);
      continue;
    }
    let result = await function_call_commit(fn, []);
    list_add(shrunk, {
      f_name,
      result,
    });
  }
  let r = {
    shrunk,
    skipped,
  };
  return r;
}
