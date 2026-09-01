import { app_reply_cards_handlers_draw } from "./app_reply_cards_handlers_draw.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { list_filter_text_includes_not } from "./list_filter_text_includes_not.mjs";
import { ebible_versions_english_choices_browser } from "./ebible_versions_english_choices_browser.mjs";
import { app_shared_bible_languages_chosen_default } from "./app_shared_bible_languages_chosen_default.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { app_reply_languages_prompt } from "./app_reply_languages_prompt.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_initialize } from "./app_reply_initialize.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
export async function app_reply(context) {
  app_shared_app_fn_set(context, app_reply);
  let r = await app_reply_initialize(context);
  let choices = property_get(r, "choices");
  let languages = property_get(r, "languages");
  await ebible_versions_english_choices_browser();
  let languages_chosen_default = app_shared_bible_languages_chosen_default();
  let languages_chosen_held = {
    languages_chosen: [],
  };
  languages_chosen_reset();
  let root = property_get(r, "root");
  property_get(r, "en");
  ("the legacy reply app keeps the authored list in its own bundle; the verses app, by contrast, now fetches the list from firebase as data");
  let encouragement = bible_verses_uplifting();
  let encouragement_singles = list_filter_text_includes_not(encouragement, "-");
  let bible_texts = [];
  let responses = [];
  let responses_buttons = [];
  let typed_held = {
    typed: null,
  };
  typed_reset();
  let card = app_shared_container_blue(root);
  app_reply_languages_prompt(card);
  function languages_chosen_reset() {
    let languages_chosen2 = property_get(
      languages_chosen_held,
      "languages_chosen",
    );
    app_reply_languages_chosen_reset(
      languages_chosen2,
      languages_chosen_default,
      languages,
    );
  }
  app_reply_cards_handlers_draw(
    languages_chosen_held,
    languages_chosen_reset,
    languages,
    card,
    root,
    bible_texts,
    responses,
    responses_buttons,
    encouragement,
    encouragement_singles,
    typed_held,
    typed_reset,
    choices,
  );
  function typed_reset() {
    property_set(typed_held, "typed", "");
  }
  app_shared_footer(root);
}
