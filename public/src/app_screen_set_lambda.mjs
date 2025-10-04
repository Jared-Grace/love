import { app_screen_set } from "../../../love/public/src/app_screen_set.mjs";
export function app_screen_set_lambda(context, screen_fn) {
  let l = function lambda() {
    app_screen_set(context, screen_fn);
  };
  return l;
}
