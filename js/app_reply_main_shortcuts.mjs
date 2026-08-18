import { app_reply_main_shortcuts_bn } from "./app_reply_main_shortcuts_bn.mjs";
import { app_reply_main_shortcuts_r_te_ } from "./app_reply_main_shortcuts_r_te_.mjs";
import { app_reply_main_shortcuts_r_te_base } from "./app_reply_main_shortcuts_r_te_base.mjs";
import { app_reply_main_shortcuts_r_default } from "./app_reply_main_shortcuts_r_default.mjs";
import { app_reply_main_shortcuts_r_ke_ } from "./app_reply_main_shortcuts_r_ke_.mjs";
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
  let r2 = app_reply_main_shortcuts_r_ke_(root, languages_chosen_default);
  let r3 = app_reply_main_shortcuts_r_default(r2, languages_chosen_default);
  let r4 = app_reply_main_shortcuts_r_te_base(r3, languages_chosen_default);
  let r5 = app_reply_main_shortcuts_r_te_(r4);
  let {
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
  } = app_reply_main_shortcuts_bn(r5);
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
