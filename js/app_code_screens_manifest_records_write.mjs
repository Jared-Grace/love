export async function app_code_screens_manifest_records_write(records, path) {
  arguments_assert(arguments, 2);
  ("write already-crawled screen records out as the text manifest at path");
  ("the two commands that produce a manifest each spelled the same three steps - render the records as indented json, refuse a path that is not a manifest, overwrite - and the refusal is the reason to have one place for it: a path checked in one of them and not the other is how a crawl overwrites something that was never a manifest.");
  let json = JSON.stringify(records, null, 2);
  app_code_screens_manifest_path_assert(path);
  await file_overwrite(path, json);
  return path;
}
