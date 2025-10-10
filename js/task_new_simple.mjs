import { task_new } from "../../../love/public/src/task_new.mjs";
export async function task_new_simple() {
  let v = await task_new("simple");
  return v;
}
