import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { emoji_search } from "../../../love/public/src/emoji_search.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { app_a_api } from "../../../love/public/src/app_a_api.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export async function app_a_function(context) {
  let { app_fn, root } = context;
  let f_name = storage_local_get(app_fn, "f_name_selected");
  html_clear(root);
  function lambda2() {
    app_generic_screen_set(context, app_a_home);
  }
  let text = emoji_search();
  let b = html_button(root, text, lambda2);
  app_a_control_style(b);
  app_karate_button_uncolored_style_assign(b);
  let function_name = fn_name("function_read");
  let code = await app_a_api(function_name, [f_name]);
  let ast = js_parse(code);
  let type = object_property_get(ast, "type");
  let lookup = {
    Program: function lambda3() {
      log(ast);
      let body = object_property_get(ast, "body");
      function lambda(b) {}
      each(body, lambda);
    },
    ["ImportDeclaration"]: function lambda4() {},
    ["ExportNamedDeclaration"]: () => {},
  };
  let value = object_property_get(lookup, type);
  value();
}
