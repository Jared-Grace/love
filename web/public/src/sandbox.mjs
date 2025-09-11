import { marker } from "./marker.mjs";
import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  marker("1");
  let contents = await ebible_version_verses("engbsb");
  ("https://ebible.org/download.php");
  return contents;
}
