import { fn_name } from "./fn_name.mjs";
import { js_fold } from "./js_fold.mjs";
export function comment_reference_probe() {
  "A throwaway used to find out which comment shapes survive the normalize pipeline unchanged. Delete once the answer is recorded.";
  let f_name = fn_name("js_fold");
  [f_name, " runs before this"];
  `${js_fold.name} runs before this`;
  (js_fold.name, " runs before this");
  let r = 1;
  return r;
}
