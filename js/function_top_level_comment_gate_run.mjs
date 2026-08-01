import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { functions_top_level_broken_comments } from "./functions_top_level_broken_comments.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function function_top_level_comment_gate_run() {
  "QA gate: fail if any love function file opens with a comment that has been torn into running code. Such a line runs when the file is loaded, so at worst it stops every command that reaches the file and at best it leaves prose no one can read. Throws so the dispatcher seam exits nonzero.";
  let offenders = await functions_top_level_broken_comments();
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let joined = property_list_join_comma(offender, "kinds");
    console.log("BROKEN COMMENT  " + name + "  -> " + joined);
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "top level comment gate: " +
      offenders.length +
      " function files open with a comment that runs as code";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
  };
  return result;
}
