import { ebible_versions_english_refused } from "./ebible_versions_english_refused.mjs";
import { fn_name } from "./fn_name.mjs";
import { ebible_bible_folders_commercial_assert } from "./ebible_bible_folders_commercial_assert.mjs";
import { function_dependency_path } from "./function_dependency_path.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { ebible_commercial_check_permits_assert } from "./ebible_commercial_check_permits_assert.mjs";
import { ebible_commercial_check_refuses_assert } from "./ebible_commercial_check_refuses_assert.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_versions_english_choices_commercial_gate_run() {
  "Proves that a translation this repo may not ship is turned away from the list of English wordings a reader is offered, and that an ordinary translation still walks through.";
  "It proves the two halves a guard is made of. The check itself refuses the right text and keeps the right text, and the door that hands the list to readers actually reaches the check - a check nothing calls passes every time it is asked and protects nothing.";
  "English is the one language this app offers as many translations rather than one, so it is the one language the per-language licence question never covered. Five texts on terms that forbid shipping reached readers that way before this gate existed.";
  "A run where every complete English translation on this disk is shippable proves nothing about the refusing half and says so, rather than passing quietly.";
  "THE DOOR AND THE CHECK ARE NAMED INSIDE THE HINT AND NOT BESIDE IT. Both are the subject of this gate rather than the fault in it - the complaint is that the wire between them has gone, and neither end did anything wrong. A red gate's words are read back afterwards for the function names in them, and an app whose bundle carries one of those names is held out of its deployment, so a name standing outside the hint is an accusation whether or not it was meant as one. The check is shared, so accusing it holds every app at once. The hint is dropped before the names are read, which is why the whole sentence goes there.";
  "The check here is asked of a whole list at once and next door of one folder at a time, and that width is the only difference between the two gates, so both hand their own width to the same two provings.";
  let refused = await ebible_versions_english_refused();
  let door = fn_name("ebible_versions_english_choices_upload");
  let check = ebible_bible_folders_commercial_assert.name;
  let path = await function_dependency_path(door, check);
  let wired = null_not_is(path);
  let unwired_hint = text_combine_multiple([
    "the door that hands the English wordings to readers (",
    door,
    ") no longer reaches the check that refuses a translation this repo may not ship (",
    check,
    ") - rewire it, or the list goes out unasked",
  ]);
  true_is_assert_json(wired, {
    hint: unwired_hint,
  });
  async function folder_assert(bible_folder) {
    await ebible_bible_folders_commercial_assert([bible_folder]);
  }
  let permitted = await ebible_commercial_check_permits_assert(folder_assert);
  let one = await ebible_commercial_check_refuses_assert(
    refused,
    folder_assert,
    "the check let through a translation this repo may not ship and earn from - it has come unwired from the terms it reads",
  );
  let r = {
    checked: list_size(refused),
    refused: one,
    permitted,
  };
  return r;
}
