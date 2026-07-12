import { sermon_lines_translate_urdu } from "./sermon_lines_translate_urdu.mjs";
export async function sermon_translate_1CO03_second_half() {
  let file_name = "1CO03_second_half";
  let joined = await sermon_lines_translate_urdu(file_name);
  return joined;
}
