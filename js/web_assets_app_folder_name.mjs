export function web_assets_app_folder_name() {
  "The folder that holds one folder per app, for the pictures that belong to a single app rather than to the repo as a whole.";
  "An app's icons and its link-card picture are only ever asked for by that app, so they are kept under its own name - which is what lets an app be read, or removed, without going through a shared pile of files working out which of them were its.";
  let folder_name = "app";
  return folder_name;
}
