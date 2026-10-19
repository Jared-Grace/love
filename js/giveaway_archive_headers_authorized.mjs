import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_archive_keys } from "./giveaway_archive_keys.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function giveaway_archive_headers_authorized(headers_extra) {
  arguments_assert(arguments, 1);
  ("$plain headers_extra");
  ("Builds the notes one request to archive.org needs in order to be allowed, with whatever other notes the caller wants merged in beside them.");
  ("★ THIS IS THE ONLY FUNCTION IN THE REPO THAT ASKS FOR THE KEYS, AND IT EXISTS SO THAT THERE GOES ON BEING ONLY ONE. Handing a file over and changing the words on a box's page are two different requests - a put of bytes to one host and a post of a patch to another - so the moment the second one was wanted there were going to be either two places reading the keys or one place both of them share. Two would mean the next person to want a third kind of request reads the keys a third time, and every one of those is a place a key can be printed, filed or answered with by accident. One means the whole question is settled in a single line that nobody has a reason to open.");
  ("★ THE KEYS ARE READ, JOINED INTO ONE LINE, AND NEVER LOOKED AT AGAIN. They are not compared, not printed, not answered with, and not kept anywhere that outlives this call. The answer is notes for a request and nothing else, so a caller that files its answer away files the authorization line - which is why no caller should, and why the senders that use this hand back a number rather than what they sent.");
  let keys = await giveaway_archive_keys();
  let headers = {
    authorization: "LOW " + keys.access + ":" + keys.secret,
  };
  object_merge_set(headers, headers_extra);
  return headers;
}
