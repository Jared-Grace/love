import { each_async } from "./each_async.mjs";
import { ebible_versions } from "./ebible_versions.mjs";
import { marker } from "./marker.mjs";
import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  let unique = await ebible_versions();
  async function lambda(item) {}
  await each_async(list, lambda);
  return unique;
  marker("1");
  let contents = await ebible_version_verses("engbsb");
  return contents;
}
