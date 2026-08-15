import { folders_moved_expected } from "./folders_moved_expected.mjs";
import { property_get } from "./property_get.mjs";
import { folder_moved_stale } from "./folder_moved_stale.mjs";
import { file_read } from "./file_read.mjs";
import { text_replace } from "./text_replace.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { git_remote_origin_url_set } from "./git_remote_origin_url_set.mjs";
import { folders_moved_stale } from "./folders_moved_stale.mjs";
export async function folders_moved_stale_repair() {
  "Rewrites every place that still names a folder's old home so that it names the new one, and then asks again to show that nothing is left.";
  "It finds its own set rather than being handed one. The list of what is stale is asked for, repaired, and asked for again, so the command cannot drift away from what is actually broken and cannot claim to have finished while something it never looked at still points at a folder that is gone.";
  "The copies of repositories are repaired too, by pointing each one at where it now pulls from. That is the repair nobody would think to do by hand, because a copy pointed at a folder that is gone does not complain - it simply stops being brought up to date.";
  "What it answers is what it changed and what is left. A repair that says only that it ran cannot be told apart from one that found nothing and did nothing, and those are the two answers that must never look the same.";
  let expected = folders_moved_expected();
  let files = [];
  let mirrors = [];
  for (let pair of expected) {
    let before = property_get(pair, "before");
    let after = property_get(pair, "after");
    let stale = await folder_moved_stale(before);
    let stale_files = property_get(stale, "files");
    for (let one_path of stale_files) {
      let text = await file_read(one_path);
      let replaced = text_replace(text, before, after);
      await file_overwrite(one_path, replaced);
      files.push(one_path);
    }
    let stale_mirrors = property_get(stale, "mirrors");
    for (let copy of stale_mirrors) {
      await git_remote_origin_url_set(copy, after);
      mirrors.push(copy);
    }
  }
  let remaining = await folders_moved_stale();
  let repaired = {
    files,
    mirrors,
    remaining,
  };
  return repaired;
}
