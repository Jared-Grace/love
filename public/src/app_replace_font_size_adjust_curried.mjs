import { app_replace_font_size_adjust } from "../../../love/public/src/app_replace_font_size_adjust.mjs";
export async function app_replace_font_size_adjust_curried(context) {
  let r2 = async function app_replace_font_size_adjust_curried_result(
    value_get,
  ) {
    let r = await app_replace_font_size_adjust(context, value_get);
    return r;
  };
  return r2;
}
