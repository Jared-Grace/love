import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { functions_flow_reads } from "./functions_flow_reads.mjs";
import { functions_edit_unsafe_from_reads } from "./functions_edit_unsafe_from_reads.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_function_flow_read } from "./js_function_flow_read.mjs";
import { js_flow_read_mutates } from "./js_flow_read_mutates.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
import { js_flow_read_power } from "./js_flow_read_power.mjs";
import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
export async function function_edit_safe_refusals(
  f_name,
  declaration,
  import_lines,
) {
  "Every reason this declaration, with these package import lines, may not be written over the existing function of this name without the human seeing it. Empty means the edit cannot change anything dangerous.";
  "The draft is handed in rather than read here, so the caller can check exactly what it goes on to write.";
  "Two questions, and both must come back clean. Before: the function as it stands must be safe to edit, so nothing dangerous already depends on what it does. After: the draft must be safe in the same world - it passes nothing into an argument that steers a dangerous function, uses no power and hands none back, starts neither changing nor handing back what it is handed, and names nothing outside the repo's own functions and the plain built-in names.";
  "Only the one function is read again. That is enough: the function was safe before, so no dangerous value depended on its result, and the draft adds no dangerous parameter of its own, so no other function's answer can move.";
  "The draft is read in the shape it will land in - its declaration exported on its own, with every outside name left bare - because the imports are worked out again from the names after it lands, and an import line in the draft is not what decides what a name means.";
  let refusals = [];
  let reads = await functions_flow_reads();
  let b = reads.has(f_name);
  if (not(b)) {
    refusals.push(
      f_name +
        " could not be read, so nothing is known about what depends on it",
    );
    return refusals;
  }
  let world = functions_edit_unsafe_from_reads(reads);
  if (world.unsafe.has(f_name)) {
    refusals.push(
      f_name + " is not safe to edit as it stands: " + world.unsafe.get(f_name),
    );
  }
  if (greater_than(import_lines.length, 0)) {
    refusals.push("the draft brings in a package: " + import_lines.join(" "));
  }
  let code_declaration = js_unparse(declaration);
  let code = js_code_export(code_declaration);
  let landed = js_parse(code);
  let f_names = await functions_names();
  let known = new Set(f_names);
  let read = js_function_flow_read(f_name, landed, known);
  for (let why of [...read.machine, ...read.strange]) {
    refusals.push("the draft reaches outside the repo: " + why);
  }
  for (let why of read.reflect) {
    refusals.push("the draft reaches the language's machinery: " + why);
  }
  for (let call of read.calls) {
    let d = world.pdanger.get(call.callee);
    if (equal(d, undefined)) {
      continue;
    }
    function lambda(a, i) {
      let r2 = equal(d, "all") || d.has(i) || a.spread;
      return r2;
    }
    let steered = call.args.some(lambda);
    if (steered) {
      refusals.push(
        "the draft passes a value into an argument of " +
          call.callee +
          " that steers what it does",
      );
    }
  }
  for (let h of read.handed) {
    if (world.pdanger.has(h)) {
      refusals.push("the draft hands " + h + " on as a value");
    }
  }
  ("Callers follow a value through this function only if it changes what it is handed, or hands back what it was handed, so a draft that starts to would move what their values can be without any of them being asked again.");
  let b2 = world.mutating.has(f_name);
  if (
    not(b2) &&
    js_flow_read_mutates(read, world.mutating, world.returns_alias)
  ) {
    refusals.push(
      "the draft changes what it is handed, which " +
        f_name +
        " did not do before",
    );
  }
  function lambda2(r) {
    let r3 = r.alias;
    return r3;
  }
  let starts = read.returns.map(lambda2);
  let returned = js_flow_alias_slice(
    read,
    starts,
    world.returns_alias,
    world.mutating,
  );
  let b3 = world.returns_alias.has(f_name);
  if (not(b3) && greater_than(returned.params.length, 0)) {
    refusals.push(
      "the draft hands back something it was handed, which " +
        f_name +
        " did not do before",
    );
  }
  ("A power - the language's machinery, or what reaches the machine - does harm only where it is used or handed on, so the draft may carry one but may not call it, change it, or hand it back.");
  let power = js_flow_read_power(
    read,
    world.mutating,
    world.returns_alias,
    world.capable,
    world.ppower,
  );
  for (let u of power.used) {
    refusals.push("the draft may call or change what " + u + " hands back");
  }
  let key_power = js_flow_key_power_name();
  function lambda3(c) {
    let r4 = equal(c, key_power) || world.capable.has(c);
    return r4;
  }
  let handed_back = returned.callees.filter(lambda3);
  let b4 = world.capable.has(f_name);
  if (not(b4) && greater_than(handed_back.length, 0)) {
    refusals.push(
      "the draft may hand back what " +
        handed_back[0] +
        " hands back, which may be a power",
    );
  }
  let ppower_before = world.ppower.get(f_name) ?? new Set();
  function lambda4(i) {
    let b5 = ppower_before.has(i);
    let n = not(b5);
    return n;
  }
  let ppower_new = power.params.filter(lambda4);
  if (greater_than(ppower_new.length, 0)) {
    refusals.push(
      "the draft calls or changes what it is handed in argument " +
        ppower_new.join(", ") +
        ", which " +
        f_name +
        " did not do before",
    );
  }
  for (let k of read.imported) {
    let b6 = reads.has(k);
    if (not(b6)) {
      refusals.push("the draft uses " + k + ", which could not be read");
    } else if (world.reaches_whether.has(k)) {
      refusals.push("the draft calls " + k + ", which " + world.unsafe.get(k));
    }
  }
  return refusals;
}
