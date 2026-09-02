import { arguments_assert } from "./arguments_assert.mjs";
import { web_assets_storage_prefix } from "./web_assets_storage_prefix.mjs";
import { storage_rules_read_prefixes } from "./storage_rules_read_prefixes.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
export async function web_assets_storage_prefix_granted_gate_run() {
  "The word this repo builds every asset address out of is one the permission rules actually give away to anybody.";
  "IT IS THE OTHER HALF OF A CHECK THAT ALREADY EXISTS, AND THE TWO HALVES FACE OPPOSITE WAYS. Its neighbour takes each folder the rules give away and proves the store really serves it, which is the rules answering for themselves against the wire. This takes the word the code is putting into addresses and proves the rules mention it at all. Neither implies the other: rules can be perfectly deployed and perfectly readable while the code has quietly started asking for a folder none of them names, and every one of those requests is refused while both the rules and the store are blameless.";
  "The rules are the one place the assets folder's name is written that cannot be worked out from anywhere else. Everything else asking for that folder derives it, so a rename carries through by itself; the rules are a file in another language and derive from nothing, so they are the single thing a rename can leave behind. That is exactly why this check is worth its cost and why the rest of the folder needs no check at all.";
  "A re-rendering of the same name passes and is meant to. Writing the folder as a tree instead of one flat word changes where the files sit on a disk and does not change the word asked of the store, so nothing here moves - which is the whole point of deriving the word rather than spelling it twice. What fails is a real rename, where the code begins asking for something the rules never granted.";
  "It reads the rules out of the file rather than being told what they say. A list of granted folders written down here would agree with the file on the day it was typed and quietly stop agreeing afterwards, and a check standing on a stale list says nothing while looking like it says everything.";
  "The failure it is built for is silent at every other place somebody would look. Nothing throws, nothing logs, the pages still build and still deploy; each reader is simply refused one request at a time and sees a picture that did not arrive.";
  arguments_assert(arguments, 0);
  let prefix = web_assets_storage_prefix();
  let prefixes = await storage_rules_read_prefixes();
  let hint =
    "the assets folder's name is not among the folders storage.rules gives away to anybody, so every asset address built from it would be refused to every reader — would you like to grant it in storage.rules and send them with `firebase deploy --only storage`?";
  list_includes_assert_json(prefixes, prefix, {
    hint,
    prefix,
    prefixes,
  });
  let r = {
    prefix,
    prefixes,
  };
  return r;
}
