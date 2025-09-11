import { http_local_text } from "./http_local_text.mjs";
import { marker } from "./marker.mjs";
import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  let url = "https://ebible.org/download.php";
  http_local_text: return;
  marker("1");
  let contents = await ebible_version_verses("engbsb");
  return contents;
}
