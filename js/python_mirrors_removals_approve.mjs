import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { functions_dispatcher_denied } from "./functions_dispatcher_denied.mjs";
import { dispatcher_scripts } from "./dispatcher_scripts.mjs";
import { python_mirrors } from "./python_mirrors.mjs";
import { python_mirror_write } from "./python_mirror_write.mjs";
export async function python_mirrors_removals_approve(names) {
  "$plain names";
  arguments_assert(arguments, 1);
  ("Lets the guard stop refusing the names given here. Each one is written in the command, so the person approving the prompt reads exactly what stops being refused.");
  ("This must stay ungranted: a grant would turn the approval into nothing. Any other name gone from the source is still refused.");
  ("A name that is still in a source has not been removed, so approving it would claim a change that is not happening.");
  let approved = text_split_comma(names);
  let sources = [functions_dispatcher_denied, dispatcher_scripts];
  let listed = [...functions_dispatcher_denied(), ...dispatcher_scripts()];
  function lambda(name) {
    let r2 = listed.includes(name);
    return r2;
  }
  let kept = approved.filter(lambda);
  if (greater_than(kept.length, 0)) {
    throw new Error(
      "still in the source, so there is nothing to approve: " + kept.join(","),
    );
  }
  function lambda2(m) {
    let r3 = sources.includes(m.source);
    return r3;
  }
  let mirrors = python_mirrors().filter(lambda2);
  let written = [];
  for (let mirror of mirrors) {
    let r = await python_mirror_write(mirror, approved);
    written.push(r);
  }
  return written;
}
