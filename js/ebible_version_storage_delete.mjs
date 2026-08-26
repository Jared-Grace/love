import { ebible_bible_folder_commercial_not_assert } from "./ebible_bible_folder_commercial_not_assert.mjs";
import { ebible_version_storage_names } from "./ebible_version_storage_names.mjs";
import { firebase_storage_delete } from "./firebase_storage_delete.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_version_storage_delete(bible_folder) {
  "$plain bible_folder";
  "Takes one translation's published text down from storage, every file of it, and afterwards asks storage what is left.";
  "It refuses a translation the repo is free to ship before it removes anything. A remover names a folder and the folder name says nothing about whose text it is, so the terms are what decides, read the same way the publishing doors read them.";
  "It finds its own set by asking storage rather than working out from this disk what was once sent. A file put there by an older sweep under a spelling nothing here writes any more would survive a removal built from names this machine can generate, and surviving is the whole thing that matters when the reason for removing is that the text may not be published at all.";
  "Asking again at the end is the proof rather than a courtesy. Nothing on this machine changes when a file up there is removed, so the only way to know a text is gone is to ask the place it was published.";
  await ebible_bible_folder_commercial_not_assert(bible_folder);
  let names = await ebible_version_storage_names(bible_folder);
  async function removed(destination) {
    async function lambda() {
      await firebase_storage_delete(destination);
    }
    await retry_standard(lambda);
  }
  await each_unordered_async(names, removed);
  let left = await ebible_version_storage_names(bible_folder);
  let r = {
    bible_folder,
    before: list_size(names),
    left: list_size(left),
  };
  return r;
}
