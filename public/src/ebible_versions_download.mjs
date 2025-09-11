import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
import { ebible_versions } from "./ebible_versions.mjs";
export async function ebible_versions_download() {
  let list = await ebible_versions();
  async function lambda(item) {
    async function lambda3() {
      let file_path = await ebible_version_download(item);
    }
    await catch_ignore_async(lambda3);
  }
  await each_async(list, lambda);
}
