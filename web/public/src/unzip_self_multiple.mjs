import { unzip_self } from "../../../love/public/src/unzip_self.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function unzip_self_multiple(files) {
  await each_async(files, unzip_self);
}
