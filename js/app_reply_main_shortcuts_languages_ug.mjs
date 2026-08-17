import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_greetings_live } from "./app_reply_greetings_live.mjs";
import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
import { ebible_language_punjabi } from "./ebible_language_punjabi.mjs";
import { ebible_language_luganda } from "./ebible_language_luganda.mjs";
import { ebible_language_kenya } from "./ebible_language_kenya.mjs";
import { ebible_language_telugu } from "./ebible_language_telugu.mjs";
import { app_reply_main_shortcuts_languages_default_concat } from "./app_reply_main_shortcuts_languages_default_concat.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
import { app_reply_greetings } from "./app_reply_greetings.mjs";
import { app_reply_main_shortcuts_shortcut_extend_response } from "./app_reply_main_shortcuts_shortcut_extend_response.mjs";
import { app_reply_how_r_u } from "./app_reply_how_r_u.mjs";
import { app_reply_called_why } from "./app_reply_called_why.mjs";
import { app_reply_give } from "./app_reply_give.mjs";
import { app_reply_choices_whatsapp } from "./app_reply_choices_whatsapp.mjs";
import { app_reply_glory } from "./app_reply_glory.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
import { app_reply_main_shortcuts_languages_default_concat_single } from "./app_reply_main_shortcuts_languages_default_concat_single.mjs";
export function app_reply_main_shortcuts_languages_ug(
  languages_chosen_default,
) {
  arguments_assert(arguments, 1);
  let gl = app_reply_greetings_live();
  let ur = ebible_language_urdu();
  let pa = ebible_language_punjabi();
  let lug = ebible_language_luganda();
  let ke = ebible_language_kenya();
  let te = ebible_language_telugu();
  let languages_pk = app_reply_main_shortcuts_languages_default_concat(
    [pa, ur],
    languages_chosen_default,
  );
  let r_pk_base = {
    name: "PK",
    languages: languages_pk,
    count: 0,
    responses: [],
  };
  let r_pk_ = app_reply_main_shortcuts_shortcut_extend_count(r_pk_base, 1);
  let r_pk_10 = app_reply_main_shortcuts_shortcut_extend_count(r_pk_base, 10);
  let g = app_reply_greetings();
  let r_pk_10_g = app_reply_main_shortcuts_shortcut_extend_response(
    r_pk_10,
    "g",
    g,
  );
  let h = app_reply_how_r_u();
  let r_pk_10_gh = app_reply_main_shortcuts_shortcut_extend_response(
    r_pk_10_g,
    "h",
    h,
  );
  let r_pk_10_h = app_reply_main_shortcuts_shortcut_extend_response(
    r_pk_10,
    "h",
    h,
  );
  let c = app_reply_called_why();
  let r_pk_1_c = app_reply_main_shortcuts_shortcut_extend_response(
    r_pk_,
    "c",
    c,
  );
  let m = app_reply_give();
  let r_pk_1_m = app_reply_main_shortcuts_shortcut_extend_response(
    r_pk_,
    "m",
    m,
  );
  let w = app_reply_choices_whatsapp();
  let r_pk_1_w = app_reply_main_shortcuts_shortcut_extend_response(
    r_pk_,
    "w",
    w,
  );
  let glory = app_reply_glory();
  let v = emoji_fire();
  let r_pk_10_glory = app_reply_main_shortcuts_shortcut_extend_response(
    r_pk_10,
    v,
    glory,
  );
  let r_pk_20 = app_reply_main_shortcuts_shortcut_extend_count(r_pk_base, 20);
  let r_pk_40 = app_reply_main_shortcuts_shortcut_extend_count(r_pk_base, 40);
  let languages_ug = app_reply_main_shortcuts_languages_default_concat_single(
    lug,
    languages_chosen_default,
  );
  let r = {
    gl,
    ke,
    te,
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
    languages_ug,
  };
  return r;
}
