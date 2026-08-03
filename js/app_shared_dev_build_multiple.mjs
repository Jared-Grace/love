import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
import { each_async } from "./each_async.mjs";
export async function app_shared_dev_build_multiple(list) {
  "Builds each of the named apps for dev, one after another.";
  async function lambda(item) {
    await app_shared_dev_build(item);
  }
  await each_async(list, lambda);
}
