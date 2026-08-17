import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { ebible_languages_credits } from "./ebible_languages_credits.mjs";
import { ebible_languages_licences_baseline_path } from "./ebible_languages_licences_baseline_path.mjs";
import { ebible_languages_licences_commercial_not_bible_folders } from "./ebible_languages_licences_commercial_not_bible_folders.mjs";
import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_user_mounted_is } from "./folder_user_mounted_is.mjs";
import { list_size } from "./list_size.mjs";
import { lists_sizes_equal_assert_json } from "./lists_sizes_equal_assert_json.mjs";
import { not } from "./not.mjs";
export async function ebible_languages_licences_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no translation is offered to a reader on terms this repo may not ship.");
  ("The terms are read at the moment a translation is chosen, and then nothing looks");
  ("at them again. So a language added by hand, or one whose page has been rewritten");
  ("since, can sit in front of readers for months on terms that forbid the very thing");
  ("this repo is built to do. This asks the question of the list as it stands rather");
  ("than of the list as it was being built.");
  ("Measured against what the app already carried rather than against zero, because");
  ("six of these were chosen before the terms were being read and each needs a");
  ("replacement translation found for it - which is a search, not an edit. The list");
  ("only shrinks: a new one fails, and one left in the record after it has been");
  ("replaced fails too.");
  ("Silent about all of it when the drive the translations live on is not plugged in.");
  ("Nothing can be read then, every translation would look faultless, and the record");
  ("would read as stale - a gate that goes red for a missing drive teaches whoever");
  ("sees it to stop believing it.");
  let mounted = await folder_user_mounted_is();
  let absent = not(mounted);
  if (absent) {
    let r2 = {
      checked: 0,
      mounted,
    };
    return r2;
  }
  let credits = await ebible_languages_credits();
  let bible_folders = await ebible_languages_without_original_bible_folders();
  lists_sizes_equal_assert_json([credits, bible_folders], {
    hint: "a translation this app offers has no licence page on this machine, so its terms were not read at all - download it, because a translation nobody can read the terms of is the one case this gate cannot judge",
  });
  let offenders =
    await ebible_languages_licences_commercial_not_bible_folders();
  let path = ebible_languages_licences_baseline_path();
  let name_write = fn_name("ebible_languages_licences_baseline_write");
  await baseline_names_gate_generic(
    offenders,
    path,
    "this translation is offered on terms this repo may not ship - find a different translation for that language, or get written permission from whoever holds it",
    name_write,
  );
  let r = {
    checked: list_size(bible_folders),
    offenders: list_size(offenders),
    mounted,
  };
  return r;
}
