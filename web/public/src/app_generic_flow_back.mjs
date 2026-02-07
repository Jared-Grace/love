import { list_take } from "../../../love/public/src/list_take.mjs";
import { app_shared_flow } from "../../../love/public/src/app_shared_flow.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
export function app_generic_flow_back(context, screens) {
  let find = list_last;
  app_shared_flow(context, screens, list_take, find);
}
