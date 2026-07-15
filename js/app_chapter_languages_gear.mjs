import { emoji_gear } from "./emoji_gear.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_chapter_languages_choose } from "./app_chapter_languages_choose.mjs";
export function app_chapter_languages_gear(bar, content, languages_chosen) {
  let languages = ebible_languages();
  ("only offer the gear when the chapter can be shown in more than one language");
  let multiple = list_multiple_is(languages);
  if (multiple) {
    function on_gear() {
      app_chapter_languages_choose(content, languages, languages_chosen);
    }
    app_replace_button(bar, emoji_gear(), on_gear);
  }
}
