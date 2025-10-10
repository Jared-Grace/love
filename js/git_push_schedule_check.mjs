import { schtasks_query } from "../../../love/public/src/schtasks_query.mjs";
import { git_push_schedule_task_name } from "../../../love/public/src/git_push_schedule_task_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_push_schedule_check() {
  marker("1");
  ("todo rename this to exists from check");
  let name = git_push_schedule_task_name();
  const exists = await schtasks_query(name);
  return exists;
}
