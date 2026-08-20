import { app_reply_main_shortcuts_gl_r_te_base } from "./app_reply_main_shortcuts_gl_r_te_base.mjs";
import { app_reply_main_shortcuts_shortcut_extend_count } from "./app_reply_main_shortcuts_shortcut_extend_count.mjs";
import { ebible_language_bengali } from "./ebible_language_bengali.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_reply_main_shortcuts_gl(root, languages_chosen_default) {
  "One step in building the reply screen's shortcuts: it takes the bag the step before it made, sets the Telugu shortcut to ten verses and adds the Bengali language beside it, and hands the whole lot on.";
  "Almost every line of it is one name being lifted out of a bag and put back into another. That is what is left when a long function is cut into pieces by machine: the cut has to carry every name the later pieces will want, and it carries them by writing each one twice. Nothing here decides anything, so the shape is harmless - but this is what a function of this length with nothing in it looks like.";
  arguments_assert(arguments, 2);
  let r2 = app_reply_main_shortcuts_gl_r_te_base(
    root,
    languages_chosen_default,
  );
  let r_te_base = property_get(r2, "r_te_base");
  let r_ke_4 = property_get(r2, "r_ke_4");
  let r_pk_404 = property_get(r2, "r_pk_404");
  let r_pk_204 = property_get(r2, "r_pk_204");
  let r_pk_10_glory4 = property_get(r2, "r_pk_10_glory4");
  let r_pk_1_w4 = property_get(r2, "r_pk_1_w4");
  let r_pk_1_m4 = property_get(r2, "r_pk_1_m4");
  let r_pk_1_c4 = property_get(r2, "r_pk_1_c4");
  let r_pk_10_h4 = property_get(r2, "r_pk_10_h4");
  let r_pk_10_gh4 = property_get(r2, "r_pk_10_gh4");
  let r_pk_10_g4 = property_get(r2, "r_pk_10_g4");
  let r_pk_104 = property_get(r2, "r_pk_104");
  let r_pk_4 = property_get(r2, "r_pk_4");
  let gl4 = property_get(r2, "gl4");
  let r_ug_3 = property_get(r2, "r_ug_3");
  let r_ug_403 = property_get(r2, "r_ug_403");
  let r_ke_403 = property_get(r2, "r_ke_403");
  let r_default3 = property_get(r2, "r_default3");
  let r_te_2 = app_reply_main_shortcuts_shortcut_extend_count(r_te_base, 10);
  let bn2 = ebible_language_bengali();
  let r7 = {
    r_te_: r_te_2,
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
    bn: bn2,
  };
  let bn = property_get(r7, "bn");
  let r_ke_ = property_get(r7, "r_ke_");
  let r_pk_40 = property_get(r7, "r_pk_40");
  let r_pk_20 = property_get(r7, "r_pk_20");
  let r_pk_10_glory = property_get(r7, "r_pk_10_glory");
  let r_pk_1_w = property_get(r7, "r_pk_1_w");
  let r_pk_1_m = property_get(r7, "r_pk_1_m");
  let r_pk_1_c = property_get(r7, "r_pk_1_c");
  let r_pk_10_h = property_get(r7, "r_pk_10_h");
  let r_pk_10_gh = property_get(r7, "r_pk_10_gh");
  let r_pk_10_g = property_get(r7, "r_pk_10_g");
  let r_pk_10 = property_get(r7, "r_pk_10");
  let r_pk_ = property_get(r7, "r_pk_");
  let gl = property_get(r7, "gl");
  let r = {
    r6: r7,
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
