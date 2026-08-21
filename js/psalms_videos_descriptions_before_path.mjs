export function psalms_videos_descriptions_before_path(moment) {
  "$plain moment";
  "Where one reading of what the channel's songs already carried is kept, named by the moment it was taken.";
  "In the found half of the data folder because it is a record of what was true once, not something a later run reads to decide by. A record of the past must not be rewritten when a name changes, and that is exactly what the halves are for.";
  "Named by the moment rather than written over, because the whole worth of it is having the one from before the run that took the words away. A single file kept up to date would hold the state after the damage and call itself a backup.";
  arguments_assert(arguments, 1);
  let name = text_combine_multiple([
    fn_name("psalms_videos_descriptions_before"),
    "_",
    moment,
    ".json",
  ]);
  let path = path_join(findings_folder(), name);
  return path;
}
