export async function git_head_commit() {
  "The full name of the commit we are standing on";
  "The full name rather than the short one, because a short name is only unique until the day it is not, and this one is used as a key";
  let here = folder_current_absolute();
  let printed = await command_line_git_folder(here, "rev-parse HEAD");
  let commit = text_trim(printed);
  return commit;
}
