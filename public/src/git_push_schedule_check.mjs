import { schtasks_query } from "./schtasks_query.mjs";
import { git_push_schedule_task_name } from "./git_push_schedule_task_name.mjs";
import { marker } from "./marker.mjs";
export async function git_push_schedule_check() {
  marker("1");
  ("todo rename this to exists from check");
  let name = git_push_schedule_task_name();
  const exists = await schtasks_query(name);
  return exists;
}
