import { bible_verses_encouragement_generate } from "./bible_verses_encouragement_generate.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  await bible_verses_encouragement_generate();
}
