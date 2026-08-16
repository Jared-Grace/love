import { permission_settings_shared_path } from "./permission_settings_shared_path.mjs";
import { permission_settings_allow_read } from "./permission_settings_allow_read.mjs";
import { permission_rule_granted_name } from "./permission_rule_granted_name.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_map } from "./list_map.mjs";
export async function permission_grant_names_written_assert(names) {
  "read the allow rules back off disk after writing them and complain by name if any of the names they were written from is not there";
  "the writer checking its own work, because nothing else can. Two Claudes granting at once each read the names list, then spend a walk of the whole repo answering the refusal check, and only then write. That walk is the window: the second write renders its file from a list read before the first one landed, so it drops the first one's names. Both the list and the settings file are rewritten together, which is what makes it silent - the drift gate compares those two to each other and they agree perfectly, on a set that lost a grant the human gave.";
  "measured rather than reasoned about: ten grants were written, confirmed present, and seven of them were gone a minute later with every gate still green.";
  "only the missing are complained about and never the extra. A name on disk that this list does not carry is another Claude's grant landing in the same window, and failing on that would make two Claudes granting at once impossible - which is the ordinary case here, not the exception.";
  "the settings file is read rather than the names list, because it is the file that decides whether a command prompts. A name restored to the list while the rules stay stale still asks.";
  let path = permission_settings_shared_path();
  let allow = await permission_settings_allow_read(path);
  let named_all = list_map(allow, permission_rule_granted_name);
  let named = list_filter_text_empty_not_is(named_all);
  let on_disk = list_unique(named);
  let lost = list_without_multiple(names, on_disk);
  let f_name = fn_name("permission_grant_add_multiple");
  let hint = {
    advice: text_combine_multiple([
      "these names were just written and are already not on disk, so another Claude granting at the same time rendered the settings file from a list read before this write landed. Nothing is broken and nothing was approved that should not have been - the grants simply are not there. Ask for them again with ",
      f_name,
      ", which is safe to re-run and will say so if they have come back by themselves.",
    ]),
  };
  list_empty_is_assert_json(lost, {
    hint,
  });
  let report = {
    asked: names.length,
    on_disk: on_disk.length,
  };
  return report;
}
