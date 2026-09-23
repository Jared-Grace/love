import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function storage_browser_doors() {
  "The functions allowed to speak to the browser's own stores themselves, each for its own reason.";
  "Ten of them are the doors: speaking to the browser is the whole of what they do, and every reading that watches a stored word starts from their names. A word reaching a disk through one of them is a word something is looking at.";
  "Two of the ten take the word whole rather than building it from an app and a name. That is not a loosening: the words that go through them were already published in browsers before there was a door to go through, and composing them afresh here would leave every reader who holds one looking at nothing. What they buy is that the composing now happens in front of a reading that can see it, instead of inside a line nothing in this repo could reach.";
  "One of them names no word at all. The refresher clears both stores whole, so nothing about it can be orphaned by a rename - there is no key in it to publish.";
  "One of them is not speaking to a browser at all. The mock builds a stand-in store and hands it to a run that has no browser in it, so the word it says is the one it is about to bind rather than one it is reaching for, and nothing it keeps outlives the run.";
  "This list earns its keep by being wrong out loud. It is not a set of exemptions somebody may quietly extend: a gate measures every other file against what the repo already carried, so a new name put here is a claim a reader can check against these reasons rather than a line that disappears into a baseline.";
  arguments_assert(arguments, 0);
  let doors = [
    fn_name("storage_local_specify_get_json"),
    fn_name("storage_local_specify_set"),
    fn_name("storage_local_specify_remove"),
    fn_name("storage_local_remove"),
    fn_name("storage_local_keys_browser"),
    fn_name("storage_session_get"),
    fn_name("storage_session_set"),
    fn_name("storage_session_exists"),
    fn_name("storage_session_specify_get"),
    fn_name("storage_session_specify_set"),
    fn_name("playwright_refresh"),
    fn_name("storage_local_mock_enable"),
  ];
  return doors;
}
