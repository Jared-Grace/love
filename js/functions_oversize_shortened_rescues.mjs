import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_oversize_span_skips } from "./functions_oversize_span_skips.mjs";
import { function_span_cut_shortened_or_null } from "./function_span_cut_shortened_or_null.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
export async function functions_oversize_shortened_rescues() {
  "How many of the runs the cut turns down would be taken if the run were offered ending a line or more earlier, counted across every function standing over the ceiling.";
  "IT SAYS WHETHER OFFERING THE SHORTER RUN IS WORTH BUILDING INTO THE WALK. Every reason the cut steps over a run except the one about where it starts is a reason about the word its last line ends on, so in principle moving that line out answers all of them - and in principle is not a number. What matters is how many of the runs actually turned down have a nameable word waiting one or two lines up, because a run that is turned down again at every length it can be shortened to was never rescued by anything.";
  "THE LINES GIVEN UP ARE COUNTED BESIDE THE RESCUES. A shorter run is a smaller cut, and a rescue that had to walk back five lines to find a word took most of the run away to get there - which is a different offer from one that dropped a single line, and the two should not be read as the same win.";
  "A RESCUE IS COUNTED AGAIN FOR EVERY RUN IT RESCUES, AND THE DISTINCT ONES ARE COUNTED APART FROM IT. The list offers one run per starting line, so every run reaching a given last line ends on the same unnameable word and walks back to the same word above it. Reading the raw count as an amount of work is the mistake that made sixty six refusals look like sixty six problems when they were twenty three choices; the same collapse is done here, keyed on the function and the word walked back from, so what comes back says how many separate places would gain rather than how many offers would change.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED.";
  arguments_assert(arguments, 0);
  let walked = await functions_oversize_span_skips();
  let refused = 0;
  let rescued = 0;
  let dropped = 0;
  let samples = [];
  let places = [];
  for (let row of walked) {
    let f_name = property_get(row, "f_name");
    let skips = property_get(row, "skips");
    for (let offered of skips) {
      let skip = property_get(offered, "skip");
      let taken = null_is(skip);
      if (taken) {
        continue;
      }
      refused = add(refused, 1);
      let address_from = property_get(offered, "address_from");
      let address_to = property_get(offered, "address_to");
      let shorter = await function_span_cut_shortened_or_null(
        f_name,
        address_from,
        address_to,
      );
      let none = null_is(shorter);
      if (none) {
        continue;
      }
      rescued = add(rescued, 1);
      let lost = property_get(shorter, "dropped");
      dropped = add(dropped, lost);
      let place = text_combine_multiple([f_name, " ", address_to]);
      let counted = list_includes(places, place);
      if (not(counted)) {
        list_add(places, place);
      }
      let few = list_size_less_than_value(samples, 6);
      if (few) {
        let value = property_get(shorter, "address_to");
        let said = text_combine_multiple([
          f_name,
          " ",
          address_from,
          " ",
          address_to,
          " -> ",
          value,
        ]);
        list_add(samples, said);
      }
    }
  }
  let r = {
    refused,
    rescued,
    places: list_size(places),
    dropped,
    samples,
  };
  return r;
}
