import { g_characters_unzip } from "../../../love/public/src/g_characters_unzip.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  await g_characters_unzip();
}
