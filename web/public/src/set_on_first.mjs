import { set_new } from "../../../love/public/src/set_new.mjs";
export function set_on_first(of) {
  let s = set_new();
  function lambda() {}
  of(lambda);
}
