import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { prayer_lead_all_creation_verbs } from "./prayer_lead_all_creation_verbs.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { prayer_lead_all_creation } from "./prayer_lead_all_creation.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { property_get } from "./property_get.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { list_add } from "./list_add.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function prayer_lead_all_creation_gate_run() {
  "The autopray card promises a page that prays over every verse of the Bible in turn, asking that all creation would hear, believe, obey, enjoy and proclaim the word of God. The five are spelled out twice over - once in the prayer the page shows and once in the sentence a stranger reads before opening it - so either could be reworded and leave the other saying something the app no longer does. This asks both the same way, against the one named list of the five, and then reads what the page really imports, because a prayer that is worded correctly promises nothing if the page has stopped showing it. It needs no Bible and no network, which is the whole reason it can be a gate.";
  arguments_assert(arguments, 0);
  let app_name = "autopray";
  let verbs = prayer_lead_all_creation_verbs();
  let s = prayer_lead_all_creation();
  let petition = text_lower_to(s);
  let s2 = app_shared_description(app_name);
  let card = text_lower_to(s2);
  let wrong = [];
  let subjects = [
    {
      said_about: "the prayer the page shows",
      said: petition,
    },
    {
      said_about: "the sentence the app is described by",
      said: card,
    },
  ];
  for (let subject of subjects) {
    let said_about = property_get(subject, "said_about");
    let said = property_get(subject, "said");
    ("each verb has to come after the one before it, so a reordering is caught and not only a dropped word");
    let after = -1;
    for (let verb of verbs) {
      let at = text_index_of_try(said, verb);
      if (less_than(at, 0)) {
        list_add(wrong, said_about + " does not ask that creation " + verb);
        continue;
      }
      if (less_than_equal(at, after)) {
        list_add(
          wrong,
          said_about +
            " asks that creation " +
            verb +
            " out of the order the prayer says the five in",
        );
      }
      after = at;
    }
    for (let phrase of ["all creation", "the word of god"]) {
      if (text_includes_not(said, phrase)) {
        list_add(wrong, said_about + " no longer says " + phrase);
      }
    }
  }
  ("the card alone promises the walk, so it alone is asked for it");
  if (text_includes_not(card, "every verse")) {
    list_add(
      wrong,
      "the sentence the app is described by no longer promises every verse",
    );
  }
  ("a right answer proves nothing if nobody asks for it any more");
  let reaches = [
    {
      importer: fn_name("app_autopray"),
      imported: fn_name("app_autopray_verse_show"),
    },
    {
      importer: fn_name("app_autopray"),
      imported: fn_name("ebible_version_chapters_all_download"),
    },
    {
      importer: fn_name("app_autopray_verse_show"),
      imported: fn_name("prayer_lead_all_creation"),
    },
    {
      importer: fn_name("autopray"),
      imported: fn_name("prayer_lead_all_creation"),
    },
  ];
  for (let reach of reaches) {
    let importer = property_get(reach, "importer");
    let imported = property_get(reach, "imported");
    let imports = await function_imports(importer);
    if (list_includes_not(imports, imported)) {
      list_add(wrong, importer + " no longer reads " + imported);
    }
  }
  list_empty_is_assert_json(wrong, {
    hint: "the autopray card promises five things prayed for all creation over every verse of the Bible - say the same five, in the same order, in the prayer and in the card, and leave the page reading them",
    wrong,
  });
  let v = {
    app_name,
    verbs: list_size(verbs),
    subjects: list_size(subjects),
    reaches: list_size(reaches),
  };
  return v;
}
