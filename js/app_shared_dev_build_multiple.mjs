import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
import { each_async } from "./each_async.mjs";
export async function app_shared_dev_build_multiple(list) {
  await each_async(list, async function lambda(item) {
    await app_shared_dev_build(item);
  });
}
