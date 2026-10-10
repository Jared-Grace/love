import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { functions_parameters_dangerous } from "./functions_parameters_dangerous.mjs";
import { functions_delete_confined } from "./functions_delete_confined.mjs";
import { functions_command_confined } from "./functions_command_confined.mjs";
import { functions_code_overwrite_confined } from "./functions_code_overwrite_confined.mjs";
import { functions_read_confined } from "./functions_read_confined.mjs";
import { functions_send_confined } from "./functions_send_confined.mjs";
import { functions_package_confined } from "./functions_package_confined.mjs";
import { js_flow_read_mutates } from "./js_flow_read_mutates.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
import { js_flow_read_power } from "./js_flow_read_power.mjs";
import { js_flow_slice } from "./js_flow_slice.mjs";
export function functions_edit_unsafe_from_reads(reads) {
  ("Which functions may not be rewritten without the human seeing it, each with the reason, worked out from what ",
    fn_name("js_function_flow_read"),
    " gave back for every function. Reads is a map from name to that answer.");
  ("A function is unsafe to edit when something dangerous could follow from what it does: it passes a value into an argument that steers a dangerous function, a dangerous call's argument is worked out from what it returns, it may call or change a power - the machine, the language's machinery, or what a record read by an unproved key hands back - it reaches the machine or the machinery itself, or a fence relies on it. Every other function can be rewritten to anything else that passes the same check, and nothing dangerous changes.");
  ("Two questions are kept apart. What a value is worked out from decides what a path or a command can say. What a value may be the very same object as decides whether changing it changes something else, and whether it can be a power; a yes or no worked out from an object is never that object.");
  ("The arguments that steer are found by going backwards from the dangerous ones: a parameter the steering value was worked out from steers too, so each caller is asked again with that parameter added, until nothing grows. A function whose result a steering value was worked out from has its own results followed the same way.");
  let pdanger = new Map();
  let roster = functions_parameters_dangerous();
  for (let [name, positions] of roster) {
    pdanger.set(name, equal(positions, "all") ? "all" : new Set(positions));
  }
  let v = pdanger.keys();
  let seams = new Set(v);
  let fences = new Set([
    ...functions_delete_confined(),
    ...functions_command_confined(),
    ...functions_code_overwrite_confined(),
    ...functions_read_confined(),
    ...functions_send_confined(),
    ...functions_package_confined(),
  ]);
  for (let f of fences) {
    pdanger.delete(f);
  }
  let unsafe = new Map();
  function mark(name, why) {
    let b = unsafe.has(name);
    if (not(b)) {
      unsafe.set(name, why);
    }
  }
  let importers = new Map();
  for (let [name, read] of reads) {
    for (let k of read.imported) {
      let b2 = importers.has(k);
      if (not(b2)) {
        importers.set(k, new Set());
      }
      importers.get(k).add(name);
    }
  }
  for (let [name, read] of reads) {
    if (
      greater_than(read.machine.length, 0) &&
      not(pdanger.has(name)) &&
      not(fences.has(name))
    ) {
      pdanger.set(name, "all");
    }
  }
  ("Which functions may change what they are handed, followed to a fixed point, since handing a thing to one of them is itself a change. Asked before anything else, because every later question follows a value through a call only when the callee is one of these.");
  ("Asked together with which functions may hand back something they were handed, since each answer feeds the other: a thing handed back may be the thing changed, and a thing stored by a changing function may be handed back.");
  let mutating = new Set();
  let returns_alias = new Set();
  let mutating_grew = true;
  while (mutating_grew) {
    mutating_grew = false;
    for (let [name, read] of reads) {
      let b3 = mutating.has(name);
      if (not(b3) && js_flow_read_mutates(read, mutating, returns_alias)) {
        mutating.add(name);
        mutating_grew = true;
      }
      function lambda(r) {
        let r2 = r.alias;
        return r2;
      }
      let b4 = returns_alias.has(name);
      if (
        not(b4) &&
        greater_than(
          js_flow_alias_slice(
            read,
            read.returns.map(lambda),
            returns_alias,
            mutating,
          ).params.length,
          0,
        )
      ) {
        returns_alias.add(name);
        mutating_grew = true;
      }
    }
  }
  ("A function is capable when what it hands back may be a power a machine-reaching or machinery-reaching function handed out. Followed to a fixed point, so a function returning what a capable one returned is capable too.");
  let capable = new Set();
  let key_power = js_flow_key_power_name();
  let returned = new Map();
  for (let [name, read] of reads) {
    if (
      (greater_than(read.machine.length, 0) ||
        greater_than(read.reflect.length, 0)) &&
      not(fences.has(name))
    ) {
      capable.add(name);
    }
    ("Only holding is followed here: a yes or no, a count or a text worked out from a power is not the power.");
    function lambda2(r) {
      let r3 = r.alias;
      return r3;
    }
    let starts2 = read.returns.map(lambda2);
    returned.set(
      name,
      js_flow_alias_slice(read, starts2, returns_alias, mutating).callees,
    );
  }
  let grew = true;
  while (grew) {
    grew = false;
    for (let [name, callees] of returned) {
      if (capable.has(name) || fences.has(name)) {
        continue;
      }
      function lambda3(c) {
        let r4 = equal(c, key_power) || capable.has(c);
        return r4;
      }
      if (callees.some(lambda3)) {
        capable.add(name);
        grew = true;
      }
    }
  }
  ("Which arguments of each function reach a place a power would be used - called, or changed in place - followed to a fixed point, since handing a value into such an argument of another function is itself such a place.");
  let ppower = new Map();
  let ppower_grew = true;
  while (ppower_grew) {
    ppower_grew = false;
    for (let [name, read] of reads) {
      let params = js_flow_read_power(
        read,
        mutating,
        returns_alias,
        capable,
        ppower,
      ).params;
      let current = ppower.get(name) ?? new Set();
      let before = current.size;
      function lambda4(i) {
        let r5 = current.add(i);
        return r5;
      }
      params.forEach(lambda4);
      if (greater_than(current.size, before)) {
        ppower.set(name, current);
        ppower_grew = true;
      }
    }
  }
  ("Every function that can reach a seam steered by all its arguments - a command, an evaluator, the overwriter, the permission writers, a dispatcher - without passing a fence. Each one is unsafe to edit whatever its arguments: an edit could change when the dangerous call happens even where it cannot change what the call is handed.");
  let reaches_whether = new Set();
  function lambda5(k) {
    let left = roster.get(k);
    let eq = equal(left, "all");
    return eq;
  }
  let reach = [...roster.keys()].filter(lambda5);
  while (greater_than(reach.length, 0)) {
    let k = reach.pop();
    if (reaches_whether.has(k) || fences.has(k)) {
      continue;
    }
    reaches_whether.add(k);
    reach.push(...(importers.get(k) ?? []));
  }
  let returns_danger = new Set();
  let queue = [...reads.keys()];
  let queued = new Set(queue);
  function push(name) {
    let b5 = queued.has(name);
    if (not(b5)) {
      queued.add(name);
      queue.push(name);
    }
  }
  ("A function is entered here only once it has a parameter that steers, so having an entry is the same as steering.");
  ("Why each function's first steering parameter was added, kept beside the first reason it was marked, because a reason can be circular once the fixed point has run - two functions each blaming the other - and only the order things were added in shows which came first.");
  let pdanger_why = new Map();
  function positions_add(name, positions, why) {
    if (greater_than(positions.length, 0) && not(pdanger_why.has(name))) {
      pdanger_why.set(name, why);
    }
    let current = pdanger.get(name);
    if (equal(current, "all") || equal(positions.length, 0)) {
      return false;
    }
    if (equal(current, undefined)) {
      current = new Set();
      pdanger.set(name, current);
    }
    let added = false;
    for (let i of positions) {
      let b6 = current.has(i);
      if (not(b6)) {
        current.add(i);
        added = true;
      }
    }
    return added;
  }
  while (greater_than(queue.length, 0)) {
    let name = queue.pop();
    queued.delete(name);
    let read = reads.get(name);
    if (equal(read, undefined) || fences.has(name)) {
      continue;
    }
    let starts = [];
    let everything = false;
    let whys = [];
    ("Inside a function that can run a command or the like, whether a call happens matters as much as what it is handed, so the conditions around its calls are followed too. Everywhere else only values are followed: a path or a key is dangerous for what it can be, and a condition cannot make it anything new.");
    let whether = reaches_whether.has(name);
    for (let call of read.calls) {
      if (whether && reaches_whether.has(call.callee)) {
        starts.push(call.control);
      }
      let d = pdanger.get(call.callee);
      if (equal(d, undefined)) {
        continue;
      }
      let hit = false;
      for (let i = 0; less_than(i, call.args.length); i++) {
        let a = call.args[i];
        if (equal(d, "all") || d.has(i) || a.spread) {
          starts.push(a.data);
          hit = true;
        }
      }
      if (hit) {
        mark(name, "passes into " + call.callee);
        whys.push("passes into " + call.callee);
      }
    }
    for (let h of read.handed) {
      ("Only a function with an argument that steers counts: one handed on as a value can be called with anything.");
      if (pdanger.has(h)) {
        mark(name, "hands on " + h);
        whys.push("hands on " + h);
        everything = true;
      }
    }
    let s = js_flow_slice(read, starts, whether, mutating);
    let positions = s.params;
    let callees = s.callees;
    ("A function that may call or change a power depends on which power it is handed, so the functions handing it one have results that matter.");
    let used = js_flow_read_power(
      read,
      mutating,
      returns_alias,
      capable,
      ppower,
    ).used;
    if (greater_than(used.length, 0)) {
      mark(name, "may call or change what " + used[0] + " hands back");
      function lambda6(c) {
        let neq = not_equal(c, key_power);
        return neq;
      }
      callees = [...callees, ...used.filter(lambda6)];
    }
    ("A result that matters makes the function unsafe to edit, and so every function its result is worked out from - but it does not make the parameters steer for every caller. The caller whose result matters already follows the arguments of that one call, because a call's names include its arguments; marking the parameters would refuse every other caller, everywhere, for a value only one of them uses. The exception is a function that keeps state between calls, since an earlier call from anywhere can then change what a later one hands back.");
    ("A result is followed through its conditions as well, because for a result the condition is part of the value: which return ran decides what comes back.");
    if (returns_danger.has(name)) {
      function lambda7(r) {
        let r6 = [...r.data, ...r.control];
        return r6;
      }
      let returned_from = read.returns.map(lambda7);
      callees = [
        ...callees,
        ...js_flow_slice(read, returned_from, true, mutating).callees,
      ];
      if (read.top_mutable) {
        everything = true;
        whys.push("keeps state between calls and its result matters");
      }
    }
    if (everything) {
      function lambda8(p, i) {
        return i;
      }
      positions = read.params.map(lambda8);
    }
    let v2 = whys.join("; ");
    if (positions_add(name, positions, v2)) {
      for (let p of importers.get(name) ?? []) {
        push(p);
      }
    }
    for (let c of callees) {
      if (returns_danger.has(c) || seams.has(c)) {
        continue;
      }
      returns_danger.add(c);
      mark(c, "its result reaches " + name);
      push(c);
    }
  }
  ("A fence is only as good as what it calls, so everything a fence reaches is unsafe to edit, whatever the flow says.");
  for (let f of fences) {
    let walk = [f];
    let seen = new Set();
    while (greater_than(walk.length, 0)) {
      let x = walk.pop();
      if (seen.has(x)) {
        continue;
      }
      seen.add(x);
      mark(x, "inside the fence " + f);
      walk.push(...(reads.get(x)?.imported ?? []));
    }
  }
  for (let s of seams) {
    mark(s, "a seam");
  }
  for (let k of reaches_whether) {
    mark(
      k,
      "can run a command, code, an overwrite, a permission write or a dispatch",
    );
  }
  for (let [name, read] of reads) {
    if (greater_than(read.machine.length, 0)) {
      mark(name, "reaches the machine: " + read.machine.join(", "));
    }
    if (greater_than(read.reflect.length, 0)) {
      mark(
        name,
        "reaches the language's machinery: " + read.reflect.join(", "),
      );
    }
  }
  let r = {
    unsafe,
    pdanger,
    pdanger_why,
    capable,
    ppower,
    fences,
    reaches_whether,
    mutating,
    returns_alias,
  };
  return r;
}
