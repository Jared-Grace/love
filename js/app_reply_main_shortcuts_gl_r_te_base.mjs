import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_main_shortcuts_r_ke_ } from "./app_reply_main_shortcuts_r_ke_.mjs";
import { app_reply_main_shortcuts_r_default } from "./app_reply_main_shortcuts_r_default.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_languages_default_concat_single } from "./app_reply_main_shortcuts_languages_default_concat_single.mjs";
export function app_reply_main_shortcuts_gl_r_te_base(
  root,
  languages_chosen_default,
) {
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
  let r_te_base = {
    name: "TE",
    languages: app_reply_main_shortcuts_languages_default_concat_single(
      te,
      languages_chosen_default,
    ),
    count: 0,
    responses: [],
  };
  return {
    r_default3,
    r_ke_403,
    r_ug_403,
    r_ug_3,
    gl4,
    r_pk_4,
    r_pk_104,
    r_pk_10_g4,
    r_pk_10_gh4,
    r_pk_10_h4,
    r_pk_1_c4,
    r_pk_1_m4,
    r_pk_1_w4,
    r_pk_10_glory4,
    r_pk_204,
    r_pk_404,
    r_ke_4,
    r_te_base,
  };
}
