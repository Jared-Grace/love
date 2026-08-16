import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { subtract } from "./subtract.mjs";
import { app_g_verify_view_draft_save } from "./app_g_verify_view_draft_save.mjs";
import { html_on } from "./html_on.mjs";
import { invoke_now_and_later } from "./invoke_now_and_later.mjs";
export function app_g_verify_view_autosize_new(
  native_sizing,
  suggest_area,
  draft_key,
  base_key,
  value,
) {
  arguments_assert(arguments, 5);
  function autosize() {
    if (native_sizing) {
      return;
    }
    ("suggest_area is a COMPONENT wrapper, not the DOM element — the style setter unwraps it internally, but layout MEASUREMENTS (scrollHeight, offsetHeight, clientHeight) must be read off the real element, else they are undefined and the height math is NaN, silently ignored, so the box stays at its min-height floor. Under box-sizing border-box, height=scrollHeight lands one border short, so add the border difference (measured while overflow-y is hidden) to fit exactly");
    let element = html_component_element_get(suggest_area);
    html_style_set(suggest_area, "height", "auto");
    let content = element.scrollHeight;
    let chrome = subtract(element.offsetHeight, element.clientHeight);
    let h = content + chrome;
    html_style_set(suggest_area, "height", h + "px");
  }
  function on_suggest_input() {
    app_g_verify_view_draft_save(suggest_area, draft_key, base_key, value);
    autosize();
  }
  html_on(suggest_area, "input", on_suggest_input);
  ("fit the content now and again after this tick; then once more after the serif font loads, whose metrics change the height");
  invoke_now_and_later(autosize);
  document.fonts.ready.then(autosize);
  ("a Reset control that restores the box to the CURRENT saved lines (value4) and drops any in-progress draft — so the reviewer can start over from exactly what Claude has now, having edited the box away from it");
  return autosize;
}
