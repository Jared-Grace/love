import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
export function app_shared_screen_set_fn(context, fn) {
  let r = function lambda11() {
    app_shared_screen_set(context, fn);
  };
  return r;
}
