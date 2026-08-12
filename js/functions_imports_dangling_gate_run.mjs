import { functions_imports_dangling } from "./functions_imports_dangling.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_imports_dangling_gate_run() {
  "QA gate: fail if any import line names a file that is not there. Throws so the dispatcher seam exits nonzero.";
  "It ratchets against nothing, because the repo had none the day it was written - one and a half thousand functions over thirty-one thousand and eight hundred dotted imports, every one of them leading somewhere.";
  "Its neighbour asks the same question from the other end: which names does a body read that it never imports. Between them an import line is watched at both ends - that what it names is read, and that what it names is there.";
  let offenders = await functions_imports_dangling();
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let joined = property_list_join_comma(offender, "dangling");
    console.log("DANGLING IMPORT  " + f_name + "  -> " + joined);
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "dangling imports gate: " +
      offenders.length +
      " functions import a file that is not there";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
  };
  return result;
}
