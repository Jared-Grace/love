import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { list_first } from "./list_first.mjs";
export function permission_settings_shared_path() {
  "where the settings file every machine shares sits - the first of the files a permission rule can live in";
  "the local file beside it is per-machine and outside version control, so everything that generates or checks the allow list names this one, and named it by taking the first path out of the list four separate times.";
  let paths = permission_settings_paths();
  let path = list_first(paths);
  return path;
}
