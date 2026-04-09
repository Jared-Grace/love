import { window_open_google_define } from "../../../love/public/src/window_open_google_define.mjs";
export function window_open_google_define_later(item) {
  let r = function lambda3() {
    window_open_google_define(item);
  };
  return r;
}
