import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { giveaway_archive_file_put_patient } from "./giveaway_archive_file_put_patient.mjs";
export async function giveaway_archive_file_send(
  identifier,
  path_in_item,
  path_on_disk,
) {
  arguments_assert(arguments, 3);
  ("Sends one file on this disk into one archive.org box, under one name given by the caller, and says what the host answered.");
  ("★ THIS SENDS EXACTLY THE ONE FILE IT IS HANDED AND NEVER THE REST OF THE BOX. The whole-box sender is the right tool for a box going out for the first time, but it is the wrong tool for mending one file inside a box that is already public: it would put every other name up again as a side effect, and a side effect is the one thing that must not happen on a send that a person has weighed and agreed to one file at a time.");
  ("★ IT DECIDES NOTHING - THE NAME AND THE FILE ARE BOTH HANDED IN. A name already in the box has its contents silently replaced, and a name not in the box becomes a permanent public address, and this function cannot tell those two apart because the disk holds no record of what was actually sent. So the judgment of which it is belongs to the person asking, and this function's whole job is to do that one thing and report it rather than to work out whether it should.");
  ("★ THE FILE IS CHECKED TO BE THERE BEFORE THE KEYS ARE TOUCHED. Reading a missing file would throw anyway, but it would throw after the request was already being built, and a failure that happens as late as possible is the hardest kind to read. Asking first turns a mistyped path into a plain answer instead of a stack from inside the sender.");
  ("★ THE PATIENT SENDER IS ASKED, THE SAME ONE THE WHOLE-BOX SENDER ASKS, BECAUSE A MEND IS THE SEND THAT CAN LEAST AFFORD TO BE IMPATIENT. This one is reached for by hand, one file at a time, after somebody has looked at a box and decided what is wrong with it. Giving up on the first slow moment hands that person a refusal they then have to tell apart from a real one, and the fault this machine actually has is exactly that: a reach that comes and goes while plainer tools get through at once. Half an hour of trying costs nothing here, since nobody is waiting on a queue behind it.");
  ("★ WHAT WENT WRONG IS CARRIED OUT, NOT JUST THE NUMBER. A send that was refused and a send that never got a word back are different troubles with different mends, and a message naming only a number cannot tell them apart - it would say the host did not accept the file on a day the host was never reached. So the reason it threw travels with the answer, and so does how many times it tried, which is the difference between giving up at once and fighting for half an hour.");
  let there_is = await file_exists(path_on_disk);
  true_is_assert_json(there_is, {
    identifier: identifier,
    path_in_item: path_in_item,
    path_on_disk: path_on_disk,
    hint: "there is no file at this path, so there is nothing to send",
  });
  let body = await file_read_buffer(path_on_disk);
  let answer = await giveaway_archive_file_put_patient(
    identifier,
    path_in_item,
    body,
    {},
  );
  true_is_assert_json(answer.ok, {
    identifier: identifier,
    path_in_item: path_in_item,
    path_on_disk: path_on_disk,
    status: answer.status,
    tried: answer.tried,
    threw_why: answer.threw_why,
    hint: "this file did not go in, so nothing in the box changed - a number says the host refused it, and a reason says the host was never reached",
  });
  let done = {
    identifier: identifier,
    path_in_item: path_in_item,
    path_on_disk: path_on_disk,
    status: answer.status,
    tried: answer.tried,
  };
  return done;
}
