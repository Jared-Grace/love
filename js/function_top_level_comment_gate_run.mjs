export async function function_top_level_comment_gate_run() {
  "QA gate: fail if any love function file opens with a comment that has been torn into running code. Such a line runs when the file is loaded, so at worst it stops every command that reaches the file and at best it leaves prose no one can read. Throws so the dispatcher seam exits nonzero.";
  let offenders = await functions_top_level_broken_comments();
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let kinds = property_get(offender, "kinds");
    let joined = list_join_comma(kinds);
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
