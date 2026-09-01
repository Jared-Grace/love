import { arguments_assert } from "./arguments_assert.mjs";
import { folder_copy_added } from "./folder_copy_added.mjs";
import { folder_copy_pending } from "./folder_copy_pending.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function folder_copy_added_proven(folder_from, folder_to) {
  arguments_assert(arguments, 2);
  ("$plain folder_from");
  ("$plain folder_to");
  ("Copies one folder into another without taking anything away, then reads the bytes on both sides to prove it, and answers whether anything was still outstanding along with what.");
  ("THE PROOF IS PART OF THE STEP RATHER THAN A SECOND THING TO REMEMBER. The copying half reports what it believes it wrote, and a report from the writer is precisely the evidence a damaged copy would also produce. The checking half reads both sides and cannot be misled that way. Left as two separate commands they are two separate habits, and the second one is the one that gets skipped on the day the first says it worked.");
  ("A SOURCE THAT IS STILL BEING WRITTEN TO CAN NEVER COME BACK PROVEN, and that is a limit of the question rather than a fault in the answer. The check runs after the copy, so anything written in between is honestly reported as outstanding; over a folder somebody or something is actively adding to, there is no moment at which the two sides agree, and asking for one is asking the world to hold still. Measured over a home folder while another writer was working in it, the outstanding list came back holding forty-four files that had not existed when the copy started. Point this at a folder nothing is writing to, or read the list rather than the word.");
  ("SO THE LIST IS THE ANSWER AND THE WORD IS ONLY A SHORTHAND FOR IT BEING EMPTY. A name in it means the two sides differ now; it does not say whether the copy missed the file or the file arrived after the copy had passed. Those are opposite situations - one is a fault and one is ordinary - and telling them apart needs the time the copy began, which is not kept here. A caller who cannot say the source was still throughout should read the names.");
  ("Reading every byte back costs about as long again as the copy did, and longer over many small files, where the cost is in the seeking rather than the reading. That is affordable exactly when the copy is worth making at all - a backup nobody has checked is a belief rather than a copy - and where it is not wanted, the copying half on its own is still there to be called.");
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
