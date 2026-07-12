import { unzip_self } from "./unzip_self.mjs";
import { each_async } from "./each_async.mjs";
export async function unzip_self_multiple(files) {
  await each_async(files, unzip_self);
}
