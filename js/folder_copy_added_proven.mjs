import { arguments_assert } from "./arguments_assert.mjs";
import { folder_copy_added } from "./folder_copy_added.mjs";
import { folder_copy_pending } from "./folder_copy_pending.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function folder_copy_added_proven(folder_from, folder_to) {
  arguments_assert(arguments, 2);
  ("$plain folder_from");
  ("$plain folder_to");
  ("Copies one folder into another without taking anything away, then reads the bytes on both sides to prove it, and answers whether anything was still outstanding along with what.");
  ("THE PROOF IS PART OF THE STEP RATHER THAN A SECOND THING TO REMEMBER. Left as two separate commands they are two separate habits, and the second one is the one that gets skipped on the day the first says it worked.");
  ("WHAT THE CHECKING HALF ADDS IS NARROWER THAN IT LOOKS, AND SAYING SO IS WORTH MORE THAN THE HOUR IT SAVES. The copying half is not merely the writer's word for it: the manual of the program underneath states that every file it sends is checked on the receiving side against a whole-file sum worked out as the file goes over, and a file that arrived damaged is sent again rather than reported as written. That covers everything the copy touched, including a file left half-written by a run that was stopped, because the next run sends it again. So reading the bytes back afterwards catches two things and not a third: a file that was already sitting there and got skipped on its length and its time, and damage done to the copy after it was written. It cannot catch a source that handed over wrong bytes, because it reads that same source a second time to ask. Weigh the hours against those two rather than against the whole copy.");
  ("A SOURCE THAT IS STILL BEING WRITTEN TO CAN NEVER COME BACK PROVEN, and that is a limit of the question rather than a fault in the answer. The check runs after the copy, so anything written in between is honestly reported as outstanding; over a folder somebody or something is actively adding to, there is no moment at which the two sides agree, and asking for one is asking the world to hold still. Measured over a home folder while another writer was working in it, the outstanding list came back holding forty-four files that had not existed when the copy started. Point this at a folder nothing is writing to, or read the list rather than the word.");
  ("SO THE LIST IS THE ANSWER AND THE WORD IS ONLY A SHORTHAND FOR IT BEING EMPTY. A name in it means the two sides differ now; it does not say whether the copy missed the file or the file arrived after the copy had passed. Those are opposite situations - one is a fault and one is ordinary - and telling them apart needs the time the copy began, which is not kept here. A caller who cannot say the source was still throughout should read the names.");
  ("Reading every byte back costs about as long again as the copy did, and longer over many small files, where the cost is in the seeking rather than the reading. Where that is not wanted, the copying half on its own is still there to be called, and the paragraph above says what calling it alone gives up.");
  let copied = await folder_copy_added(folder_from, folder_to);
  let outstanding = await folder_copy_pending(folder_from, folder_to);
  let proven = list_empty_is(outstanding);
  let r = {
    folder_from,
    folder_to,
    proven,
    outstanding,
    copied,
  };
  return r;
}
