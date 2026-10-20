import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { list_add } from "./list_add.mjs";
import { json_to } from "./json_to.mjs";
import { giveaway_archive_headers_authorized } from "./giveaway_archive_headers_authorized.mjs";
import { http_answer } from "./http_answer.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { equal } from "./equal.mjs";
import { text_includes } from "./text_includes.mjs";
import { or } from "./or.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function giveaway_archive_metadata_write_multiple(
  identifier,
  words,
) {
  arguments_assert(arguments, 2);
  ("$plain identifier");
  ("$plain words");
  ("Writes the named words of a box's page on archive.org - its title, its description, its language, whatever it is handed - in one ask, and hands back what the host answered.");
  ("★ THIS CHANGES WORDS AND NEVER A NAME, WHICH IS WHY IT IS THE SAFE HALF OF MINDING A BOX THAT IS ALREADY PUBLIC. A file's name inside a box can never be changed and a box's own name can never be changed, so every mistake on that side is permanent and every sending has to be weighed one file at a time. The words on the page are the opposite: they can be rewritten as often as anyone likes, and a wrong one costs nothing but the rewriting. So a description that has fallen behind what the box holds is not a thing to agonise over - it is a thing to put right.");
  ("★ SEVERAL WORDS GO IN ONE ASK, AND THAT IS NOT THE SAME THING AS WRITING A WHOLE PAGE AT ONCE. The danger in a page writer is what it does about the words it was not given - leave them or clear them, and both are wrong half the time. This is still a patch: it is a list of named adds, so a word nobody named is left exactly as it was, and the same run twice changes the same things. What is saved by joining them is real and was measured: the host turns every ask into a job queued behind the box's other jobs, so five words sent singly are five jobs where one ask is one.");
  ("★ EACH ASK IS AN ADD RATHER THAN A REPLACE, BECAUSE ADD ALREADY COVERS BOTH. The rule for patching says that adding a word a page already carries writes over it, so one kind of ask works whether the word was there or not. Asking to replace would refuse on a page that never had the word, which would make a first setting and a later correction two different commands for no reason.");
  ("★ WORDS THAT ALREADY SAY THIS COUNT AS DONE, EVEN THOUGH THE HOST CALLS IT A FAULT. Asked for a page that already says every one of these things, the host refuses with a four hundred and the words no changes to meta xml - which is not a refusal at all, it is the page saying it already agrees. Reading that as a failure would mark a mended page broken, and a run over thirty boxes would come back looking half broken, because a title almost never changes while a description often does. What is being asked for is a page that says a particular thing, not a page that was written to. With several words in one ask the refusal means all of them already agreed, since one word that differs is enough to make the host write.");
  ("★ THAT ONE READING LEANS ON THE HOST'S OWN WORDING, AND IS THE ONE THING HERE THAT COULD GO QUIET IF THE HOST REWORDED IT. The alternative was to read the page first and send nothing when it already agreed, which needs no wording at all - but it also needs a reading that can fail, and a reading that failed would be indistinguishable from a page that disagreed. So the wording is matched, and if the host ever changes it this says a mended page is broken rather than saying a broken page is fine.");
  ("★ WHAT THE HOST SAID IS HANDED BACK IN FULL, UNLIKE THE FILE SENDER NEXT DOOR. That sender cuts its answer down to a number because the host's reply names the box and the sending and nothing there is worth filing. Here the reply is the only place a refusal is explained - a word the host will not take, a patch it could not read - and a number on its own would leave the caller guessing.");
  ("An empty list stops this rather than sending a patch that asks for nothing. Such an ask would come back refused with the agreement wording and be read as a mended page, which is the one way this could report success over a page it never touched.");
  ("The words are sent in the order they are handed over, because the host keeps that order and prints it, so the order is part of what is being written rather than an accident of how the list was built.");
  list_empty_not_is_assert(words);
  let patch = [];
  for (let word of words) {
    let one = {
      op: "add",
      path: "/" + word.name,
      value: word.said,
    };
    list_add(patch, one);
  }
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
  let names = list_map_property(words, "name");
  let r = {
    identifier: identifier,
    names: names,
    status: answered.status,
    ok: ok,
    agreed_already: agreed_already_is,
    said_back: text,
  };
  return r;
}
