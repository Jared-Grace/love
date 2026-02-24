import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function file_copy_overwrite_from_properties(info, from, to) {
  let src_path_latest = property_get(info, from);
  let src_path = property_get(info, to);
  log({
    src_path_latest,
    src_path,
  });
  await file_copy_overwrite(src_path_latest, src_path);
}
