import { ebible_version_download } from "./ebible_version_download.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_versions } from "./ebible_versions.mjs";
import { marker } from "./marker.mjs";
import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  let list = await ebible_versions();
  async function lambda(item) {
    let file_path = await ebible_version_download(item);
  }
  await each_async(list, lambda);
  return;
  marker("1");
  let contents = await ebible_version_verses("engbsb");
  return contents;
}
