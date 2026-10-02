import { arguments_assert } from "./arguments_assert.mjs";
import { web_assets_paths } from "./web_assets_paths.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { web_assets_upload_paths } from "./web_assets_upload_paths.mjs";
export async function web_assets_upload_folder(folder) {
  "$plain folder";
  "Writes every asset under one folder of the assets to storage, the folder said as where it sits under the assets folder - song/the_FATHERs_SON, say.";
  "IT EXISTS BECAUSE THE WHOLE UPLOAD STOPPED BEING THE CHEAP WAY TO SEND A FEW FILES. Seventy-five thousand assets, most of them spoken Bible words, take hours to send again; thirty-six redrawn pictures waited behind all of them. Sending only the folder that changed is the same writing, done to the files that need it.";
  "The folder is matched with its closing separator, so song/a does not also send song/ab.";
  arguments_assert(arguments, 1);
  let paths = await web_assets_paths();
  let prefix = folder + "/";
  let under = list_filter_starts_with(paths, prefix);
  let result = await web_assets_upload_paths(under);
  return result;
}
