export async function permission_lists_bootstrap_write() {
  "One-time migration: read the allow rules the shared settings file holds today and write them back out as JS, so the JS becomes what they are generated from rather than a second copy of them.";
  "Run as a command rather than typed by hand because the list is long enough that transcribing it would introduce exactly the drift that generating it removes.";
  "Only the shared file is read. The local one beside it is per-machine and outside version control, so nothing here may own it.";
  "The rules granting a function no arguments at all are folded in with the rest: a function declaring no parameters can no longer be handed any, so the narrower shape now buys nothing it did not already have.";
  let paths = permission_settings_paths();
  let path = list_first(paths);
  let settings = await file_read_json(path);
  let permissions = property_get(settings, "permissions");
  let allow = property_get(permissions, "allow");
  let prefix = "Bash(node scripts/ai.mjs ";
  let names = [];
  let other = [];
  for (let rule of allow) {
    let dispatched = text_starts_with(rule, prefix);
    if (not(dispatched)) {
      list_add(other, rule);
      continue;
    }
    let name = dispatcher_run_name(rule);
    list_add(names, name);
  }
  let unique = list_unique(names);
  let note_names =
    "every function Claude may run on its own seam without asking first - the one list both rule families are generated from, so a second entry point costs no second list";
  let code_names = js_code_names_spelled(
    fn_name("permission_grant_names"),
    note_names,
    unique,
  );
  await file_write("js/permission_grant_names.mjs", code_names);
  let note_other =
    "the allow rules that grant something other than running a function on Claude's seam - kept as written, since nothing generates them";
  let code_other = js_code_texts_listed(
    fn_name("permission_rules_other"),
    note_other,
    other,
  );
  await file_write("js/permission_rules_other.mjs", code_other);
  let report = {
    names: unique.length,
    other: other.length,
  };
  return report;
}
