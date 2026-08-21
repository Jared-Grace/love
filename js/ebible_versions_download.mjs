import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions } from "./ebible_versions.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_versions_download() {
  "Every translation eBible offers, downloaded again, with the ones that arrived and the ones that did not named separately.";
  arguments_assert(arguments, 0);
  ("An answer at all, where before there was none. Each download is wrapped so that one translation being unreachable does not stop the other three hundred and ninety-eight, and that wrapping used to swallow the failure whole - a run where every single download failed finished quietly and looked exactly like a run where every one succeeded. Naming the failures is what tells those two apart.");
  ("The folders are named rather than counted because the caller's next move needs them. Everything measured over the corpus - the gaps, the repeated ids, the displaced ones - is measured against files on disk, and those measurements are only worth trusting for the translations that actually came down. A count cannot say which ones those are.");
  ("The ones that arrived are named too, and that is the half this was built for. There was no moment to hang a re-measure on while this returned nothing, so nothing was ever re-measured after a refresh; a list of what changed is that moment.");
  let list = await ebible_versions();
  let downloaded = [];
  let failed = [];
  async function version_download(bible_folder) {
    async function download() {
      let file_path = await ebible_version_download(bible_folder);
      return file_path;
    }
    let arrived = await catch_null_async(download);
    let missed = null_is(arrived);
    if (missed) {
      list_add(failed, bible_folder);
      return;
    }
    list_add(downloaded, bible_folder);
  }
  await each_async(list, version_download);
  let answer = {
    downloaded,
    failed,
  };
  return answer;
}
