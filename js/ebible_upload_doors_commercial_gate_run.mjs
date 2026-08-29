import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_bible_folders_commercial_assert } from "./ebible_bible_folders_commercial_assert.mjs";
import { ebible_bible_folder_commercial_assert } from "./ebible_bible_folder_commercial_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_names_reaching } from "./function_names_reaching.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { ebible_commercial_check_permits_assert } from "./ebible_commercial_check_permits_assert.mjs";
import { ebible_versions_english_refused } from "./ebible_versions_english_refused.mjs";
import { ebible_commercial_check_refuses_assert } from "./ebible_commercial_check_refuses_assert.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_upload_doors_commercial_gate_run() {
  "Proves that every translation the sweeps publish is one this repo is free to ship, and that each of the four doors a translation's text leaves by still asks that question of the folder it was handed.";
  "Four doors rather than one because the callers do not funnel: the wholesale sweep goes through the version door, and the fill-in-what-is-missing sweep calls the chapters door straight, so a guard on either one alone leaves the other open. Everything below these four has exactly one caller each, which is what makes four of them a cover rather than a sample.";
  "The set is read from the languages the reader is offered rather than written down here, so a language added later is asked the question without anybody coming back to this file.";
  "A door added later will not be on this list and nothing will say so. The way to find one is to ask who calls the sending seams and keep only those handed a folder - the readers and the address builders call them too, which is why the list is named here rather than derived.";
  "THE CHECK IS NAMED INSIDE THE HINT AND NOT BESIDE IT. The doors thrown alongside it are the ones actually at fault, and naming them is the point; the check is what they stopped reaching, and it did nothing wrong. A red gate's words are read back afterwards for the function names in them, and an app whose bundle carries one of those names is held out of its deployment - so the check, which every one of these apps ships, would hold all of them at once for a fault belonging to a door. The hint is dropped before the names are read.";
  "The two halves a refusing check is made of - that it lets an ordinary translation through, and that it turns away one this repo may not ship - are proved next door, because the gate over the English wordings proves the very same two things about the very same check at a different width.";
  let offered = ebible_languages_without_original_bible_folders();
  await ebible_bible_folders_commercial_assert(offered);
  let check = ebible_bible_folder_commercial_assert.name;
  let f_name = fn_name("ebible_verses_upload");
  let f_name2 = fn_name("ebible_chapters_upload");
  let f_name3 = fn_name("ebible_version_books_upload");
  let f_name4 = fn_name("ebible_offline_version_upload");
  let doors = [f_name, f_name2, f_name3, f_name4];
  let wired = await function_names_reaching(doors, check);
  function unwired_is(door) {
    let missing = list_includes_not(wired, door);
    return missing;
  }
  let unwired = list_filter(doors, unwired_is);
  let unwired_hint = text_combine_multiple([
    "these doors publish a translation's text and no longer reach the check that refuses a translation this repo may not ship (",
    check,
    ") - rewire them, or the text goes out unasked",
  ]);
  list_empty_is_assert_json(unwired, {
    hint: unwired_hint,
  });
  await ebible_commercial_check_permits_assert(
    ebible_bible_folder_commercial_assert,
  );
  let refused = await ebible_versions_english_refused();
  let one = await ebible_commercial_check_refuses_assert(
    refused,
    ebible_bible_folder_commercial_assert,
    "the check let through a translation this repo may not ship and earn from, so a door asking it is protecting nothing",
  );
  let r = {
    offered: list_size(offered),
    doors: list_size(doors),
    refused: one,
  };
  return r;
}
