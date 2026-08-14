import { app_shared_gear_languages_text } from "./app_shared_gear_languages_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_shared_bible_languages_choose } from "./app_shared_bible_languages_choose.mjs";
export function app_shared_bible_languages_gear(
  bar,
  content,
  languages_chosen,
) {
  let languages = ebible_languages();
  ("only offer the gear when the chapter can be shown in more than one language");
  let multiple = list_multiple_is(languages);
  if (multiple) {
    function on_gear() {
      "standing on its own, so back is a plain reload to the reading it came from";
      "and unnamed, because the pages that offer this gear are a search and a list of saved verses rather than a passage - there is a page to go back to but no reference to call it by, and naming one would name somewhere the reader was not";
      let unnamed = "";
      app_shared_bible_languages_choose(
        content,
        languages,
        languages_chosen,
        window_reload,
        unnamed,
      );
    }
    let text = app_shared_gear_languages_text();
    app_shared_button(bar, text, on_gear);
  }
}
