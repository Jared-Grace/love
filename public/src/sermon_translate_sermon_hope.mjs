import { sermon_translate_urdu } from "../../../love/public/src/sermon_translate_urdu.mjs";
export async function sermon_translate_sermon_hope() {
  const file_name = "sermon_hope";
  let joined = await sermon_translate_urdu(file_name);
  return joined;
}
