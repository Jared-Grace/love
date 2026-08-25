import { list_slice_include } from "./list_slice_include.mjs";
import { add } from "./add.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_take } from "./list_take.mjs";
import { js_statements_span_cuttable_is } from "./js_statements_span_cuttable_is.mjs";
import { not } from "./not.mjs";
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
  "THE CUT ITSELF SAYS WHETHER THE SHORTER RUN IS ANY GOOD, rather than a second copy of its reasons being written here. A copy would be free to drift from the tests it is a copy of, and the first thing it would do is offer a run the cut then turns down.";
  "BOTH OF THE CUT'S QUESTIONS ARE ASKED, AND FOR A WHILE ONLY ONE WAS. The cut turns a run down for two quite separate kinds of reason - that the word it ends on would make a poor name, and that pulling those lines out would quietly change what the function does - and only the first was asked here until 2026-08-25. So every run whose shorter form was turned down for the second kind was handed back as rescued, and a reader who took the offer got a throw rather than a refusal. Worked through by hand the day before, eighteen offered places gave eight cuts and seven throws, five of which were this. The second question has its own reading a few doors down and it is asked here now, so what comes back is again what it says it is.";
  "A LINE WITH NO NAME AT ALL IS STEPPED PAST RATHER THAN ASKED ABOUT. A line that binds nothing - a call standing on its own, a line of prose - has no word to address a cut by, and the list of runs never offers one as an ending for that reason. Handing one to the cut anyway is not a refusal but a throw, and it ends the whole walk over a line the walk was only passing through.";
  "A RUN OF ONE IS NOT A RUN, so the walking back stops while two lines are still standing. Cutting a single line out gives a function whose whole body is the line that used to be there.";
  "THE WALK DOES NOT ASK THIS, AND THAT WAS DECIDED RATHER THAN LEFT UNDONE. Read against the whole repo in August 2026 it rescued twenty-nine of sixty-five refused runs, and those twenty-nine collapsed to ten separate places, because every run reaching one unnameable last line walks back to the same word above it. Ten is small, and the names bought at that price were worse than the refusals they removed: one run stepped back off a hoisted word onto clearTimeout, which would have named a cut after the browser call its last line happens to make. A refused run stays uncut and a reader gives it a real name later. A rescued run is written under a worked-out name straight away, and a name in this repo reads as a name somebody chose, so nothing ever questions it again. So this stays a reading somebody asks, and the walk goes on refusing.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED.";
  arguments_assert(arguments, 3);
  let read = await function_body_addressed(f_name);
  let addresses = property_get(read, "addresses");
  let statements = property_get(read, "statements");
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
    if (not(taken)) {
      continue;
    }
    let span = list_slice_include(statements, from, end);
    let after = add(end, 1);
    let tail = list_skip(statements, after);
    let head = list_take(statements, from);
    let cuttable = js_statements_span_cuttable_is(head, span, tail);
    if (not(cuttable)) {
      continue;
    }
    let r = {
      address_from,
      address_to: address_end,
      dropped: subtract(to, end),
    };
    return r;
  }
  return null;
}
