import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_oversize_span_skips } from "./functions_oversize_span_skips.mjs";
import { function_span_cut_shortened_or_null } from "./function_span_cut_shortened_or_null.mjs";
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
  "THE PLACES COME BACK AS THE ARGUMENTS TO THE CUT RATHER THAN AS A NUMBER. There were ten of them the last time this was read, which is few enough for a reader to work through by hand - and that is the whole reason the walk was left alone: a reading somebody asks for is only worth having over a walk that does it if what it hands back can be run. So each place is the three words the cut takes, with the last one being the shortened address rather than the one that was turned down.";
  "THE LONGEST RUN AT A PLACE IS THE ONE OFFERED. Runs come back longest first, so the first one reaching a given last line is the biggest cut available there, and the ones behind it are the same cut with lines shaved off the front. Every one of them ends on the same unnameable word and walks back to the same word above it, so they differ only in how much they would take.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED.";
  "THE RESCUES ARE NOT ALL TAKEABLE AND THE COUNT CANNOT KNOW IT. Eighteen of these places were worked through by hand on 2026-08-24 and eight of them cut. Of the ten that did not, seven stopped the command outright - four because a function inside the run holds a name the lines below go on using, one because the run reads a name only the lines below bring into being, and two because the word addressed had gone since the list was read - and three were cut and put straight back, because every line of the run only carried a name from one side of it to the other and the piece that came out held no work at all. This reading asks the one guard about the word the run ends on and nothing deeper, so every reason found further in is invisible to it. Wiring the shortened offer into the walk as it stands would stop the walk on the first of the seven.";
  arguments_assert(arguments, 0);
  let walked = await functions_oversize_span_skips();
  let refused = 0;
  let rescued = 0;
  let dropped = 0;
  let keys = [];
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
      let key = text_combine_multiple([f_name, " ", address_to]);
      let counted = list_includes(keys, key);
      if (counted) {
        continue;
      }
      list_add(keys, key);
      let address_shortened = property_get(shorter, "address_to");
      list_add(places, {
        f_name,
        address_from,
        address_to: address_shortened,
      });
    }
  }
  let r = {
    refused,
    rescued,
    dropped,
    places: list_size(places),
    work: places,
  };
  return r;
}
