import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  "WHICH TRANSLATIONS MAY BE SHIPPED IS ASKED OF BOTH SHELVES. It used to ask only eBible, which was right while that was the only shelf and became silently wrong the moment a second one was added: a wording chosen out of a comparison that offered both would be refused here as unshippable, and the refusal would blame the wording rather than the question.";
  "AN EXCEPTION IS ALSO ASKED WHETHER ANY SONG RESTS ON THAT PASSAGE AT ALL. The choice is written against the passage as a person writes one, so a space on the end or a shortened book name makes an entry that matches nothing - and matching nothing is exactly what a passage with no exception does, so the reader is shown the usual translation and the entry sits there looking decided. The whole reason an exception exists is that the usual wording is not the line being sung, so this failure serves the reader the one wording that was rejected.";
  "AND WHETHER THE CHOSEN TRANSLATION CARRIES THE PASSAGE. Two of the translations on offer are published a book at a time and hold fifty-six of the sixty-six, so a bible can be shippable, correctly named, and still have nothing to say at this passage. Nothing downstream raises on that: the words come back empty and the page draws that passage with none, among ninety-nine that have theirs.";
  "The two questions above are asked of the exceptions and not of the usual translation, because the usual one answers for every passage on the page and asking it about all hundred here would be building the page rather than checking it - it is a whole bible on the shelf where the exceptions are one verse each.";
  arguments_assert(arguments, 0);
  let usable = await bible_versions_english_choices_usable();
  let versions = app_music_references_versions();
  let usual = app_music_bible_default_version();
  let rested_on = app_music_references_all();
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
  for (let version of versions) {
    let reference = property_get(version, "reference");
    let bible_folder = property_get(version, "bible_folder");
    let rests = list_includes(rested_on, reference);
    if (rests) {
      let text = await ebible_folder_reference_text(bible_folder, reference);
      let wordless = null_is(text);
      if (wordless) {
        list_add(wrong, {
          reference,
          bible_folder,
          fault:
            "this bible hands over no words at this passage, so the page would draw it empty",
        });
      }
      continue;
    }
    list_add(wrong, {
      reference,
      bible_folder,
      fault:
        "no song on this page rests on this passage, so this choice is never reached and the usual translation is shown instead",
    });
  }
  let f_name = fn_name("bible_versions_english_choices_usable");
  list_empty_is_assert_json(wrong, {
    hint: text_combine_multiple([
      "each of these choices fails in the way its own fault line says - unshippable bible, a name it does not answer to, a passage no song rests on, or a bible with no words there - and every one of them reaches a reader as an ordinary looking page; the folders and the names both come from ",
      f_name,
      ", so copy them from there rather than typing them",
    ]),
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    versions: list_size(checked),
    exceptions: list_size(versions),
    wrong: 0,
  };
  return r;
}
