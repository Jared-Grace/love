import { app_shared_language_sort_by_name } from "./app_shared_language_sort_by_name.mjs";
import { equal } from "./equal.mjs";
export function app_shared_language_sort_label(mode) {
  let by_name = equal(mode, app_shared_language_sort_by_name());
  if (by_name) {
    return "Sorted A to Z";
  }
  return "Sorted by most speakers";
}
