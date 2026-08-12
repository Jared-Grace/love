import { object_merge_match } from "./object_merge_match.mjs";
export function app_shared_app_fn_set(context, app_fn) {
  "say which app this context belongs to - everything the reader keeps on the device is filed under that name, so a screen reached without it can read nothing back";
  "agreement rather than a clash: the same app saying so a second time is the ordinary case, and only a different answer is a real fault";
  object_merge_match(context, {
    app_fn,
  });
}
