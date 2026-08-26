import { fn_name } from "./fn_name.mjs";
import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_bible_folders_commercial_assert } from "./ebible_bible_folders_commercial_assert.mjs";
import { ebible_bible_folder_commercial_assert } from "./ebible_bible_folder_commercial_assert.mjs";
import { function_names_reaching } from "./function_names_reaching.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { throws_not_async } from "./throws_not_async.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { ebible_versions_english_full_web_family_not } from "./ebible_versions_english_full_web_family_not.mjs";
import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { throws_assert_json_async } from "./throws_assert_json_async.mjs";
export async function ebible_upload_doors_commercial_gate_run() {
  "Proves that every translation the sweeps publish is one this repo is free to ship, and that each of the four doors a translation's text leaves by still asks that question of the folder it was handed.";
  "Four doors rather than one because the callers do not funnel: the wholesale sweep goes through the version door, and the fill-in-what-is-missing sweep calls the chapters door straight, so a guard on either one alone leaves the other open. Everything below these four has exactly one caller each, which is what makes four of them a cover rather than a sample.";
  "The set is read from the languages the reader is offered rather than written down here, so a language added later is asked the question without anybody coming back to this file.";
  "A door added later will not be on this list and nothing will say so. The way to find one is to ask who calls the sending seams and keep only those handed a folder - the readers and the address builders call them too, which is why the list is named here rather than derived.";
  let offered = ebible_languages_without_original_bible_folders();
  await ebible_bible_folders_commercial_assert(offered);
  let check = ebible_bible_folder_commercial_assert.name;
  let doors = [
    fn_name("ebible_verses_upload"),
    fn_name("ebible_chapters_upload"),
    fn_name("ebible_version_books_upload"),
    fn_name("ebible_offline_version_upload"),
  ];
  let wired = await function_names_reaching(doors, check);
  function unwired_is(door) {
    let missing = list_includes_not(wired, door);
    return missing;
  }
  let unwired = list_filter(doors, unwired_is);
  list_empty_is_assert_json(unwired, {
    hint: "these doors publish a translation's text and no longer reach the check that refuses a translation this repo may not ship - rewire them, or the text goes out unasked",
    check,
  });
  let permitted = ebible_folder_english();
  async function permits() {
    await ebible_bible_folder_commercial_assert(permitted);
  }
  let walked = await throws_not_async(permits);
  true_is_assert_json(walked, {
    hint: "the check turned away a translation this repo is free to ship, so it is refusing everything rather than refusing the right thing",
    bible_folder: permitted,
  });
  let all = await ebible_versions_english_full_web_family_not();
  let choices = await ebible_versions_english_choices();
  function refused_is(bible_folder) {
    let missing = list_includes_not(choices, bible_folder);
    return missing;
  }
  let refused = list_filter(all, refused_is);
  let none = list_empty_is(refused);
  if (none) {
    let unasked = {
      offered: list_size(offered),
      doors: list_size(doors),
      refused: null,
    };
    return unasked;
  }
  let one = list_get(refused, 0);
  async function refuses() {
    await ebible_bible_folder_commercial_assert(one);
  }
  await throws_assert_json_async(refuses, {
    hint: "the check let through a translation this repo may not ship and earn from, so a door asking it is protecting nothing",
    bible_folder: one,
  });
  let r = {
    offered: list_size(offered),
    doors: list_size(doors),
    refused: one,
  };
  return r;
}
