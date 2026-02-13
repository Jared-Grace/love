import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { app_prefix_without } from "../../../love/public/src/app_prefix_without.mjs";
import { window_open_app_curried_right } from "../../../love/public/src/window_open_app_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_bible } from "../../../love/public/src/app_bible.mjs";
import { app_reply } from "../../../love/public/src/app_reply.mjs";
import { app_designs_universal } from "../../../love/public/src/app_designs_universal.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { app_supper } from "../../../love/public/src/app_supper.mjs";
import { app_ceb_bible } from "../../../love/public/src/app_ceb_bible.mjs";
import { app_original_bible } from "../../../love/public/src/app_original_bible.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_index_main(context) {
  let root = property_get(context, "root");
  let fns = [
    {
      app_fn: app_reply,
    },
    {
      app_fn: app_bible,
    },
    {
      app_fn: app_original_bible,
    },
    {
      app_fn: app_ceb_bible,
    },
    {
      app_fn: app_supper,
    },
    {
      app_fn: app_replace,
    },
    {
      app_fn: app_designs_universal,
    },
  ];
  let hash = {};
  let lambda = window_open_app_curried_right(hash);
  function lambda3(a) {
    let app_fn2 = property_get(a, "app_fn");
    let text = property_get(a, "text");
    let without = app_prefix_without(fn);
    function lambda2() {
      lambda(fn);
    }
    let component = html_button_wide(root, without, lambda2);
  }
  each(fns, lambda3);
}
