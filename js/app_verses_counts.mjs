import { app_shared_bar_center_content_pad } from "./app_shared_bar_center_content_pad.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_languages_chosen_default } from "./app_shared_bible_languages_chosen_default.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { app_shared_language_codes_saved_or } from "./app_shared_language_codes_saved_or.mjs";
import { app_shared_bible_hash_to_languages_chosen_or } from "./app_shared_bible_hash_to_languages_chosen_or.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { uplifting_references_get } from "./uplifting_references_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_verses_order_standalone_first } from "./app_verses_order_standalone_first.mjs";
import { app_shared_bar_content_root } from "./app_shared_bar_content_root.mjs";
import { app_shared_bible_languages_gear } from "./app_shared_bible_languages_gear.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_bible_verses_counts } from "./app_shared_bible_verses_counts.mjs";
export async function app_verses_counts(r, hash) {
  arguments_assert(arguments, 2);
  let root = property_get(r, "root");
  let languages_chosen_default = app_shared_bible_languages_chosen_default();
  let property_name = language_code_key();
  let default_codes = list_map_property(
    languages_chosen_default,
    property_name,
  );
  let default_l = list_join_plus(default_codes);
  let remembered_l = app_shared_language_codes_saved_or(default_l);
  ("a url hash wins over the remembered choice, so a shared link still opens in the languages it names");
  let language_codes = app_shared_bible_hash_to_languages_chosen_or(
    hash,
    remembered_l,
  );
  let languages_chosen = ebible_languages_from_codes(language_codes);
  let verse_groups = [];
  let verse_count = 1;
  let offline_notified = false;
  let apply_seq = 0;
  let chosen_references = [];
  ("the list of which verses to draw from lives in firebase as data, not baked into this app, so it can change without a rebuild; until it loads (or if offline with a cold cache) order stays empty and a returning reader still sees their last saved draw");
  let order = [];
  let references_source = await uplifting_references_get();
  let have_references = null_not_is(references_source);
  if (have_references) {
    order = list_copy(references_source);
    list_shuffle(order);
    app_verses_order_standalone_first(order);
  }
  let bc = app_shared_bar_content_root(root);
  app_shared_bar_center_content_pad(bc);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  app_shared_bible_languages_gear(bar, content, language_codes);
  app_shared_text_body(
    content,
    "1. Tap the ⚙️ button above to choose which language or languages your verses appear in.",
  );
  let card = app_shared_container_blue(content);
  app_shared_text_body(card, "2. How many Bible verses would you like?");
  let counts = app_shared_bible_verses_counts();
  let r2 = {
    languages_chosen,
    verse_groups,
    verse_count,
    offline_notified,
    apply_seq,
    chosen_references,
    order,
    content,
    card,
    counts,
  };
  return r2;
}
