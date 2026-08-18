import { app_reply_main_shortcuts_r_yt } from "./app_reply_main_shortcuts_r_yt.mjs";
import { app_reply_main_shortcuts_r_ar_ } from "./app_reply_main_shortcuts_r_ar_.mjs";
import { app_reply_main_shortcuts_r_ar_base } from "./app_reply_main_shortcuts_r_ar_base.mjs";
import { app_reply_main_shortcuts_ar } from "./app_reply_main_shortcuts_ar.mjs";
import { app_reply_main_shortcuts_r_bn_ } from "./app_reply_main_shortcuts_r_bn_.mjs";
import { app_reply_main_shortcuts_r_bn_base } from "./app_reply_main_shortcuts_r_bn_base.mjs";
import { app_reply_main_shortcuts_gl } from "./app_reply_main_shortcuts_gl.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_shortcut_each } from "./app_reply_main_shortcuts_shortcut_each.mjs";
import { app_reply_main_shortcuts_shortcut_extend_response } from "./app_reply_main_shortcuts_shortcut_extend_response.mjs";
import { app_reply_main_shortcuts_shortcut_extend } from "./app_reply_main_shortcuts_shortcut_extend.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
import { app_reply_languages_chosen_default } from "./app_reply_languages_chosen_default.mjs";
import { each } from "./each.mjs";
export function app_reply_main_shortcuts(
  root,
  languages_chosen,
  languages,
  update,
  buttons_languages,
  buttons_responses,
) {
  let languages_chosen_default = app_reply_languages_chosen_default();
  let r2 = app_reply_main_shortcuts_gl(root, languages_chosen_default);
  let gl = property_get(r2, "gl");
  let r_pk_ = property_get(r2, "r_pk_");
  let r_pk_10 = property_get(r2, "r_pk_10");
  let r3 = app_reply_main_shortcuts_r_bn_base(r2, languages_chosen_default);
  let r4 = app_reply_main_shortcuts_r_bn_(r3);
  let r5 = app_reply_main_shortcuts_ar(r4);
  let r6 = app_reply_main_shortcuts_r_ar_base(r5, languages_chosen_default);
  let r7 = app_reply_main_shortcuts_r_ar_(r6);
  arguments_assert(arguments, 1);
  let r_ar_2 = property_get(r7, "r_ar_");
  let r_te_2 = property_get(r7, "r_te_");
  let r_default2 = property_get(r7, "r_default");
  let r_ke_402 = property_get(r7, "r_ke_40");
  let r_ug_402 = property_get(r7, "r_ug_40");
  let r_ug_2 = property_get(r7, "r_ug_");
  let r_ke_2 = property_get(r7, "r_ke_");
  let r_pk_2 = property_get(r7, "r_pk_40");
  let r_pk_202 = property_get(r7, "r_pk_20");
  let r_pk_10_glory2 = property_get(r7, "r_pk_10_glory");
  let r_pk_1_w2 = property_get(r7, "r_pk_1_w");
  let r_pk_1_m2 = property_get(r7, "r_pk_1_m");
  let r_pk_1_c2 = property_get(r7, "r_pk_1_c");
  let r_pk_10_h2 = property_get(r7, "r_pk_10_h");
  let r_pk_10_gh2 = property_get(r7, "r_pk_10_gh");
  let r_pk_10_g2 = property_get(r7, "r_pk_10_g");
  let r_bn_2 = property_get(r7, "r_bn_");
  let r_yt2 = app_reply_main_shortcuts_shortcut_extend_count(r_default2, 2);
  let r9 = {
    r_ar_: r_ar_2,
    r_te_: r_te_2,
    r_default: r_default2,
    r_ke_40: r_ke_402,
    r_ug_40: r_ug_402,
    r_ug_: r_ug_2,
    r_ke_: r_ke_2,
    r_pk_40: r_pk_2,
    r_pk_20: r_pk_202,
    r_pk_10_glory: r_pk_10_glory2,
    r_pk_1_w: r_pk_1_w2,
    r_pk_1_m: r_pk_1_m2,
    r_pk_1_c: r_pk_1_c2,
    r_pk_10_h: r_pk_10_h2,
    r_pk_10_gh: r_pk_10_gh2,
    r_pk_10_g: r_pk_10_g2,
    r_bn_: r_bn_2,
    r_yt: r_yt2,
  };
  let r8 = r9;
  let r_yt = property_get(r8, "r_yt");
  let r_bn_ = property_get(r8, "r_bn_");
  let r_pk_10_g = property_get(r8, "r_pk_10_g");
  let r_pk_10_gh = property_get(r8, "r_pk_10_gh");
  let r_pk_10_h = property_get(r8, "r_pk_10_h");
  let r_pk_1_c = property_get(r8, "r_pk_1_c");
  let r_pk_1_m = property_get(r8, "r_pk_1_m");
  let r_pk_1_w = property_get(r8, "r_pk_1_w");
  let r_pk_10_glory = property_get(r8, "r_pk_10_glory");
  let r_pk_20 = property_get(r8, "r_pk_20");
  let r_pk_40 = property_get(r8, "r_pk_40");
  let r_ke_ = property_get(r8, "r_ke_");
  let r_ug_ = property_get(r8, "r_ug_");
  let r_ug_40 = property_get(r8, "r_ug_40");
  let r_ke_40 = property_get(r8, "r_ke_40");
  let r_default = property_get(r8, "r_default");
  let r_te_ = property_get(r8, "r_te_");
  let r_ar_ = property_get(r8, "r_ar_");
  r_yt = app_reply_main_shortcuts_shortcut_extend(r_yt, "yt");
  let en_l = ebible_language_english();
  let r_en_ = {
    name: "en40",
    languages: [en_l],
    count: 40,
    responses: [],
  };
  let r_intro = app_reply_main_shortcuts_shortcut_extend_response(
    r_default,
    "intro",
    gl,
  );
  let shortcuts = [
    r_intro,
    r_pk_,
    r_pk_1_c,
    r_pk_1_m,
    r_pk_1_w,
    r_pk_10,
    r_pk_10_g,
    r_pk_10_h,
    r_pk_10_gh,
    r_pk_10_glory,
    r_pk_20,
    r_pk_40,
    r_ug_,
    r_ug_40,
    r_ke_,
    r_ke_40,
    r_te_,
    r_bn_,
    r_ar_,
    r_en_,
    r_yt,
  ];
  function shortcut_each(s) {
    let r = app_reply_main_shortcuts_shortcut_each(
      s,
      languages_chosen,
      languages,
      update,
      buttons_languages,
      buttons_responses,
      root,
    );
    return r;
  }
  each(shortcuts, shortcut_each);
}
