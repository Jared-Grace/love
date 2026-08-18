import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_main_shortcuts_languages_ke } from "./app_reply_main_shortcuts_languages_ke.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
export function app_reply_main_shortcuts_r_ke_(root, languages_chosen_default) {
  arguments_assert(arguments, 2);
  let r2 = app_reply_main_shortcuts_languages_ke(
    root,
    languages_chosen_default,
  );
  let languages_ke = property_get(r2, "languages_ke");
  let r_ug_40 = property_get(r2, "r_ug_40");
  let r_ug_ = property_get(r2, "r_ug_");
  let gl = property_get(r2, "gl");
  let te = property_get(r2, "te");
  let r_pk_ = property_get(r2, "r_pk_");
  let r_pk_10 = property_get(r2, "r_pk_10");
  let r_pk_10_g = property_get(r2, "r_pk_10_g");
  let r_pk_10_gh = property_get(r2, "r_pk_10_gh");
  let r_pk_10_h = property_get(r2, "r_pk_10_h");
  let r_pk_1_c = property_get(r2, "r_pk_1_c");
  let r_pk_1_m = property_get(r2, "r_pk_1_m");
  let r_pk_1_w = property_get(r2, "r_pk_1_w");
  let r_pk_10_glory = property_get(r2, "r_pk_10_glory");
  let r_pk_20 = property_get(r2, "r_pk_20");
  let r_pk_40 = property_get(r2, "r_pk_40");
  let r_ke_base = {
    name: "KE",
    languages: languages_ke,
    count: 0,
    responses: [],
  };
  let r_ke_ = app_reply_main_shortcuts_shortcut_extend_count(r_ke_base, 10);
  return {
    r_ug_40,
    r_ug_,
    gl,
    te,
    r_pk_,
    r_pk_10,
    r_pk_10_g,
    r_pk_10_gh,
    r_pk_10_h,
    r_pk_1_c,
    r_pk_1_m,
    r_pk_1_w,
    r_pk_10_glory,
    r_pk_20,
    r_pk_40,
    r_ke_base,
    r_ke_,
  };
}
