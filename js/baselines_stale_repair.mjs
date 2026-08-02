import { lambda_throws_async } from "./lambda_throws_async.mjs";
import { property_get } from "./property_get.mjs";
import { baseline_writers_growth_exempt } from "./baseline_writers_growth_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { baseline_writers_names } from "./baseline_writers_names.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function baselines_stale_repair() {
  "puts every ratchet's record back in step with the repo, one writer at a time, each committed under its own name. a ratchet goes red two ways and they are opposite: something new offends, or something that used to offend no longer does and the record still names it. only the first is a fault. the second is the repo having got BETTER, and it stops a build the same way";
  "safe to run at any moment because every writer it reaches is guarded against growth - such a writer cannot record a new offence, only drop one that has gone. so this can tighten a ratchet and can never loosen one, whatever state the folder is in when it runs";
  "the repo names three writers that are allowed to grow, each with its reason, and those are passed over rather than trusted. one of them takes no arguments and so would sail through the count check below - the exemption list is the only thing that catches it, and running it here would bless whatever new offence happened to be standing";
  "a writer that has to be told something is passed over too. those are the shared writers the others end at, not ratchets of their own, and a step needing an argument would have to have it guessed for it";
  "a writer that refuses is written down and the run carries on to the next one. refusing is the growth guard working, not this breaking: it means that ratchet has a NEW offence standing, which is somebody's to fix rather than to record. stopping there would let one real fault hide every stale entry behind it, and the first run of this did exactly that - one shadowing offence in a peer's file kept fifteen other ratchets from being put back in step";
  "anything already noted is committed first, so the first writer's commit carries its own files and not a neighbour's leftovers";
  await ai_git_noted();
  let f_names = await baseline_writers_names();
  let exempt = await baseline_writers_growth_exempt();
  let exempt_names = list_map_property(exempt, "f_name");
  let shrunk = [];
  let skipped = [];
  let refused = [];
  for (let f_name of f_names) {
    let allowed_to_grow = list_includes(exempt_names, f_name);
    if (allowed_to_grow) {
      list_add(skipped, f_name);
      continue;
    }
    let fn = await function_import_unalias(f_name);
    let wants_arguments = greater_than(fn.length, 0);
    if (wants_arguments) {
      list_add(skipped, f_name);
      continue;
    }
    let result = null;
    async function step() {
      result = await function_call_commit(fn, []);
    }
    let verdict = await lambda_throws_async(step);
    let complained = property_get(verdict, "throws");
    if (complained) {
      let raised = property_get(verdict, "result");
      list_add(refused, {
        f_name,
        message: raised.message,
      });
      continue;
    }
    list_add(shrunk, {
      f_name,
      result,
    });
  }
  let r = {
    shrunk,
    skipped,
    refused,
  };
  return r;
}
