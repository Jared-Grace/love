import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_main_shortcuts_r_ke_ } from "./app_reply_main_shortcuts_r_ke_.mjs";
import { app_reply_main_shortcuts_r_default } from "./app_reply_main_shortcuts_r_default.mjs";
import { app_reply_main_shortcuts_r_te_base } from "./app_reply_main_shortcuts_r_te_base.mjs";
import { app_reply_main_shortcuts_r_te_ } from "./app_reply_main_shortcuts_r_te_.mjs";
import { app_reply_main_shortcuts_bn } from "./app_reply_main_shortcuts_bn.mjs";
import { property_get } from "./property_get.mjs";
export function app_reply_main_shortcuts_gl(root, languages_chosen_default) {
  arguments_assert(arguments, 2);
  let r2 = app_reply_main_shortcuts_r_ke_(root, languages_chosen_default);
  let r3 = app_reply_main_shortcuts_r_default(r2, languages_chosen_default);
  let r4 = app_reply_main_shortcuts_r_te_base(r3, languages_chosen_default);
  let r5 = app_reply_main_shortcuts_r_te_(r4);
  let r6 = app_reply_main_shortcuts_bn(r5);
  let bn = property_get(r6, "bn");
  let r_ke_ = property_get(r6, "r_ke_");
  let r_pk_40 = property_get(r6, "r_pk_40");
  let r_pk_20 = property_get(r6, "r_pk_20");
  let r_pk_10_glory = property_get(r6, "r_pk_10_glory");
  let r_pk_1_w = property_get(r6, "r_pk_1_w");
  let r_pk_1_m = property_get(r6, "r_pk_1_m");
  let r_pk_1_c = property_get(r6, "r_pk_1_c");
  let r_pk_10_h = property_get(r6, "r_pk_10_h");
  let r_pk_10_gh = property_get(r6, "r_pk_10_gh");
  let r_pk_10_g = property_get(r6, "r_pk_10_g");
  let r_pk_10 = property_get(r6, "r_pk_10");
  let r_pk_ = property_get(r6, "r_pk_");
  let gl = property_get(r6, "gl");
  let r = {
    r6,
    bn,
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
    gl,
  };
  return r;
}
