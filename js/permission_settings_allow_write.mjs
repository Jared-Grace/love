export async function permission_settings_allow_write() {
  "write the shared settings file's allow list out from the JS list it is generated from, leaving every other key in the file exactly as it was";
  "only the allow list is replaced. The hooks and the default mode live in the same file and nothing here derives them, so reading the file and putting one key back is the difference between generating a list and overwriting a file somebody else also owns.";
  "the local settings file beside it is per-machine and outside version control, so it is never written";
  let paths = permission_settings_paths();
  let path = list_first(paths);
  let settings = await file_read_json(path);
  let permissions = property_get(settings, "permissions");
  let generated = permission_allow_generated();
  property_set(permissions, "allow", generated);
  await file_overwrite_json(path, settings);
  let report = {
    path,
    allow: generated.length,
  };
  return report;
}
