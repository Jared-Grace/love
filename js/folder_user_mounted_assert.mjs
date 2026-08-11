import { folder_user_mounted_is } from "./folder_user_mounted_is.mjs";
import { folder_user_root } from "./folder_user_root.mjs";
import { not } from "./not.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function folder_user_mounted_assert(f_path) {
  "Say plainly that the drive is not mounted, when a path that lives on it could not be reached. For calling after something under it has already failed, not before - it costs a look at the disk, and the happy path should not pay for it.";
  "What the system says on its own is that permission was denied, which sends whoever reads it looking for a permissions problem that is not there. The drive being out is a different thing entirely and has a different remedy: plug it back in. A day was lost to that once - every conversation on this machine stopped committing, and the reason it gave named a folder that had nothing to do with committing.";
  "A path that is not on that drive is left alone, so this can be called on any failure without turning an unrelated one into a wrong answer.";
  let root = folder_user_root();
  let under = text_starts_with(f_path, root);
  if (not(under)) {
    return;
  }
  let mounted = await folder_user_mounted_is();
  let absent = not(mounted);
  not_assert_json(absent, {
    hint: "the drive your own files are on is not mounted, so nothing kept on it can be reached from here - plugging it back in is all this needs, and everything on it comes back unchanged",
    f_path,
    root,
  });
}
