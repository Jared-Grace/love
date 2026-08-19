import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_download } from "./door43_version_download.mjs";
import { local_function_path } from "./local_function_path.mjs";
export function door43_version_download_path(door43_folder) {
  arguments_assert(arguments, 1);
  ("$plain door43_folder");
  ("Where on this machine one bible fetched from the Door43 catalogue is unpacked.");
  ("Named after the fetching itself, the way every other downloaded thing here is, so the folder says what put it there and nothing has to be told twice where things go.");
  let joined = local_function_path(door43_version_download, door43_folder);
  return joined;
}
