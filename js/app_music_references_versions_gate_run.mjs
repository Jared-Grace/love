import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_choices_licences } from "./ebible_versions_english_choices_licences.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { app_music_references_versions } from "./app_music_references_versions.mjs";
import { app_music_bible_default_version } from "./app_music_bible_default_version.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export async function app_music_references_versions_gate_run() {
  "QA gate: every passage the music page quotes from some translation other than its usual one names a translation we may lawfully ship, and calls it what that translation calls itself.";
  "THE NAME IS A SECOND COPY, AND THIS IS WHAT KEEPS IT HONEST. The chosen translation is written down twice on purpose - once as the folder its chapters sit in, and once as the name shown to a reader - so that labelling a verse costs the page no fetch. Two copies of one fact drift, and this one would drift silently: the page would show the King James under whatever word was typed beside it, and a wrong label on a right verse looks exactly like a right label.";
  "IT ALSO ASKS WHETHER THE TRANSLATION MAY BE QUOTED AT ALL. Choosing a wording is done by reading translations side by side, and that reading includes ones we may not ship - so the way a forbidden wording gets onto the page is somebody copying the folder name of the one that read best. There is nothing about a folder name that says which of the two it was.";
  "The usual translation is checked alongside the exceptions, because it is written the same way and is the one every other passage on the page is labelled with.";
  arguments_assert(arguments, 0);
  let licences = await ebible_versions_english_choices_licences();
  let usable = list_filter_property(licences, "commercial", true);
  let versions = app_music_references_versions();
  let usual = app_music_bible_default_version();
  let checked = list_concat(versions, [usual]);
  let wrong = [];
  for (let version of checked) {
    let bible_folder = property_get(version, "bible_folder");
    let name = property_get(version, "name");
    let record = list_find_property_or_null(
      usable,
      "bible_folder",
      bible_folder,
    );
    let unusable = null_is(record);
    if (unusable) {
      list_add(wrong, {
        bible_folder,
        name,
        fault:
          "this bible is not one of the complete English translations we may ship and earn from",
      });
      continue;
    }
    let called = property_get(record, "name");
    let agrees = equal(called, name);
    if (agrees) {
      continue;
    }
    list_add(wrong, {
      bible_folder,
      name,
      called,
      fault: "the name shown to a reader is not what this bible calls itself",
    });
  }
  list_empty_is_assert_json(wrong, {
    hint: text_combine_multiple([
      "each of these passages is quoted from a bible that either may not be shipped or is labelled with a name it does not answer to - the names come from ",
      fn_name("ebible_versions_english_choices_licences"),
      ", so copy the name written there",
    ]),
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    versions: list_size(checked),
    wrong: 0,
  };
  return r;
}
