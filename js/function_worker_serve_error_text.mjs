import { arguments_assert } from "./arguments_assert.mjs";
export function function_worker_serve_error_text(caught, String) {
  arguments_assert(arguments, 2);
  let stacked = caught && caught.stack;
  if (stacked) {
    let r = caught.stack;
    return r;
  }
  let r3 = String(caught);
  return r3;
}
