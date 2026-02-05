import { html_name_to_path_folder } from "../../../love/public/src/html_name_to_path_folder.mjs";
export function html_name_to_path_dev(name) {
  const folder = "dev";
  let file_path = html_name_to_path_folder(name, folder);
  return file_path;
}
