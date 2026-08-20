import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { permission_replay_path } from "./permission_replay_path.mjs";
import { permission_settings_allow_every } from "./permission_settings_allow_every.mjs";
import { property_get } from "./property_get.mjs";
import { text_between } from "./text_between.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function permission_replay_domains() {
  arguments_assert(arguments, 0);
  ("Which sites a page was fetched from cost the human an approval, and how often, split by whether a rule already covers the site.");
  ("A fetch is the one interruption a rule naming a function can never answer, so it is invisible to the grant reading beside it and was being read off the record by hand. Read together the sites look like one large cost and read apart they are a dozen small ones, and only the second reading tells you which of them a rule would actually pay for.");
  ("The count decides nothing on its own. A site belongs in the rules when it is one this repo would quote - somebody's published work, read as they published it - and a site fetched once while answering one question stays out however loud the row looks, because a standing approval for it will never be used again.");
  ("The label the record files a fetch under is already spelled the way a rule for it is spelled, so what is granted is asked by looking for the label itself rather than by building a rule out of the site name and hoping the two spellings agree.");
  let path = permission_replay_path();
  let there = await file_exists(path);
  let absent = not(there);
  if (absent) {
    let none = {
      path,
      written: false,
      write_with: fn_name("permission_replay_write"),
    };
    return none;
  }
  let record = await file_read_json(path);
  let confirmed = property_get(record, "confirmed");
  let rows = property_get(confirmed, "rows");
  let allow = await permission_settings_allow_every();
  let granted = [];
  let open = [];
  let open_count = 0;
  for (let row of rows) {
    let label = property_get(row, "label");
    let fetched = text_starts_with(label, "WebFetch(domain:");
    if (not(fetched)) {
      continue;
    }
    let domain = text_between(label, "domain:", ")");
    let count = property_get(row, "count");
    let entry = {
      domain,
      count,
    };
    let already = list_includes(allow, label);
    if (already) {
      list_add(granted, entry);
      continue;
    }
    open_count = open_count + count;
    list_add(open, entry);
  }
  let r = {
    path,
    written: true,
    days: property_get(record, "days"),
    open_count,
    granted,
    open,
  };
  return r;
}
