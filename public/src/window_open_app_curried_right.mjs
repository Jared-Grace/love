import { window_open_app_fn } from "../../../love/public/src/window_open_app_fn.mjs";
export function window_open_app_curried_right(hash) {
  let r2 = function window_open_app_curried_right_result(app_fn) {
    let r = window_open_app_fn(app_fn, hash);
    return r;
  };
  return r2;
}
