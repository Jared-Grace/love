import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
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
  let test = object_property_get(n, "test");
  log({
    n,
  });
  return;
}
