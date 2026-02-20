import { vite_config_entry_path } from "../../../love/public/src/vite_config_entry_path.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function vite_config_entry_add(entry, fn) {
  object_merge(entry, {
    [fn.name]: vite_config_entry_path(fn),
  });
}
