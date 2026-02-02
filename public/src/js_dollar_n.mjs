import { list_next } from "../../../love/public/src/list_next.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_dollar_n({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  marker("1");
  let n = list_next(stack2, stack1);
  log({
    n,
  });
  return;
}
