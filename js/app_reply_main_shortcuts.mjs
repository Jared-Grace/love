import { app_reply_main_shortcuts_gl } from "./app_reply_main_shortcuts_gl.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_shortcut_each } from "./app_reply_main_shortcuts_shortcut_each.mjs";
import { app_reply_main_shortcuts_languages_default_concat_single } from "./app_reply_main_shortcuts_languages_default_concat_single.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
import { app_reply_main_shortcuts_shortcut_extend_response } from "./app_reply_main_shortcuts_shortcut_extend_response.mjs";
import { app_reply_main_shortcuts_shortcut_extend } from "./app_reply_main_shortcuts_shortcut_extend.mjs";
import { ebible_language_arabic } from "./ebible_language_arabic.mjs";
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
  let r_pk_10_g = property_get(r2, "r_pk_10_g");
  let r_pk_10_gh = property_get(r2, "r_pk_10_gh");
  let r_pk_10_h = property_get(r2, "r_pk_10_h");
  let r_pk_1_c = property_get(r2, "r_pk_1_c");
  let r_pk_1_m = property_get(r2, "r_pk_1_m");
  let r_pk_1_w = property_get(r2, "r_pk_1_w");
  let r_pk_10_glory = property_get(r2, "r_pk_10_glory");
  let r_pk_20 = property_get(r2, "r_pk_20");
  let r_pk_40 = property_get(r2, "r_pk_40");
  let r_ke_ = property_get(r2, "r_ke_");
  let bn = property_get(r2, "bn");
  let r6 = property_get(r2, "r6");
  let r_ug_ = property_get(r6, "r_ug_");
  let r_ug_40 = property_get(r6, "r_ug_40");
  let r_ke_40 = property_get(r6, "r_ke_40");
  let r_default = property_get(r6, "r_default");
  let r_te_ = property_get(r6, "r_te_");
  let r_bn_base = {
    name: "BN",
    languages: app_reply_main_shortcuts_languages_default_concat_single(
      bn,
      languages_chosen_default,
    ),
    count: 0,
    responses: [],
  };
  let r_bn_ = app_reply_main_shortcuts_shortcut_extend_count(r_bn_base, 10);
  let ar = ebible_language_arabic();
  let r_ar_base = {
    name: "AR",
    languages: app_reply_main_shortcuts_languages_default_concat_single(
      ar,
      languages_chosen_default,
    ),
    count: 0,
    responses: [],
  };
  let r_ar_ = app_reply_main_shortcuts_shortcut_extend_count(r_ar_base, 10);
  let r_yt = app_reply_main_shortcuts_shortcut_extend_count(r_default, 2);
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
