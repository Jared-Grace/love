import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { qa_build_folder } from "./qa_build_folder.mjs";
import { qa_snapshot_app_build } from "./qa_snapshot_app_build.mjs";
import { qa_snapshot_app_hashes } from "./qa_snapshot_app_hashes.mjs";
import { qa_snapshot_clean } from "./qa_snapshot_clean.mjs";
import { qa_snapshot_ensure_named } from "./qa_snapshot_ensure_named.mjs";
import { text_frozen } from "./text_frozen.mjs";
export async function qa_app_commit_hashes(search, commit) {
  "$plain search";
  "$plain commit";
  "Builds one app out of one commit alone, and answers with a short word standing for each piece that came out";
  "A build made where the work happens is made out of whatever everybody had half finished at that second, so the pieces that went out could never be shown to have come from the commit that was found sound - only to have been built around the same time as it. Built here they came from that commit and from nothing else";
  "What this answers is what this run built, and deliberately not what the commit builds into - because for some apps there is no such thing. An app is free to make part of itself up as it is built, and one of them varies the steps of an animation every time, so two builds of one unchanged commit come out different and both are right";
  "So these words are only worth anything about the very pieces that were made here. They can say whether what is about to be sent is those pieces; they can never say whether something built somewhere else would have matched. Anything built again is a different thing, even from the same commit - which means the pieces that were looked at are the pieces that have to be sent, rather than being rebuilt on the way out";
  "The copy is put back to how its commit had it before anything else happens, because what the last build left behind would otherwise refuse to be moved aside. That is asked first every time rather than only when it is needed, since asking costs nothing and knowing whether it is needed costs a check that could be wrong";
  "The name the app is looked up by is worked out here rather than inside the copy. The two could disagree if an app were named differently at that commit - and it is the pieces that go out that are being reduced, so what they are called is what this repo calls them";
  let folder = qa_build_folder();
  await qa_snapshot_clean(folder);
  let copy_name = text_frozen("qa_build");
  await qa_snapshot_ensure_named(copy_name, commit);
  await qa_snapshot_app_build(folder, search);
  let app_name = await app_shared_name_search(search);
  let hashes = await qa_snapshot_app_hashes(folder, app_name);
  return hashes;
}
