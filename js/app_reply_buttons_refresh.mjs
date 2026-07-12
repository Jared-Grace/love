import { counter } from "./counter.mjs";
import { html_display_none_or_inline } from "./html_display_none_or_inline.mjs";
import { html_text_get } from "./html_text_get.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
export function app_reply_buttons_refresh(typed_get, chosens, buttons) {
  let v = function lambda10() {
    function lambda(c) {
      function lambda2(item) {
        let text = html_text_get(item);
        let letters = text_letters_only(text);
        let lower = text_lower_to(letters);
        let prefix = typed_get();
        let sw = text_starts_with(lower, prefix);
        let includes = list_includes(chosens, item);
        let hidden = includes || not(sw);
        html_display_none_or_inline(item, hidden);
        if (not(hidden)) {
          c();
        }
      }
      each(buttons, lambda2);
    }
    let visible_count = counter(lambda);
    return visible_count;
  };
  return v;
}
