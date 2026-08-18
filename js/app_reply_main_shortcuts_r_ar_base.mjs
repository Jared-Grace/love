import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_languages_default_concat_single } from "./app_reply_main_shortcuts_languages_default_concat_single.mjs";
export function app_reply_main_shortcuts_r_ar_base(
  r5,
  languages_chosen_default,
) {
  arguments_assert(arguments, 2);
  let ar = property_get(r5, "ar");
  let r_te_ = property_get(r5, "r_te_");
  let r_default = property_get(r5, "r_default");
  let r_ke_40 = property_get(r5, "r_ke_40");
  let r_ug_40 = property_get(r5, "r_ug_40");
  let r_ug_ = property_get(r5, "r_ug_");
  let r_ke_ = property_get(r5, "r_ke_");
  let r_pk_ = property_get(r5, "r_pk_40");
  let r_pk_20 = property_get(r5, "r_pk_20");
  let r_pk_10_glory = property_get(r5, "r_pk_10_glory");
  let r_pk_1_w = property_get(r5, "r_pk_1_w");
  let r_pk_1_m = property_get(r5, "r_pk_1_m");
  let r_pk_1_c = property_get(r5, "r_pk_1_c");
  let r_pk_10_h = property_get(r5, "r_pk_10_h");
  let r_pk_10_gh = property_get(r5, "r_pk_10_gh");
  let r_pk_10_g = property_get(r5, "r_pk_10_g");
  let r_bn_ = property_get(r5, "r_bn_");
  let r_ar_base = {
    name: "AR",
    languages: app_reply_main_shortcuts_languages_default_concat_single(
      ar,
      languages_chosen_default,
    ),
    count: 0,
    responses: [],
  };
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
    r_ar_base,
  };
  return r;
}
