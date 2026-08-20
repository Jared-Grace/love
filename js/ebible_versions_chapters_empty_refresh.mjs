import { each_async } from "./each_async.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
import { ebible_versions_chapters_empty } from "./ebible_versions_chapters_empty.mjs";
import { invoke_cache_file_refresh } from "./invoke_cache_file_refresh.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_versions_chapters_empty_refresh() {
  "Forgets the empty answer every bible a reader can choose but receives nothing from is remembered by, and works each of them out again.";
  "It finds its own set rather than being handed one. What is empty is exactly what the reader is being shown, so asking the question is the only way the repair cannot drift from the fault - a list written down by whoever ran this last would go stale the moment one more bible's text arrived, and a list typed out by hand is a guess about which ones are broken rather than a reading of it.";
  "Only the empty ones are forgotten. Forgetting is what makes this survivable to run: an answer holding chapters is never touched, so the worst this can cost is the time it takes to work out again something that already held nothing. That is why there is no copy taken first even though this store is the one git has never seen - there is nothing in the entries it writes to that could be lost.";
  "It asks a second time afterwards and hands back what is still empty. Working an answer out again is not the same as the answer coming back full: a bible whose reading-aloud text is genuinely absent, or which holds nothing readable at all, comes back empty however many times it is asked. Those are the only ones that were ever about the bible rather than about a stale answer, and they are the list somebody has to look at one by one.";
  "One bible after another rather than all at once, because each one opens every chapter of a bible off a disk and reads a whole edition into memory before it answers.";
  let before = await ebible_versions_chapters_empty();
  async function lambda(bible_folder) {
    await invoke_cache_file_refresh(ebible_version_chapters, [bible_folder]);
  }
  await each_async(before, lambda);
  let after = await ebible_versions_chapters_empty();
  let r = {
    before: list_size(before),
    after: list_size(after),
    still_empty: after,
  };
  return r;
}
