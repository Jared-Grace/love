export async function permission_lists_bootstrap_write() {
  "One-time migration: read the allow rules that exist today and write them back out as JS, so the JS becomes the source they are generated from rather than a second copy of them.";
  "Written as a command rather than typed by hand because the list is long enough that transcribing it would introduce exactly the drift the generation exists to remove.";
  "The rules granting a function with no arguments are folded in with the rest. A function taking no parameters can no longer be handed any, so the narrower rule shape buys nothing it did not already have.";
  let path = permission_settings_path_shared();
  let settings = await file_read_json(path);
  let permissions = property_get(settings, "permissions");
  let allow = property_get(permissions, "allow");
  let prefix = permission_grant_rule_prefix();
  let names = [];
  let other = [];
  for (let rule of allow) {
    let dispatched = text_starts_with(rule, prefix);
    if (not(dispatched)) {
      list_add(other, rule);
      continue;
    }
    let name = permission_grant_rule_name(rule);
    let empty = text_empty_is(name);
    if (empty) {
      list_add(other, rule);
      continue;
    }
    list_add(names, name);
  }
  let unique = list_unique(names);
  await file_write(
    permission_grant_names_source_path(),
    js_code_permission_grant_names(unique),
  );
  await file_write(
    permission_rules_other_source_path(),
    js_code_permission_rules_other(other),
  );
  let report = {
    names: unique.length,
    other: other.length,
  };
  return report;
}
