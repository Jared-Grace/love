import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { giveaway_archive_headers_authorized } from "./giveaway_archive_headers_authorized.mjs";
import { http_answer } from "./http_answer.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { equal } from "./equal.mjs";
import { text_includes } from "./text_includes.mjs";
import { or } from "./or.mjs";
export async function giveaway_archive_metadata_write(identifier, name, said) {
  arguments_assert(arguments, 3);
  ("$plain identifier");
  ("$plain name");
  ("$plain said");
  ("Writes one word of a box's page on archive.org - its title, its description, its language, whatever is named - and hands back what the host answered.");
  ("★ THIS CHANGES WORDS AND NEVER A NAME, WHICH IS WHY IT IS THE SAFE HALF OF MINDING A BOX THAT IS ALREADY PUBLIC. A file's name inside a box can never be changed and a box's own name can never be changed, so every mistake on that side is permanent and every sending has to be weighed one file at a time. The words on the page are the opposite: they can be rewritten as often as anyone likes, and a wrong one costs nothing but the rewriting. So a description that has fallen behind what the box holds is not a thing to agonise over - it is a thing to put right.");
  ("★ ONE WORD AT A TIME, AND THE CALLER SPELLS BOTH THE WORD AND WHAT IT SAYS. A writer that took a whole page of notes at once would have to decide what to do about the notes it was not given - leave them, or clear them - and both of those are wrong half the time. Patching one named word leaves every other word exactly as it was, so a run that was interrupted has changed only what it got to, and running it again changes only the same thing.");
  ("★ THE PATCH ASKS TO ADD RATHER THAN TO REPLACE, BECAUSE ADD ALREADY COVERS BOTH. The rule for patching says that adding a word a page already carries writes over it, so one kind of ask works whether the word was there or not. Asking to replace would refuse on a page that never had the word, which would make a first setting and a later correction two different commands for no reason.");
  ("★ A WORD THAT ALREADY SAYS THIS COUNTS AS DONE, EVEN THOUGH THE HOST CALLS IT A FAULT. Asked to write a title that is already the title, the host refuses with a four hundred and the words no changes to meta xml - which is not a refusal at all, it is the page saying it already agrees. Reading that as a failure would mark every page mended, because a title almost never changes while a description often does, and a run over thirty boxes would come back looking half broken. What is being asked for here is a page that says a particular thing, not a page that was written to.");
  ("★ THAT ONE READING LEANS ON THE HOST'S OWN WORDING, AND IS THE ONE THING HERE THAT COULD GO QUIET IF THE HOST REWORDED IT. The alternative was to read the page first and send nothing when it already agreed, which needs no wording at all - but it also needs a reading that can fail, and a reading that failed would be indistinguishable from a page that disagreed. So the wording is matched, and if the host ever changes it this says a mended page is broken rather than saying a broken page is fine.");
  ("★ WHAT THE HOST SAID IS HANDED BACK IN FULL, UNLIKE THE FILE SENDER NEXT DOOR. That sender cuts its answer down to a number because the host's reply names the box and the sending and nothing there is worth filing. Here the reply is the only place a refusal is explained - a word the host will not take, a patch it could not read - and a number on its own would leave the caller guessing.");
  let patch = [
    {
      op: "add",
      path: "/" + name,
      value: said,
    },
  ];
  let patch_text = json_to(patch);
  let body = "-target=metadata&-patch=" + encodeURIComponent(patch_text);
  let headers = await giveaway_archive_headers_authorized({
    ["content-type"]: "application/x-www-form-urlencoded",
  });
  let url = "https://archive.org/metadata/" + identifier;
  let options = {
    method: "POST",
    headers: headers,
    body: body,
  };
  let answered = await http_answer(url, options);
  let text = buffer_text_to(answered.bytes);
  let written_is = equal(answered.status, 200);
  let agreed_already_is = text_includes(text, "no changes to _meta.xml");
  let ok = or(written_is, agreed_already_is);
  let r = {
    identifier: identifier,
    name: name,
    status: answered.status,
    ok: ok,
    agreed_already: agreed_already_is,
    said_back: text,
  };
  return r;
}
