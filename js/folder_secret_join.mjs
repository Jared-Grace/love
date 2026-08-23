import { path_join } from "./path_join.mjs";
import { folder_secret } from "./folder_secret.mjs";
export function folder_secret_join(only) {
  "Where a named secret file sits - the one name handed in, joined onto the folder of secrets that is kept outside every repo so that nothing holding a key can be committed by accident.";
  let path_folder = folder_secret();
  let file_path = path_join([path_folder, only]);
  return file_path;
}
