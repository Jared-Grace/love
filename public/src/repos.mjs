import { folder_read } from "./folder_read.mjs";
import { marker } from "./marker.mjs";
export async function repos() {
  marker("1");
  let all = await folder_read(repos_folder());
  return all;
}
function repos_folder() {
    return folder_previous();
}

