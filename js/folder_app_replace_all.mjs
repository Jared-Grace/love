import { arguments_assert } from "./arguments_assert.mjs";
import { folder_app_copy_all } from "./folder_app_copy_all.mjs";
import { folder_app_stale_delete } from "./folder_app_stale_delete.mjs";
export async function folder_app_replace_all(from_folder, to_folder, a_name) {
  "$plain a_name";
  "Puts every piece of one app's build into a folder and then takes away whatever the build before it left there, so the folder holds one build rather than two piled together. Answers with the pieces it put there.";
  "Which pieces those are is asked of the folder the build was made in rather than named anywhere, because a build is free to cut an app into extra scripts and name them by numbers of its own choosing. A list written by hand would leave the numbered scripts behind while the page went on ahead, and the page would then send live for a file that was never sent - which goes wrong nowhere but at the far end, since back where it was built the scripts sit right beside the page and everything works.";
  "★ THE TAKING AWAY COMES AFTER THE PUTTING IN PLACE, AND THAT ORDER IS THE WHOLE SAFETY OF IT. A run that falls over halfway has then removed nothing it had not already replaced, so the folder is a mixture of two builds rather than a folder with pieces missing. The other order empties the folder first and leaves nothing at all standing if the copy never finishes.";
  "Both callers spelled these two lines out, in that order, with that reason written twice in their own words. Naming the pair is what stops the order being the sort of thing a later reader can quietly get backwards in one of them.";
  "It records no approval of what it moved. One caller does that afterwards and the other deliberately does not, and which of those is right is a fact about the folder being written to rather than about copying - so it stays with whoever knows the folder.";
  arguments_assert(arguments, 3);
  let copied = await folder_app_copy_all(from_folder, to_folder, a_name);
  await folder_app_stale_delete(to_folder, a_name, copied);
  return copied;
}
