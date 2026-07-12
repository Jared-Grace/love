import { window_open_app } from "./window_open_app.mjs";
export function window_open_app_curried_right(hash) {
  let r2 = function window_open_app_curried_right_result(app_fn_name) {
    let r = window_open_app(app_fn_name, hash);
    return r;
  };
  return r2;
}
