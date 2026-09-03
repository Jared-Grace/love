import { import_lift_probe_inner } from "./import_lift_probe_inner.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function import_lift_probe() {
  arguments_assert(arguments, 0);
  ("A throwaway, made to ask one question and then deleted: does the parent lose an import it no longer reads once the body that read it has moved out?");
  let r = import_lift_probe_inner();
  return r;
}
