import { app_shared_flow } from "../../../love/public/src/app_shared_flow.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
export function app_generic_flow_next(context, screens) {
  let before_or_after = function lambda(screens, index) {
    let skipped = list_skip(screens, index + 1);
    return skipped;
  };
  let find = list_first;
  app_shared_flow(context, screens, before_or_after, find);
}
