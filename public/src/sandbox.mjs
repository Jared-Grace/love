import { tasks_run } from "../../../love/public/src/tasks_run.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { function_source_replace } from "../../../love/public/src/function_source_replace.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  let prefix = "id > ";
  let list = [
    "id > e m p t y",
    "id > t a u t o l o g y",
    "id > i d e n t i t y",
    "id > i n v o k e",
    "id > a v e r a g e",
    "id > s u m",
  ];
  let mapped = list_map_prefix_without(list, prefix);
  async function lambda(from) {
    let result = await tasks_run();
    log(sandbox.name, {
      item: from,
    });
    return;
    await function_source_replace(f_name, from, to);
  }
  await each_async(mapped, lambda);
}
