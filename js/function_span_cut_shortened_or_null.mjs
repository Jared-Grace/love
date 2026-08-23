import { arguments_assert } from "./arguments_assert.mjs";
import { function_body_addressed } from "./function_body_addressed.mjs";
import { function_span_cut_skip_or_null } from "./function_span_cut_skip_or_null.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { null_is } from "./null_is.mjs";
export async function function_span_cut_shortened_or_null(
  f_name,
  address_from,
  address_to,
) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  "The same run ending a line or more earlier, where that shorter run is one the cut would take and the run as offered is not - or nothing, where no shorter run is any better.";
  "A RUN IS TURNED DOWN FOR ITS LAST WORD, AND THE LAST WORD IS A LINE. Every reason the cut steps over a run except the one about where it starts is a reason about the word its final line ends on, and moving that line out of the run answers all of them at once without anybody choosing anything. Measured over the whole repo, eighteen of the seventy-one runs turned down ended on a word a pass had handed out or a person had left as a placeholder - words that were never a name and never going to become one by being asked about again.";
  "THE LIST OF RUNS OFFERS ONE PER STARTING LINE AND ONLY THE BEST ONE, so the shorter run is not somewhere further down the list waiting to be found. It is not on the list at all, and this is the only reading that can put it back.";
  "THE CUT ITSELF SAYS WHETHER THE SHORTER RUN IS ANY GOOD, rather than a second copy of its reasons being written here. A copy would be free to drift from the seven tests it is a copy of, and the first thing it would do is offer a run the cut then turns down.";
  "A LINE WITH NO NAME AT ALL IS STEPPED PAST RATHER THAN ASKED ABOUT. A line that binds nothing - a call standing on its own, a line of prose - has no word to address a cut by, and the list of runs never offers one as an ending for that reason. Handing one to the cut anyway is not a refusal but a throw, and it ends the whole walk over a line the walk was only passing through.";
  "A RUN OF ONE IS NOT A RUN, so the walking back stops while two lines are still standing. Cutting a single line out gives a function whose whole body is the line that used to be there.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED.";
  arguments_assert(arguments, 3);
  let read = await function_body_addressed(f_name);
  let addresses = property_get(read, "addresses");
  let from = list_index_of(addresses, address_from);
  let to = list_index_of(addresses, address_to);
  let start = subtract(to, 1);
  for (let end = start; less_than(from, end); end--) {
    let address_end = list_get(addresses, end);
    let nameless = null_is(address_end);
    if (nameless) {
      continue;
    }
    let skip = await function_span_cut_skip_or_null(
      f_name,
      address_from,
      address_end,
    );
    let taken = null_is(skip);
    if (taken) {
      let r = {
        address_from,
        address_to: address_end,
        dropped: subtract(to, end),
      };
      return r;
    }
  }
  return null;
}
