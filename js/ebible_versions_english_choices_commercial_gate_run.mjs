import { ebible_versions_english_full_web_family_not } from "./ebible_versions_english_full_web_family_not.mjs";
import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_versions_english_choices_upload } from "./ebible_versions_english_choices_upload.mjs";
import { ebible_bible_folders_commercial_assert } from "./ebible_bible_folders_commercial_assert.mjs";
import { function_dependency_path } from "./function_dependency_path.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { throws_not_async } from "./throws_not_async.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get } from "./list_get.mjs";
import { throws_assert_json_async } from "./throws_assert_json_async.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_versions_english_choices_commercial_gate_run() {
  "Proves that a translation this repo may not ship is turned away from the list of English wordings a reader is offered, and that an ordinary translation still walks through.";
  "It proves the two halves a guard is made of. The check itself refuses the right text and keeps the right text, and the door that hands the list to readers actually reaches the check - a check nothing calls passes every time it is asked and protects nothing.";
  "English is the one language this app offers as many translations rather than one, so it is the one language the per-language licence question never covered. Five texts on terms that forbid shipping reached readers that way before this gate existed.";
  "A run where every complete English translation on this disk is shippable proves nothing about the refusing half and says so, rather than passing quietly.";
  let all = await ebible_versions_english_full_web_family_not();
  let offered = await ebible_versions_english_choices();
  function refused_is(bible_folder) {
    let missing = list_includes_not(offered, bible_folder);
    return missing;
  }
  let refused = list_filter(all, refused_is);
  let door = ebible_versions_english_choices_upload.name;
  let check = ebible_bible_folders_commercial_assert.name;
  let path = await function_dependency_path(door, check);
  let wired = null_not_is(path);
  true_is_assert_json(wired, {
    hint: "the door that hands the English wordings to readers no longer reaches the check that refuses a translation this repo may not ship - rewire it, or the list goes out unasked",
    door,
    check,
  });
  let permitted = ebible_folder_english();
  async function permits() {
    await ebible_bible_folders_commercial_assert([permitted]);
  }
  let walked = await throws_not_async(permits);
  true_is_assert_json(walked, {
    hint: "the check turned away a translation this repo is free to ship, so it is refusing everything rather than refusing the right thing",
    bible_folder: permitted,
  });
  let none = list_empty_is(refused);
  if (none) {
    let unasked = {
      checked: 0,
      refused: null,
      permitted,
    };
    return unasked;
  }
  let one = list_get(refused, 0);
  async function refuses() {
    await ebible_bible_folders_commercial_assert([one]);
  }
  await throws_assert_json_async(refuses, {
    hint: "the check let through a translation this repo may not ship and earn from - it has come unwired from the terms it reads",
    bible_folder: one,
  });
  let r = {
    checked: list_size(refused),
    refused: one,
    permitted,
  };
  return r;
}
