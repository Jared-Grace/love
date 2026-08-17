import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
export function app_reply_main_shortcuts_r_default(
  r2,
  languages_chosen_default,
) {
  arguments_assert(arguments, 2);
  let r_ke_ = property_get(r2, "r_ke_");
  let r_ke_base = property_get(r2, "r_ke_base");
  let r_pk_40 = property_get(r2, "r_pk_40");
  let r_pk_20 = property_get(r2, "r_pk_20");
  let r_pk_10_glory = property_get(r2, "r_pk_10_glory");
  let r_pk_1_w = property_get(r2, "r_pk_1_w");
  let r_pk_1_m = property_get(r2, "r_pk_1_m");
  let r_pk_1_c = property_get(r2, "r_pk_1_c");
  let r_pk_10_h = property_get(r2, "r_pk_10_h");
  let r_pk_10_gh = property_get(r2, "r_pk_10_gh");
  let r_pk_10_g = property_get(r2, "r_pk_10_g");
  let r_pk_10 = property_get(r2, "r_pk_10");
  let r_pk_ = property_get(r2, "r_pk_");
  let te = property_get(r2, "te");
  let gl = property_get(r2, "gl");
  let r_ug_ = property_get(r2, "r_ug_");
  let r_ug_40 = property_get(r2, "r_ug_40");
  let r_ke_40 = app_reply_main_shortcuts_shortcut_extend_count(r_ke_base, 40);
  let r_default = {
    name: "",
    languages: languages_chosen_default,
    count: 1,
    responses: [],
  };
  let r = {
    r_ke_,
    r_pk_40,
    r_pk_20,
    r_pk_10_glory,
    r_pk_1_w,
    r_pk_1_m,
    r_pk_1_c,
    r_pk_10_h,
    r_pk_10_gh,
    r_pk_10_g,
    r_pk_10,
    r_pk_,
    te,
    gl,
    r_ug_,
    r_ug_40,
    r_ke_40,
    r_default,
  };
  return r;
}
