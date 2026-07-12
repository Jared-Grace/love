import { vite_config_entry_path } from "./vite_config_entry_path.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function vite_config_entry_add(entry, fn) {
  object_merge_set(entry, {
    [fn.name]: vite_config_entry_path(fn),
  });
}
