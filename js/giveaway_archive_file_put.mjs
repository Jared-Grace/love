import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_archive_keys } from "./giveaway_archive_keys.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { giveaway_archive_file_url } from "./giveaway_archive_file_url.mjs";
import { http_answer } from "./http_answer.mjs";
import { equal } from "./equal.mjs";
export async function giveaway_archive_file_put(
  identifier,
  path_in_item,
  body,
  headers_extra,
) {
  arguments_assert(arguments, 4);
  ("$plain identifier");
  ("$plain path_in_item");
  ("$plain body");
  ("$plain headers_extra");
  ("Hands one file over to archive.org under one name inside one box, and answers nothing but the number the host answered with.");
  ("★ THIS IS THE ONLY FUNCTION IN THE REPO THAT ASKS FOR THE KEYS, AND IT ANSWERS WITH NEITHER OF THEM AND WITH NONE OF THE NOTES THE HOST SENT BACK. A key read into a variable is gone when the function ends; a key handed back as an answer is printed by the seam, written into a file under gitignore that nobody deletes, and dropped into the conversation that asked. So the keys are read here, joined into one line of the request, and never looked at again - and what comes back is cut down to the number and a yes or no, because the host's own notes name the box and the sending and there is no reason for any of that to be filed either.");
  ("★ NOTHING HERE DECIDES ANYTHING, WHICH IS WHY IT IS SAFE FOR IT TO BE THE ONE FUNCTION THAT SENDS. The name the file arrives under is handed in, already spelled; the notes that become the box's page are handed in, already made; the bytes are handed in. A sender that worked any of those out for itself would be settling a permanent name in the same breath as making it public, where nobody reads it until it is too late to change. So the deciding lives in the plan next door, which sends nothing and can be read for as long as anyone likes.");
  ("★ THE BOX IS ASKED TO BE MADE IF IT IS NOT THERE, BECAUSE THE FIRST FILE OF A NEW BOX AND THE TENTH FILE OF AN OLD ONE ARE OTHERWISE TWO DIFFERENT COMMANDS. Either the host holds this name already and the file joins what is there, or it does not and the box comes into being around this file. Asking for both at once means a sending that stopped halfway can simply be run again, and the files that already landed are written over with themselves rather than refused.");
  ("The number is handed back rather than turned into a refusal. A part-finished sending answers with a number that is neither a success nor a failure, and whoever is walking a box of eleven files needs to know which of the eleven that happened on.");
  let keys = await giveaway_archive_keys();
  let headers = {
    authorization: "LOW " + keys.access + ":" + keys.secret,
    "x-amz-auto-make-bucket": "1",
  };
  object_merge_set(headers, headers_extra);
  let url = giveaway_archive_file_url(identifier, path_in_item);
  let options = {
    method: "PUT",
    headers: headers,
    body: body,
  };
  let answered = await http_answer(url, options);
  let ok = equal(answered.status, 200);
  let r = {
    path_in_item: path_in_item,
    status: answered.status,
    ok: ok,
  };
  return r;
}
