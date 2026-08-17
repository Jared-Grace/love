import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
export function app_reply_main_shortcuts_r_bn_(r3) {
  arguments_assert(arguments, 1);
  let r_bn_base = property_get(r3, "r_bn_base");
  let r_te_ = property_get(r3, "r_te_");
  let r_default = property_get(r3, "r_default");
  let r_ke_40 = property_get(r3, "r_ke_40");
  let r_ug_40 = property_get(r3, "r_ug_40");
  let r_ug_ = property_get(r3, "r_ug_");
  let r_ke_ = property_get(r3, "r_ke_");
  let r_pk_ = property_get(r3, "r_pk_40");
  let r_pk_20 = property_get(r3, "r_pk_20");
  let r_pk_10_glory = property_get(r3, "r_pk_10_glory");
  let r_pk_1_w = property_get(r3, "r_pk_1_w");
  let r_pk_1_m = property_get(r3, "r_pk_1_m");
  let r_pk_1_c = property_get(r3, "r_pk_1_c");
  let r_pk_10_h = property_get(r3, "r_pk_10_h");
  let r_pk_10_gh = property_get(r3, "r_pk_10_gh");
  let r_pk_10_g = property_get(r3, "r_pk_10_g");
  let r_bn_ = app_reply_main_shortcuts_shortcut_extend_count(r_bn_base, 10);
  let r = {
    r_te_,
    r_default,
    r_ke_40,
    r_ug_40,
    r_ug_,
    r_ke_,
    r_pk_40: r_pk_,
    r_pk_20,
    r_pk_10_glory,
    r_pk_1_w,
    r_pk_1_m,
    r_pk_1_c,
    r_pk_10_h,
    r_pk_10_gh,
    r_pk_10_g,
    r_bn_,
  };
  return r;
}
