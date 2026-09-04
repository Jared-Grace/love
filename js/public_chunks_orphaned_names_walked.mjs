import { arguments_assert } from "./arguments_assert.mjs";
import { public_chunks_orphaned } from "./public_chunks_orphaned.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { public_chunks_orphaned_noted_not } from "./public_chunks_orphaned_noted_not.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function public_chunks_orphaned_names_walked() {
  "The addresses of the leftover script files across the three folders a build writes into, in order, beside how many script files were opened to find them.";
  "The ratchet beside this one needs both numbers and the writer that seeds it needs only the names, so the two are answered together here and the writer takes the half it wants. A gate saying only how many were left over says the same word on a swept folder and on a folder that has moved, and the count of what was walked is the only part of the answer that falls when the reading stops reaching.";
  "A PIECE AT THE TOP OF THE PUBLISHED FOLDER THAT A PROMOTING NOTE STILL VOUCHES FOR IS LEFT OUT, and the reason is that counting it forbade the only thing that clears it. Such a file may not be deleted - a note describes it, and taking it away refuses the next sending for every app waiting beside it - so the sanctioned way past it is to build its app again through that app's own promoting. Counted here, it named its app, the deployment read that name as the app being at fault, and the promoting was refused; the cure was the one act the record of it forbade. The reading that leaves them out proves the note as it stands rather than assuming it, so a piece the next note stops accounting for comes back as a fault on its own.";
  arguments_assert(arguments, 0);
  let reading = await public_chunks_orphaned();
  let walked = property_get(reading, "walked");
  let nested = property_list_map_property(reading, "folders", "orphaned");
  let flat = list_flat(nested);
  let f_paths = list_map_property(flat, "f_path");
  let kept = await public_chunks_orphaned_noted_not(f_paths);
  let names = list_sort_text(kept);
  let r = {
    walked,
    names,
  };
  return r;
}
