import { functions_names } from "./functions_names.mjs";
import { function_shadowing_findings } from "./function_shadowing_findings.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export async function function_shadowing_report(f_name) {
  "Whether the one function you just edited hides a name, said out loud - the same question the gate asks of every function, asked of one.";
  "The gate is the only thing that has been asking, and it asks about every function there is, so the answer costs minutes. That is far too long to sit between finishing an edit and committing it, and the result is that hiding a name is found by whoever runs the whole gate next rather than by whoever wrote it - measured on one day: seven of them, every one landed by somebody who could have known in a second.";
  "It names the two kinds separately because they are cleared differently. A name hidden from a scope around it is cleared by renaming the inner one. A name bound over a repo function is cleared by renaming the local or by not needing it, and the mender to reach for is the one that moves only the mentions reading that binding, since renaming every mention puts the same name back in both places and leaves the hiding exactly where it was.";
  let candidates = await functions_names();
  let finding = await function_shadowing_findings(f_name, candidates);
  let shadows_outer = property_get(finding, "shadows_outer");
  let shadows_function = property_get(finding, "shadows_function");
  for (let name of shadows_outer) {
    console.log("HIDES OUTER  " + f_name + "  -> " + name);
  }
  for (let name of shadows_function) {
    console.log("HIDES FN     " + f_name + "  -> " + name);
  }
  let count = add(shadows_outer.length, shadows_function.length);
  console.log("hiding " + count);
  return finding;
}
