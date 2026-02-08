import { counter } from "../../../love/public/src/counter.mjs";
import { html_display_none_or_inline } from "../../../love/public/src/html_display_none_or_inline.mjs";
import { html_text_get } from "../../../love/public/src/html_text_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
export function app_reply_buttons_refresh(typed_get, chosens, buttons) {
  let v4 = function lambda10() {
    function lambda(c) {
      function lambda2(item) {
        let text = html_text_get(item);
        let letters = text_letters_only(text);
        let lower = string_lower_to(letters);
        let prefix = typed_get();
        let sw = string_starts_with(lower, prefix);
        let includes = list_includes(chosens, item);
        const hidden = includes || not(sw);
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
  return v4;
}
