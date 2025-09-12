import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let contents = await ebible_verses("engbsb", "GEN01");
  return contents;
}
