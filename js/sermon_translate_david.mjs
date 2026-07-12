import { sermon_translate_urdu } from "./sermon_translate_urdu.mjs";
export async function sermon_translate_david() {
  let file_name = "David";
  let joined = await sermon_translate_urdu(file_name);
  return joined;
}
