import { ebible_versions_download } from "./ebible_versions_download.mjs";
import { marker } from "./marker.mjs";
import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  await ebible_versions_download();
  return;
  marker("1");
  let contents = await ebible_version_verses("engbsb");
  return contents;
}
