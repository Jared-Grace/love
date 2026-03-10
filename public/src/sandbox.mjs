import { sermon_translate_david } from "../../../love/public/src/sermon_translate_david.mjs";
export async function sandbox() {
  let joined = await sermon_translate_david();
  return joined;
}
