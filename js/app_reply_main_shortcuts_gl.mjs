import { app_reply_main_shortcuts_languages_default_concat_single } from "./app_reply_main_shortcuts_languages_default_concat_single.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
import { ebible_language_bengali } from "./ebible_language_bengali.mjs";
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
  let r_default3 = property_get(r3, "r_default");
  let r_ke_403 = property_get(r3, "r_ke_40");
  let r_ug_403 = property_get(r3, "r_ug_40");
  let r_ug_3 = property_get(r3, "r_ug_");
  let gl4 = property_get(r3, "gl");
  let te = property_get(r3, "te");
  let r_pk_4 = property_get(r3, "r_pk_");
  let r_pk_104 = property_get(r3, "r_pk_10");
  let r_pk_10_g4 = property_get(r3, "r_pk_10_g");
  let r_pk_10_gh4 = property_get(r3, "r_pk_10_gh");
  let r_pk_10_h4 = property_get(r3, "r_pk_10_h");
  let r_pk_1_c4 = property_get(r3, "r_pk_1_c");
  let r_pk_1_m4 = property_get(r3, "r_pk_1_m");
  let r_pk_1_w4 = property_get(r3, "r_pk_1_w");
  let r_pk_10_glory4 = property_get(r3, "r_pk_10_glory");
  let r_pk_204 = property_get(r3, "r_pk_20");
  let r_pk_404 = property_get(r3, "r_pk_40");
  let r_ke_4 = property_get(r3, "r_ke_");
  let r_te_base2 = {
    name: "TE",
    languages: app_reply_main_shortcuts_languages_default_concat_single(
      te,
      languages_chosen_default,
    ),
    count: 0,
    responses: [],
  };
  let r9 = {
    r_default: r_default3,
    r_ke_40: r_ke_403,
    r_ug_40: r_ug_403,
    r_ug_: r_ug_3,
    gl: gl4,
    r_pk_: r_pk_4,
    r_pk_10: r_pk_104,
    r_pk_10_g: r_pk_10_g4,
    r_pk_10_gh: r_pk_10_gh4,
    r_pk_10_h: r_pk_10_h4,
    r_pk_1_c: r_pk_1_c4,
    r_pk_1_m: r_pk_1_m4,
    r_pk_1_w: r_pk_1_w4,
    r_pk_10_glory: r_pk_10_glory4,
    r_pk_20: r_pk_204,
    r_pk_40: r_pk_404,
    r_ke_: r_ke_4,
    r_te_base: r_te_base2,
  };
  let r4 = r9;
  let r_te_base = property_get(r4, "r_te_base");
  let r_ke_3 = property_get(r4, "r_ke_");
  let r_pk_403 = property_get(r4, "r_pk_40");
  let r_pk_203 = property_get(r4, "r_pk_20");
  let r_pk_10_glory3 = property_get(r4, "r_pk_10_glory");
  let r_pk_1_w3 = property_get(r4, "r_pk_1_w");
  let r_pk_1_m3 = property_get(r4, "r_pk_1_m");
  let r_pk_1_c3 = property_get(r4, "r_pk_1_c");
  let r_pk_10_h3 = property_get(r4, "r_pk_10_h");
  let r_pk_10_gh3 = property_get(r4, "r_pk_10_gh");
  let r_pk_10_g3 = property_get(r4, "r_pk_10_g");
  let r_pk_103 = property_get(r4, "r_pk_10");
  let r_pk_3 = property_get(r4, "r_pk_");
  let gl3 = property_get(r4, "gl");
  let r_ug_2 = property_get(r4, "r_ug_");
  let r_ug_402 = property_get(r4, "r_ug_40");
  let r_ke_402 = property_get(r4, "r_ke_40");
  let r_default2 = property_get(r4, "r_default");
  let r_te_2 = app_reply_main_shortcuts_shortcut_extend_count(r_te_base, 10);
  let r8 = {
    r_ke_: r_ke_3,
    r_pk_40: r_pk_403,
    r_pk_20: r_pk_203,
    r_pk_10_glory: r_pk_10_glory3,
    r_pk_1_w: r_pk_1_w3,
    r_pk_1_m: r_pk_1_m3,
    r_pk_1_c: r_pk_1_c3,
    r_pk_10_h: r_pk_10_h3,
    r_pk_10_gh: r_pk_10_gh3,
    r_pk_10_g: r_pk_10_g3,
    r_pk_10: r_pk_103,
    r_pk_: r_pk_3,
    gl: gl3,
    r_ug_: r_ug_2,
    r_ug_40: r_ug_402,
    r_ke_40: r_ke_402,
    r_default: r_default2,
    r_te_: r_te_2,
  };
  let r5 = r8;
  let r_te_ = property_get(r5, "r_te_");
  let r_default = property_get(r5, "r_default");
  let r_ke_40 = property_get(r5, "r_ke_40");
  let r_ug_40 = property_get(r5, "r_ug_40");
  let r_ug_ = property_get(r5, "r_ug_");
  let gl2 = property_get(r5, "gl");
  let r_pk_2 = property_get(r5, "r_pk_");
  let r_pk_102 = property_get(r5, "r_pk_10");
  let r_pk_10_g2 = property_get(r5, "r_pk_10_g");
  let r_pk_10_gh2 = property_get(r5, "r_pk_10_gh");
  let r_pk_10_h2 = property_get(r5, "r_pk_10_h");
  let r_pk_1_c2 = property_get(r5, "r_pk_1_c");
  let r_pk_1_m2 = property_get(r5, "r_pk_1_m");
  let r_pk_1_w2 = property_get(r5, "r_pk_1_w");
  let r_pk_10_glory2 = property_get(r5, "r_pk_10_glory");
  let r_pk_202 = property_get(r5, "r_pk_20");
  let r_pk_402 = property_get(r5, "r_pk_40");
  let r_ke_2 = property_get(r5, "r_ke_");
  let bn2 = ebible_language_bengali();
  let r7 = {
    r_te_,
    r_default,
    r_ke_40,
    r_ug_40,
    r_ug_,
    gl: gl2,
    r_pk_: r_pk_2,
    r_pk_10: r_pk_102,
    r_pk_10_g: r_pk_10_g2,
    r_pk_10_gh: r_pk_10_gh2,
    r_pk_10_h: r_pk_10_h2,
    r_pk_1_c: r_pk_1_c2,
    r_pk_1_m: r_pk_1_m2,
    r_pk_1_w: r_pk_1_w2,
    r_pk_10_glory: r_pk_10_glory2,
    r_pk_20: r_pk_202,
    r_pk_40: r_pk_402,
    r_ke_: r_ke_2,
    bn: bn2,
  };
  let r6 = r7;
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
