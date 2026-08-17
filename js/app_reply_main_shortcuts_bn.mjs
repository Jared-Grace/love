import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_language_bengali } from "./ebible_language_bengali.mjs";
export function app_reply_main_shortcuts_bn(r5) {
  arguments_assert(arguments, 1);
  let r_te_ = property_get(r5, "r_te_");
  let r_default = property_get(r5, "r_default");
  let r_ke_40 = property_get(r5, "r_ke_40");
  let r_ug_40 = property_get(r5, "r_ug_40");
  let r_ug_ = property_get(r5, "r_ug_");
  let gl = property_get(r5, "gl");
  let r_pk_ = property_get(r5, "r_pk_");
  let r_pk_10 = property_get(r5, "r_pk_10");
  let r_pk_10_g = property_get(r5, "r_pk_10_g");
  let r_pk_10_gh = property_get(r5, "r_pk_10_gh");
  let r_pk_10_h = property_get(r5, "r_pk_10_h");
  let r_pk_1_c = property_get(r5, "r_pk_1_c");
  let r_pk_1_m = property_get(r5, "r_pk_1_m");
  let r_pk_1_w = property_get(r5, "r_pk_1_w");
  let r_pk_10_glory = property_get(r5, "r_pk_10_glory");
  let r_pk_20 = property_get(r5, "r_pk_20");
  let r_pk_40 = property_get(r5, "r_pk_40");
  let r_ke_ = property_get(r5, "r_ke_");
  let bn = ebible_language_bengali();
  let r = {
    r_te_,
    r_default,
    r_ke_40,
    r_ug_40,
    r_ug_,
    gl,
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
    r_ke_,
    bn,
  };
  return r;
}
