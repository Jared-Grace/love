import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { function_marked_is } from "./function_marked_is.mjs";
import { duplicate_kind_parallel } from "./duplicate_kind_parallel.mjs";
import { function_stub_is } from "./function_stub_is.mjs";
import { duplicate_kind_stub } from "./duplicate_kind_stub.mjs";
import { function_work_none_is } from "./function_work_none_is.mjs";
import { duplicate_kind_constant } from "./duplicate_kind_constant.mjs";
import { duplicate_kind_work } from "./duplicate_kind_work.mjs";
export async function function_duplicate_kind(f_name) {
  "What sort of thing the named function is, when the question being asked is whether two functions sharing a shape are one idea written twice.";
  "A mark in the body is asked for first and answered without looking further, because it is the one answer a person put there on purpose. Everything after it is read off the code and could be wrong about what was meant; the mark cannot be, because meaning it is the only reason to write it.";
  "Three answers are read from the code, and only the last is worth a ratchet. An unwritten placeholder shares its shape with every other unwritten placeholder, because there is one way to write nothing. A function that takes nothing and calls nothing hands back a fixed value, and two fixed values being alike says little - the slash that divides and the slash that separates are one character and two ideas. What is left does work, and two of those under one shape is the finding this whole search exists for.";
  let marker = function_duplicate_kind_parallel.name;
  let marked = await function_marked_is(f_name, marker);
  if (marked) {
    let r0 = duplicate_kind_parallel();
    return r0;
  }
  let stub = await function_stub_is(f_name);
  if (stub) {
    let r = duplicate_kind_stub();
    return r;
  }
  let none = await function_work_none_is(f_name);
  if (none) {
    let r2 = duplicate_kind_constant();
    return r2;
  }
  let r3 = duplicate_kind_work();
  return r3;
}
