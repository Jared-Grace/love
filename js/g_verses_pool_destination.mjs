import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function g_verses_pool_destination(name) {
  "the firebase storage path for a named verse pool's single batched file (e.g. name 'waiting_on_the_lord' -> g_verses/waiting_on_the_lord.json); one file per pool so the whole pool downloads in ONE request";
  let file_name = file_name_json(name);
  let destination = list_join_slash_forward(["g_verses", file_name]);
  return destination;
}
