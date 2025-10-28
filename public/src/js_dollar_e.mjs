import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_dollar_e({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  marker("1");
  let previous = list_previous(stack2, stack1);
  log({
    previous,
  });
  return;
}
