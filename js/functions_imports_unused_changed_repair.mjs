import { functions_imports_unused_repair } from "./functions_imports_unused_repair.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { functions_names_changed } from "./functions_names_changed.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_imports_unused } from "./js_imports_unused.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_imports_unused_changed_repair() {
  arguments_assert(arguments, 0);
  ("Takes out the imports that are no longer used, in exactly the functions being edited right now.");
  ("The repair that adds imports has no twin, and every session that collapses a run into a helper leaves the imports it stopped using sitting at the top of the file. Adding is what breaks a file, so adding was built first and taking away was left to be done by hand, one line at a time, by whoever remembered - which by measurement is whoever read the file afterwards and counted the mentions of each name.");
  ("It finds its own set, so nothing has to be listed for it, and the set is the handful of files with an uncommitted edit in them rather than the whole repo. A repo-wide form would rewrite the top of every file that has ever drifted, which under many hands editing at once is a diff nobody can read and a collision with whoever is mid-edit.");
  ("Nothing is committed here, for the reason the canonicalizing pass gives: these files are named precisely because somebody is in the middle of editing them, and a commit made here would sweep half-written work under the name of a pass that did not write it. Run it, then commit your own work.");
  ("It repairs whoever's edit it finds, and the one way that can cost a peer anything is an import they typed a moment before the call that will use it - taken out here, it has to come back. That is accepted because coming back is not hand work: the repair that adds imports finds its own set too, and writes the line again the moment the call is there.");
  ("A function that cannot be parsed is passed over rather than reported. It is being typed into as this runs, and a command that named every file somebody had open would be one nobody runs twice.");
  let f_names = await functions_names_changed();
  let repaired = [];
  for (let f_name of f_names) {
    async function ask() {
      let parsed = await function_parse_declaration(f_name);
      let ast = property_get(parsed, "ast");
      let unuseds = js_imports_unused(ast);
      let any = greater_than(unuseds.length, 0);
      return any;
    }
    let unused_any = await catch_null_async(ask);
    if (unused_any) {
      await functions_imports_unused_repair(f_name);
      list_add(repaired, f_name);
    }
  }
  return repaired;
}
