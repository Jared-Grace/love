import { window_open_app } from "../../../love/public/src/window_open_app.mjs";
export function window_open_app_curried_right(hash) {
  return function window_open_app_curried_right_result(app_fn) {
    return window_open_app(app_fn, hash);
  };
}
