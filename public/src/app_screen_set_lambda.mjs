import { app_screen_set } from "../../../love/public/src/app_screen_set.mjs";
export function app_screen_set_lambda(context, screen_name) {
  let l = async function lambda() {
    await app_screen_set(context, screen_name);
  };
  return l;
}
