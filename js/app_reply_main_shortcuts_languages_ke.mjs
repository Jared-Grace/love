import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_reply_main_shortcuts_languages_ug } from "./app_reply_main_shortcuts_languages_ug.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
import { app_reply_main_shortcuts_languages_default_concat_single } from "./app_reply_main_shortcuts_languages_default_concat_single.mjs";
export function app_reply_main_shortcuts_languages_ke(
  root,
  languages_chosen_default,
) {
  arguments_assert(arguments, 2);
  app_shared_text_body(
    root,
    "3. (Optional) Or, instead of 1 or 2, choose shortcuts:",
  );
  let r2 = app_reply_main_shortcuts_languages_ug(languages_chosen_default);
  let languages_ug = property_get(r2, "languages_ug");
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
  let ke = property_get(r2, "ke");
  let gl = property_get(r2, "gl");
  let r_ug_base = {
    name: "UG",
    languages: languages_ug,
    count: 0,
    responses: [],
  };
  let r_ug_ = app_reply_main_shortcuts_shortcut_extend_count(r_ug_base, 10);
  let r_ug_40 = app_reply_main_shortcuts_shortcut_extend_count(r_ug_base, 40);
  let languages_ke = app_reply_main_shortcuts_languages_default_concat_single(
    ke,
    languages_chosen_default,
  );
  return {
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
    languages_ke,
  };
}
