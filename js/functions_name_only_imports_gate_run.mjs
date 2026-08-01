import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { functions_name_only_imports } from "./functions_name_only_imports.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_name_only_imports_gate_run() {
  "QA gate: no file imports a name only to read the word it is called";
  "An import is a road, so a name reached for just to be spelled hands this file everything that name can reach. Nothing calls any of it and the bundler drops it, but every question asked of the code statically believes the road - which is how one line of prose put a whole download chain inside a game screen's reach and turned another gate red for everybody, and how a permission can be refused for reaching something it never touches";
  "The repair takes no reading and no judgment, so this asks for zero rather than for less than last time: spell the word instead, which a rename follows just as faithfully, and the road is gone. One command does the whole repo";
  "Throws so the dispatcher seam exits nonzero";
  let offenders = await functions_name_only_imports();
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let joined = property_list_join_comma(offender, "names");
    console.log("NAME ONLY  " + f_name + "  -> " + joined);
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let f_name2 = fn_name("functions_name_only_imports_spell");
    let message =
      "name only imports gate: " +
      offenders.length +
      text_combine_multiple([
        " functions import a name only to spell it - run ",
        f_name2,
      ]);
    throw new Error(message);
  }
  let r = {
    offenders: 0,
  };
  return r;
}
