import { bible_verses_encouragement } from "./bible_verses_encouragement.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  await bible_verses_encouragement();
}
