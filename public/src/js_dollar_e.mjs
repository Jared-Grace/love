import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
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
  let alternate = object_property_get(previous, "alternate");
  while (alternate !== null) {}
  log({
    previous,
  });
  return;
}
