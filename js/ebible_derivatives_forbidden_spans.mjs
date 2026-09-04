import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_derivatives_forbidden_words_least } from "./ebible_derivatives_forbidden_words_least.mjs";
import { set_new } from "./set_new.mjs";
import { ebible_urdu_control_bible_folders } from "./ebible_urdu_control_bible_folders.mjs";
import { ebible_version_licence } from "./ebible_version_licence.mjs";
import { ebible_licence_derivatives_forbidden_is } from "./ebible_licence_derivatives_forbidden_is.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { ebible_version_spans_set } from "./ebible_version_spans_set.mjs";
import { set_add } from "./set_add.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { ebible_version_words_searchable } from "./ebible_version_words_searchable.mjs";
import { text_searchable_spans } from "./text_searchable_spans.mjs";
import { set_remove_multiple } from "./set_remove_multiple.mjs";
export async function ebible_derivatives_forbidden_spans() {
  "Every run of neighbouring words that belongs to a translation this repo may not carry and to no translation it may, gathered so that any file can be asked whether it holds one.";
  "Two things are done here that a caller must not be trusted to remember. Each translation is asked for its terms first, and the reading stops if a translation on the forbidden list turns out not to be forbidden at all - a list of names is a claim about licences, and a claim nobody checks is the thing this whole gate exists to stop being made.";
  "And the runs of the translation this repo is free to publish are taken back out again. A run standing in both is not evidence of anything: the free translation is here on purpose and its words are already in the repo lawfully, so leaving those runs in would name every honest file that quotes it. What is left is what could only have come from the frozen one.";
  arguments_assert(arguments, 0);
  let words_least = ebible_derivatives_forbidden_words_least();
  let spans = set_new();
  let bible_folders = ebible_urdu_control_bible_folders();
  for (let bible_folder of bible_folders) {
    let licence = await ebible_version_licence(bible_folder);
    let frozen = ebible_licence_derivatives_forbidden_is(licence);
    true_is_assert_json(frozen, {
      hint: "this translation is read as evidence on the understanding that its terms freeze its words, and its licence page does not say that - either the page has changed, or the wrong folder is being named as a control",
      bible_folder,
      licence,
    });
    let version_spans = await ebible_version_spans_set(
      bible_folder,
      words_least,
    );
    for (let span of version_spans) {
      set_add(spans, span);
    }
  }
  let permitted_folder = ebible_folder_urdu();
  let permitted_searchable =
    await ebible_version_words_searchable(permitted_folder);
  let permitted = text_searchable_spans(permitted_searchable, words_least);
  set_remove_multiple(spans, permitted);
  return spans;
}
