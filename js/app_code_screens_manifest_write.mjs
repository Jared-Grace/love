import { app_code_screens_manifest_path_assert } from "./app_code_screens_manifest_path_assert.mjs";
import { app_code_screens_records } from "./app_code_screens_records.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function app_code_screens_manifest_write(url_prefix, path) {
  "crawl every code screen and write the full text manifest (JSON) to path: one entry per screen with its lesson id, screen, kind, title, and visible text. This is the artifact the make-sense judge reads and that a later run diffs against, to focus judging on only what changed. Returns how many screens were written and where";
  let collected = await app_code_screens_records(url_prefix);
  let records = property_get(collected, "records");
  await app_code_screens_manifest_records_write(records, path);
  let screens = list_size(records);
  let result = {
    screens,
    path,
  };
  return result;
}
