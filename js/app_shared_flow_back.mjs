import { list_take } from "./list_take.mjs";
import { app_shared_flow } from "./app_shared_flow.mjs";
import { list_last } from "./list_last.mjs";
export async function app_shared_flow_back(context, screens) {
  let find = list_last;
  await app_shared_flow(context, screens, list_take, find);
}
