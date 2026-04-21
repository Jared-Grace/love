import { app_reply_languages_chosen_default } from "../../../love/public/src/app_reply_languages_chosen_default.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get_invoke } from "../../../love/public/src/property_get_invoke.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { list_map_property_invoke } from "../../../love/public/src/list_map_property_invoke.mjs";
import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { text_combine_curried_right } from "../../../love/public/src/text_combine_curried_right.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { property_get_add } from "../../../love/public/src/property_get_add.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { app_reply_how_r_u } from "../../../love/public/src/app_reply_how_r_u.mjs";
import { app_reply_greetings } from "../../../love/public/src/app_reply_greetings.mjs";
import { ebible_language_kenya } from "../../../love/public/src/ebible_language_kenya.mjs";
import { ebible_language_luganda } from "../../../love/public/src/ebible_language_luganda.mjs";
import { ebible_language_punjabi } from "../../../love/public/src/ebible_language_punjabi.mjs";
import { ebible_language_urdu } from "../../../love/public/src/ebible_language_urdu.mjs";
import { app_reply_greetings_live } from "../../../love/public/src/app_reply_greetings_live.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
export function app_reply_main_shortcuts(
  root,
  languages_chosen,
  languages,
  update,
  buttons_languages,
) {
  let languages_chosen_default = app_reply_languages_chosen_default();
  html_p_text(root, "3. (Optional) Or, instead of 1 or 2, choose shortcuts:");
  let buttons_responses = null;
  let gl = app_reply_greetings_live();
  const ur = ebible_language_urdu();
  const pa = ebible_language_punjabi();
  let lug = ebible_language_luganda();
  let ke = ebible_language_kenya();
  let languages_pk = languages_default_concat([pa, ur]);
  const r_pk_base = {
    name: "PK",
    languages: languages_pk,
    count: 0,
    responses: [],
  };
  let r_pk_40 = shortcut_extend_count(r_pk_base, 40);
  let r_pk_1 = shortcut_extend_count(r_pk_base, 1);
  let r_pk_10 = shortcut_extend_count(r_pk_1, 10);
  let g = app_reply_greetings();
  let r_pk_10_g = shortcut_extend_response(r_pk_10, "g", g);
  let h = app_reply_how_r_u();
  let r_pk_10_gh = shortcut_extend_response(r_pk_10_g, "h", h);
  let r_pk_10_h = shortcut_extend_response(r_pk_10, "h", h);
  let languages_ug = languages_default_concat([lug]);
  const r_ug_base = {
    name: "UG",
    languages: languages_ug,
    count: 0,
    responses: [],
  };
  let r_ug_40 = shortcut_extend_count(r_ug_base, 40);
  let languages_ke = languages_default_concat([ke]);
  const r_ke_base = {
    name: "KE",
    languages: languages_ke,
    count: 0,
    responses: [],
  };
  let r_ke_10 = shortcut_extend_count(r_ke_base, 10);
  let r_ke_40 = shortcut_extend_count(r_ke_10, 40);
  const r_default = {
    name: "",
    languages: languages_chosen_default,
    count: 1,
    responses: [],
  };
  let r_yt = shortcut_extend_count(r_default, 10);
  let r_intro = shortcut_extend_response(r_default, "Intro", gl);
  let shortcuts = [
    r_intro,
    r_pk_1,
    r_pk_10,
    r_pk_10_g,
    r_pk_10_h,
    r_pk_10_gh,
    r_pk_40,
    r_ug_40,
    r_ke_10,
    r_ke_40,
  ];
  function languages_default_concat(right) {
    let concated2 = list_concat(languages_chosen_default, right);
    return concated2;
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
    let c2 = text_combine_curried_right(name_suffix);
    let value2 = property_transform(extended, "name", c2);
    return extended;
  }
  function lambda(s) {
    let name2 = property_get(s, "name");
    let languages2 = property_get(s, "languages");
    let count2 = property_get(s, "count");
    let responses2 = property_get(s, "responses");
    async function lambda5() {
      app_reply_languages_chosen_reset(languages_chosen, languages2, languages);
      await update(count2);
      list_map_property_invoke(buttons_languages, "update");
      function lambda7(r) {
        let b = list_find_property(buttons_responses, "text", r);
        property_get_invoke(b, "click");
      }
      each(responses2, lambda7);
    }
    let component2 = html_button(root, name2, lambda5);
  }
  each(shortcuts, lambda);
  return buttons_responses;
}
