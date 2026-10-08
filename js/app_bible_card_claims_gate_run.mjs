import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { app_shared_bible_languages_chosen_default } from "./app_shared_bible_languages_chosen_default.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
import { app_shared_bible_mode_known_is } from "./app_shared_bible_mode_known_is.mjs";
import { app_bible_screens } from "./app_bible_screens.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { app_shared_bible_offline } from "./app_shared_bible_offline.mjs";
import { function_imports } from "./function_imports.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_bible_card_claims_gate_run() {
  "The bible card makes three promises to somebody who has not opened the app yet: hundreds of languages, two of them read together verse by verse, and a copy kept on their own device so it opens with no connection. Each one is a thing the repo can be asked, and until now nothing asked. The languages are counted, the pair the page opens with is counted and then sent through a link and read back, because a code naming no language is dropped on the way in and two would quietly become one. The screen that keeps a copy is looked for among the screens this app really offers, and then asked whether it still reaches the saving. It needs no Bible and no network, which is the whole reason it can be a gate.";
  arguments_assert(arguments, 0);
  let app_name = "bible";
  let s = app_shared_description(app_name);
  let card = text_lower_to(s);
  let wrong = [];
  let languages = ebible_languages();
  let offered = list_size(languages);
  ("two hundred is the fewest the word hundreds can honestly mean");
  if (less_than(offered, 200)) {
    list_add(
      wrong,
      "the card promises hundreds of languages and " + offered + " are offered",
    );
  }
  if (text_includes_not(card, "hundreds of languages")) {
    list_add(wrong, "the card no longer promises hundreds of languages");
  }
  ("the pair the page opens with, which is what two of them together means for a reader who picks nothing");
  let chosen = app_shared_bible_languages_chosen_default();
  let together = list_size(chosen);
  if (not_equal(together, 2)) {
    list_add(
      wrong,
      "the card promises two languages together and the page opens with " +
        together,
    );
  }
  ("and the pair has to survive a link, because a code naming no language is dropped on the way back in and two would silently become one");
  let property_name = language_code_key();
  let codes = list_map_property(chosen, property_name);
  let read_back = ebible_languages_from_codes(codes);
  let carried = list_size(read_back);
  if (not_equal(carried, together)) {
    list_add(
      wrong,
      "a link naming the two languages the page opens with reads back as " +
        carried +
        " of them",
    );
  }
  ("verse by verse is one of the two ways a bible page may be read, and the only one a link may name");
  let verse = app_shared_bible_mode_verse();
  if (text_includes_not(card, "verse by verse")) {
    list_add(wrong, "the card no longer promises reading verse by verse");
  }
  let left = app_shared_bible_mode_known_is(verse);
  if (equal(left, false)) {
    list_add(
      wrong,
      "the reader no longer knows the verse by verse way of reading",
    );
  }
  ("a copy on your own device needs the screen that saves one to be a screen this app really offers");
  let screens = app_bible_screens();
  if (list_includes_not(screens, app_shared_bible_offline)) {
    list_add(
      wrong,
      "the bible app offers no screen for keeping a copy on your own device",
    );
  }
  ("and that screen has to still reach the saving, or it is a screen that promises and does nothing");
  let saving = await function_imports(fn_name("app_shared_bible_offline_body"));
  if (list_includes_not(saving, fn_name("app_shared_bible_offline_save_all"))) {
    list_add(wrong, "the screen for keeping a copy no longer saves one");
  }
  list_empty_is_assert_json(wrong, {
    hint: "the bible card promises hundreds of languages, two of them together verse by verse, and a copy kept on the reader's own device - leave all three true or say something else on the card",
    wrong,
  });
  let v = {
    app_name,
    languages: offered,
    together,
    screens: list_size(screens),
  };
  return v;
}
