import { app_shared_language_sort_get } from "./app_shared_language_sort_get.mjs";
import { app_shared_language_sort_set } from "./app_shared_language_sort_set.mjs";
import { app_shared_language_sort_by_speakers } from "./app_shared_language_sort_by_speakers.mjs";
import { app_shared_language_sort_by_name } from "./app_shared_language_sort_by_name.mjs";
import { equal } from "./equal.mjs";
export function app_shared_language_sort_toggle() {
  let mode = app_shared_language_sort_get();
  let by_name = equal(mode, app_shared_language_sort_by_name());
  let next = app_shared_language_sort_by_name();
  if (by_name) {
    next = app_shared_language_sort_by_speakers();
  }
  app_shared_language_sort_set(next);
  return next;
}
