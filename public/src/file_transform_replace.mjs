import { file_transform } from "../../../love/public/src/file_transform.mjs";
import { text_replace_curried_right_2 } from "../../../love/public/src/text_replace_curried_right_2.mjs";
export async function file_transform_replace(f_path, from, to) {
  let r2 = text_replace_curried_right_2(from, to);
  let r = await file_transform(f_path, r2);
}
