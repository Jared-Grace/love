import { cache_control_asset_value } from "./cache_control_asset_value.mjs";
import { file_content_type } from "./file_content_type.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { firebase_upload_generic } from "./firebase_upload_generic.mjs";
import { web_assets_destination } from "./web_assets_destination.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
export async function web_assets_upload(path) {
  "$plain path";
  "Writes one asset to storage, given where it sits under the assets folder.";
  "The one piece of path names both ends of the copy - the file to read here and the file to write there - so the two layouts cannot drift apart.";
  let file_path = web_assets_folder_join(path);
  let buffer = await file_read_buffer(file_path);
  let destination = web_assets_destination(path);
  let content_type = file_content_type(path);
  let cache_control = cache_control_asset_value();
  let settings = {
    contentType: content_type,
    metadata: {
      contentType: content_type,
      cacheControl: cache_control,
    },
  };
  await firebase_upload_generic(destination, settings, buffer);
  return destination;
}
