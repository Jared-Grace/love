import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_paintings_rows } from "./giveaway_psalms_paintings_rows.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_pictures_passed_over_baseline_path } from "./giveaway_psalms_pictures_passed_over_baseline_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function giveaway_psalms_pictures_passed_over_gate_run() {
  "Gate: no crop starts being passed over for a published name another crop already holds.";
  "★ THE WALK IS RIGHT TO PASS ONE OVER AND WRONG TO BE QUIET ABOUT IT, WHICH IS WHY THE CHECK IS HERE AND NOT THERE. A published name is an address for one file, so when two files reach the same one only one of them can keep it. Refusing the whole record instead would mean no psalm could be given away at all until somebody renamed a file on this disk - one accident on one disk stopping two thousand pictures. So the walk keeps the first and passes the second over, and the cost of that choice is that a picture can lose its only address without anybody being told. This is the telling.";
  "★ IT IS MEASURED AGAINST WHAT IS ALREADY PASSED OVER AND NOT AGAINST NOTHING. Seven crops are passed over today and all seven are byte-identical to the crop that kept the name: a psalm sung twice is timed twice, and the second take's document is given a folder of its own with the take in its name, so the same seven files sit in two folders under one passage. Nothing is lost by those seven, and they cannot be made to go away by code, because the folder is made that way by the writer that copies a document's pictures beside it. A ratchet is what fits a fault that is harmless where it stands and serious wherever it turns up next.";
  "★ HOW MANY PICTURES GOT A NAME TRAVELS OUT WITH THE VERDICT, because a ratchet finding nothing new says the same green word whether every document was read and no new pair appeared, or the walk reached no documents at all. The offender list is pinned at what the record already holds and so cannot fall; the count of named pictures can, and a fall in it while psalms are being timed means the walk has lost the folder rather than that the folder came clean.";
  "What goes in the record is the path of the file that was passed over, not the name it collided on. The name says what was lost; the path says which file on this disk to open, and the whole repair is looking at two files and deciding whether they are the same picture.";
  arguments_assert(arguments, 0);
  let told = await giveaway_psalms_paintings_rows();
  let offenders = property_get(told, "passed_over");
  let rows = property_get(told, "rows");
  let walked = rows.length;
  let path = giveaway_psalms_pictures_passed_over_baseline_path();
  let hint = text_combine_multiple([
    "this crop is passed over for a published name another crop already holds, so it has no address in the giveaway - open both files: if they are the same picture, the duplicate folder is what to remove, and then ask ",
    fn_name("giveaway_psalms_pictures_passed_over_baseline_write"),
    " to drop it; if they are different pictures, rename one of them on this disk so it has an address of its own",
  ]);
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    hint,
    fn_name("giveaway_psalms_pictures_passed_over_baseline_write"),
  );
  return r;
}
