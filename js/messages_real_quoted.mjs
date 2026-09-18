import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { path_join } from "./path_join.mjs";
import { list_add } from "./list_add.mjs";
import { app_message_private_records } from "./app_message_private_records.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { messages_real_trivial_ceiling } from "./messages_real_trivial_ceiling.mjs";
import { messages_real_quoted_allowed } from "./messages_real_quoted_allowed.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { repo_lines_search } from "./repo_lines_search.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_size } from "./list_size.mjs";
export async function messages_real_quoted() {
  arguments_assert(arguments, 0);
  ("Every message somebody really sent that this repo now holds word for word, given back as the places it was found - the ones that are neither trivial nor the repo's own.");
  ("★ IT ASKS THE MESSAGES OF THE REPO AND NEVER THE REPO OF THE MESSAGES. Read the other way round - taking each written-down case and looking for it among what arrived - a quotation nobody has noticed yet is invisible, because the search only ever visits the cases somebody already thought to check. Asked this way the messages are what drive the reading, so a quotation is found wherever in the repo it was put, including the places nobody remembers putting one.");
  ("★ AN EMPTY MIRROR IS A FAILURE AND NOT A PASS. The messages sit on this machine and outside this repo on purpose, and a reading that found none of them would answer that nothing is quoted - the same answer as a clean repo, for a machine that simply has not fetched anything. A check that cannot disagree is not a check, so the absence is said out loud here rather than quietly turning into good news.");
  ("★ THE WORDS THEMSELVES NEVER COME BACK. Saying which message leaked by printing it writes a second copy of it into whatever reads this - a gate's own complaint, the log it is kept in, the screen it is read on - so what comes back is how long it was and which files hold it. That is enough to go and look, and it spreads nothing.");
  ("★ ONLY WHAT GIT IS KEEPING COUNTS. The search reads the folder, and the folder holds more than the repo does - a scratch file somebody is part way through, a downloaded package, a local record. On the first run every hit was one scratch file, which is not published and never will be, and taking those as leaks would have the gate red on somebody else's unfinished work and no way for its owner to know. So the places are kept only where git is keeping the file.");
  let folder = folder_repo_love();
  let tracked = await git_files_tracked_folder(folder);
  let kept = [];
  for (let relative of tracked) {
    let f_path = path_join([folder, relative]);
    list_add(kept, f_path);
  }
  let records = await app_message_private_records();
  let list = list_map_property(records, "message");
  let texts = list_unique(list);
  list_empty_not_is_assert_json(texts, {
    fault:
      "no messages have been brought down to this machine, so nothing could be checked",
    repair: fn_name("app_message_download_private"),
  });
  let ceiling = messages_real_trivial_ceiling();
  let allowed = messages_real_quoted_allowed();
  let quoted = [];
  for (let text of texts) {
    let trivial = less_than_equal(text.length, ceiling);
    let own = list_includes(allowed, text);
    let skip = trivial || own;
    if (skip) {
      continue;
    }
    let found = await repo_lines_search(text);
    let list2 = list_map_property(found, "f_path");
    let places = [];
    for (let f_path of list_unique(list2)) {
      let git_keeps = list_includes(kept, f_path);
      if (git_keeps) {
        list_add(places, f_path);
      }
    }
    let leaked = list_empty_not_is(places);
    if (leaked) {
      let one = {
        length: text.length,
        places,
      };
      list_add(quoted, one);
    }
  }
  let r = {
    checked: list_size(texts),
    quoted,
  };
  return r;
}
