import { arguments_assert } from "./arguments_assert.mjs";
export function html_regenerate_stable_check_settled() {
  arguments_assert(arguments, 0);
  let offenders = [];
  let settled = [];
  let r = {
    offenders,
    settled,
  };
  return r;
}
