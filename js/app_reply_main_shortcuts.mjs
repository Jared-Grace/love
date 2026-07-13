import { app_reply_choices_whatsapp } from "./app_reply_choices_whatsapp.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
import { app_reply_glory } from "./app_reply_glory.mjs";
import { ebible_language_arabic } from "./ebible_language_arabic.mjs";
import { ebible_language_bengali } from "./ebible_language_bengali.mjs";
import { app_reply_give } from "./app_reply_give.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
import { app_reply_called_why } from "./app_reply_called_why.mjs";
import { ebible_language_telugu } from "./ebible_language_telugu.mjs";
import { property_combine } from "./property_combine.mjs";
import { app_reply_languages_chosen_default } from "./app_reply_languages_chosen_default.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { each } from "./each.mjs";
import { property_get_invoke } from "./property_get_invoke.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { property_get } from "./property_get.mjs";
import { json_copy } from "./json_copy.mjs";
import { property_get_add } from "./property_get_add.mjs";
import { property_set } from "./property_set.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_reply_how_r_u } from "./app_reply_how_r_u.mjs";
import { app_reply_greetings } from "./app_reply_greetings.mjs";
import { ebible_language_kenya } from "./ebible_language_kenya.mjs";
import { ebible_language_luganda } from "./ebible_language_luganda.mjs";
import { ebible_language_punjabi } from "./ebible_language_punjabi.mjs";
import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
import { app_reply_greetings_live } from "./app_reply_greetings_live.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
export function app_reply_main_shortcuts(
  root,
  languages_chosen,
  languages,
  update,
  buttons_languages,
  buttons_responses,
) {
  let languages_chosen_default = app_reply_languages_chosen_default();
  app_shared_text_body(root, "3. (Optional) Or, instead of 1 or 2, choose shortcuts:");
  let gl = app_reply_greetings_live();
  let ur = ebible_language_urdu();
  let pa = ebible_language_punjabi();
  let lug = ebible_language_luganda();
  let ke = ebible_language_kenya();
  let te = ebible_language_telugu();
  let languages_pk = languages_default_concat([pa, ur]);
  let r_pk_base = {
    name: "PK",
    languages: languages_pk,
    count: 0,
    responses: [],
  };
  let r_pk_1 = shortcut_extend_count(r_pk_base, 1);
  let r_pk_10 = shortcut_extend_count(r_pk_base, 10);
  let g = app_reply_greetings();
  let r_pk_10_g = shortcut_extend_response(r_pk_10, "g", g);
  let h = app_reply_how_r_u();
  let r_pk_10_gh = shortcut_extend_response(r_pk_10_g, "h", h);
  let r_pk_10_h = shortcut_extend_response(r_pk_10, "h", h);
  let c = app_reply_called_why();
  let r_pk_1_c = shortcut_extend_response(r_pk_1, "c", c);
  let m = app_reply_give();
  let r_pk_1_m = shortcut_extend_response(r_pk_1, "m", m);
  let w = app_reply_choices_whatsapp();
  let r_pk_1_w = shortcut_extend_response(r_pk_1, "w", w);
  let glory = app_reply_glory();
  let v = emoji_fire();
  let r_pk_10_glory = shortcut_extend_response(r_pk_10, v, glory);
  let r_pk_20 = shortcut_extend_count(r_pk_base, 20);
  let r_pk_40 = shortcut_extend_count(r_pk_base, 40);
  let languages_ug = languages_default_concat_single(lug);
  let r_ug_base = {
    name: "UG",
    languages: languages_ug,
    count: 0,
    responses: [],
  };
  let r_ug_10 = shortcut_extend_count(r_ug_base, 10);
  let r_ug_40 = shortcut_extend_count(r_ug_base, 40);
  let languages_ke = languages_default_concat_single(ke);
  let r_ke_base = {
    name: "KE",
    languages: languages_ke,
    count: 0,
    responses: [],
  };
  let r_ke_10 = shortcut_extend_count(r_ke_base, 10);
  let r_ke_40 = shortcut_extend_count(r_ke_base, 40);
  let r_default = {
    name: "",
    languages: languages_chosen_default,
    count: 1,
    responses: [],
  };
  let r_te_base = {
    name: "TE",
    languages: languages_default_concat_single(te),
    count: 0,
    responses: [],
  };
  let r_te_10 = shortcut_extend_count(r_te_base, 10);
  let bn = ebible_language_bengali();
  let r_bn_base = {
    name: "BN",
    languages: languages_default_concat_single(bn),
    count: 0,
    responses: [],
  };
  let r_bn_10 = shortcut_extend_count(r_bn_base, 10);
  let ar = ebible_language_arabic();
  let r_ar_base = {
    name: "AR",
    languages: languages_default_concat_single(ar),
    count: 0,
    responses: [],
  };
  let r_ar_10 = shortcut_extend_count(r_ar_base, 10);
  let r_yt = shortcut_extend_count(r_default, 2);
  r_yt = shortcut_extend(r_yt, "yt");
  let en_l = ebible_language_english();
  let r_en_40 = {
    name: "en40",
    languages: [en_l],
    count: 40,
    responses: [],
  };
  let r_intro = shortcut_extend_response(r_default, "intro", gl);
  let shortcuts = [
    r_intro,
    r_pk_1,
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
    r_ug_10,
    r_ug_40,
    r_ke_10,
    r_ke_40,
    r_te_10,
    r_bn_10,
    r_ar_10,
    r_en_40,
    r_yt,
  ];
  function languages_default_concat_single(ke) {
    let r2 = languages_default_concat([ke]);
    return r2;
  }
  function languages_default_concat(right) {
    let concated = list_concat(languages_chosen_default, right);
    return concated;
  }
  function shortcut_extend_count(base, count) {
    let extended = shortcut_extend(base, count);
    property_set(extended, "count", count);
    return extended;
  }
  function shortcut_extend_response(base, name_suffix, r) {
    let extended = shortcut_extend(base, name_suffix);
    property_get_add(extended, "responses", r);
    return extended;
  }
  function shortcut_extend(base, name_suffix) {
    let extended = json_copy(base);
    property_combine(extended, "name", name_suffix);
    return extended;
  }
  function shortcut_each(s) {
    let name = property_get(s, "name");
    let languages2 = property_get(s, "languages");
    let count2 = property_get(s, "count");
    let responses = property_get(s, "responses");
    async function lambda5() {
      app_reply_languages_chosen_reset(languages_chosen, languages2, languages);
      await update(count2);
      list_map_property_invoke(buttons_languages, "update");
      function lambda7(r) {
        let b = list_find_property(buttons_responses, "text", r);
        property_get_invoke(b, "click");
      }
      each(responses, lambda7);
    }
    let component = app_replace_button(root, name, lambda5);
  }
  each(shortcuts, shortcut_each);
}
