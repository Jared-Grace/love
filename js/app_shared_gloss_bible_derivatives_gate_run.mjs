import { ebible_bible_folders_derivatives_allowed_assert } from "./ebible_bible_folders_derivatives_allowed_assert.mjs";
import { app_shared_gloss_bible_generate_generic } from "./app_shared_gloss_bible_generate_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_languages_derivatives_forbidden_bible_folders } from "./ebible_languages_derivatives_forbidden_bible_folders.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { text_empty } from "./text_empty.mjs";
import { throws_assert_json_async } from "./throws_assert_json_async.mjs";
import { throws_not_async } from "./throws_not_async.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function app_shared_gloss_bible_derivatives_gate_run() {
  arguments_assert(arguments, 0);
  ("Proves that a translation whose words may not be altered is turned away by the one door every gloss in this repo is written through, and that an ordinary translation still walks through it.");
  ("It asks the door rather than the check behind the door. A check nothing calls passes every time it is asked and protects nothing, and that is exactly the state this repo left the check in for as long as it existed - so what is worth proving is that the two are joined.");
  ("The refusal happens before any of the work does, so this costs a moment and asks nothing of the machine that writes a gloss.");
  ("A run where no shipped translation forbids a derivative proves nothing and says so, rather than passing quietly. There is no text to refuse, so the door was never knocked on.");
  let forbidden = await ebible_languages_derivatives_forbidden_bible_folders();
  let none = list_empty_is(forbidden);
  if (none) {
    let unasked = {
      checked: 0,
      refused: null,
      permitted: null,
    };
    return unasked;
  }
  let one = list_get(forbidden, 0);
  async function refuses() {
    let last = text_empty();
    await app_shared_gloss_bible_generate_generic(
      "Turkish",
      last,
      [one],
      "MRK",
      text_empty,
      "MRK01",
      text_empty,
      "English",
    );
  }
  await throws_assert_json_async(refuses, {
    hint: "the gloss door let a translation through whose words may not be altered - the check it is supposed to ask has come unwired",
    bible_folder: one,
  });
  let permitted = ebible_folder_english();
  async function permits() {
    await ebible_bible_folders_derivatives_allowed_assert([permitted]);
  }
  let walked = await throws_not_async(permits);
  true_is_assert_json(walked, {
    hint: "the check turned away a translation that allows a derivative, so it is refusing everything rather than refusing the right thing",
    bible_folder: permitted,
  });
  let r = {
    checked: list_size(forbidden),
    refused: one,
    permitted,
  };
  return r;
}
