import { web_assets_destination } from "./web_assets_destination.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { md5_base64 } from "./md5_base64.mjs";
import { file_content_type } from "./file_content_type.mjs";
import { cache_control_asset_value } from "./cache_control_asset_value.mjs";
import { equal } from "./equal.mjs";
export async function web_assets_upload_needed_is(stored, path) {
  "$plain path";
  "Whether writing one asset would change what storage holds, given what storage was found holding.";
  "IT SAYS NO ONLY WHEN ALL THREE AGREE - the bytes, the kind of file, and how long a browser may keep it. Those are everything an upload writes, so a file they all agree on is one that writing again would leave exactly as it was. A setting changed here is a reason to write every file again, and this says so rather than skipping them.";
  "Anything storage was not found holding, or holds without a checksum, is written.";
  let destination = web_assets_destination(path);
  let held = property_exists(stored, destination);
  if (not(held)) {
    return true;
  }
  let kept = property_get(stored, destination);
  let file_path = web_assets_folder_join(path);
  let buffer = await file_read_buffer(file_path);
  let md = md5_base64(buffer);
  let content_type = file_content_type(path);
  let cache_control = cache_control_asset_value();
  let same =
    equal(md, kept.md5) &&
    equal(content_type, kept.content_type) &&
    equal(cache_control, kept.cache_control);
  let n = not(same);
  return n;
}
