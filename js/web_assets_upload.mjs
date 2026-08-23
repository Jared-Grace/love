import { cache_control_asset_value } from "./cache_control_asset_value.mjs";
import { file_content_type } from "./file_content_type.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { firebase_upload_settings } from "./firebase_upload_settings.mjs";
import { web_assets_destination } from "./web_assets_destination.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
export async function web_assets_upload(path) {
  "$plain path";
  "Writes one asset to storage, given where it sits under the assets folder.";
  "The one piece of path names both ends of the copy - the file to read here and the file to write there - so the two layouts cannot drift apart.";
  "IT IS WRITTEN IN ONE GO AND NEVER RESUMABLY. Left unsaid, storage opens a resumable session for every file - a handshake, then the bytes, then a finish - which is the right shape for something large enough that losing half way through would hurt, and the wrong shape for an asset. Thirty-two of those opened at once is what a run of them looks like here, and the first assets big enough to matter, a set of pictures around four hundred kilobytes each, failed every retry with a reason storage did not fill in. The same file written alone went up first time, which is what says it was the shape of the writing and not the file.";
  "The largest thing that will ever come through here is a picture, so nothing loses by it. A file big enough to want resuming does not belong in a folder that is uploaded whole every time.";
  let file_path = web_assets_folder_join(path);
  let buffer = await file_read_buffer(file_path);
  let destination = web_assets_destination(path);
  let content_type = file_content_type(path);
  let cache_control = cache_control_asset_value();
  let settings = {
    contentType: content_type,
    resumable: false,
    metadata: {
      contentType: content_type,
      cacheControl: cache_control,
    },
  };
  await firebase_upload_settings(destination, settings, buffer);
  return destination;
}
