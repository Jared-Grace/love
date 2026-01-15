import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
export async function file_exists_not(joined_image) {
  let exists = await file_exists(joined_image);
  const n = not(exists);
  return n;
}
