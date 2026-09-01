import { arguments_assert } from "./arguments_assert.mjs";
import { folder_copy_added } from "./folder_copy_added.mjs";
import { folder_copy_pending } from "./folder_copy_pending.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function folder_copy_added_proven(folder_from, folder_to) {
  arguments_assert(arguments, 2);
  ("$plain folder_from");
  ("$plain folder_to");
  ("Copies one folder into another without taking anything away, then reads the bytes on both sides to prove it, and answers whether the proof held along with any file that still does not match.");
  ("THE PROOF IS PART OF THE STEP RATHER THAN A SECOND THING TO REMEMBER. The copying half reports what it believes it wrote, and a report from the writer is precisely the evidence a damaged copy would also produce. The checking half reads both sides and cannot be misled that way. Left as two separate commands they are two separate habits, and the second one is the one that gets skipped on the day the first says it worked.");
  ("AN EMPTY OUTSTANDING LIST IS THE WHOLE OF THE CLAIM. Anything named in it is a file that arrived wrong, and a caller who reads only the word saying it was proven and not the list has learned nothing the copier had not already told them.");
  ("Reading every byte back costs about as long again as the copy did. That is affordable exactly when the copy is worth making at all - a backup nobody has checked is a belief rather than a copy - and where it is not wanted, the copying half on its own is still there to be called.");
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
