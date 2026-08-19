import { arguments_assert } from "./arguments_assert.mjs";
import { function_read } from "./function_read.mjs";
import { function_functionize } from "./function_functionize.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_relabel_only_is } from "./js_relabel_only_is.mjs";
import { js_repack_only_is } from "./js_repack_only_is.mjs";
import { null_is } from "./null_is.mjs";
import { function_source_overwrite } from "./function_source_overwrite.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_span_cut_or_undo(
  f_name,
  address_from,
  address_to,
  f_name_new,
) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  "$plain f_name_new";
  arguments_assert(arguments, 4);
  ("Cuts a run of lines out of the named function under a name you give it, then reads what came out and puts everything back exactly as it was if what came out does nothing.");
  ("A run of lines that all lift entries out of a record and hand them on comes out as a function whose whole product is that record taken apart and put back together. It reads as work and is none, and it costs a line for every name it carries. Whether a run is that shape cannot be told from the two lines addressing it, and the only reading that answers for certain is asked of the function that came out - so the cut is made first and judged afterwards.");
  ("The same reading is asked twice over, once of each side of the cut, because a run can be worthless in two opposite ways and only one of them was being caught. A piece that carries names across does no work; neither does a holder left standing with nothing but the call to that piece and the names it hands back. Measured on 2026-08-19, one function was cut twice running and lost no work whatever: fifty-five lines of it went down two levels, the holder in the middle came out as one call and three getters, and the name gained the same word twice over. Nothing went red on the walk itself, because every reading the walk made was about what came out of the cut. The holder is the half nobody was looking at, and a run that is the whole of what its holder still does only ever relabels it.");
  ("Asking the repo's own reading of that shape rather than a fresh one is what keeps the refusal honest. The gate that names these functions afterwards asks exactly this reading, so a cut let through here cannot be one the gate turns down later.");
  ("Undone rather than left, and undone from the text rather than by cutting backwards. The text of the holder is read before anything is written and written back afterwards, so not one character of it differs; the piece that came out was not there before, so removing its file leaves the repo where it started. Putting a cut back by inlining it would work too and would not leave the same file - it renames what it moves - so what looks like an undo would in fact be a second edit to a body somebody is reading.");
  ("It steps over rather than throwing, for the same reason as every other refusal on this walk: a run that is not worth naming is a finding about that run and says nothing about the ones after it.");
  let before = await function_read(f_name);
  await function_functionize(f_name, address_from, address_to, f_name_new);
  let parsed = await function_parse_declaration(f_name_new);
  let declaration = property_get(parsed, "declaration");
  let repack_is = js_repack_only_is(declaration);
  let parsed_holder = await function_parse_declaration(f_name);
  let declaration_holder = property_get(parsed_holder, "declaration");
  let repack_holder_is = js_repack_only_is(declaration_holder);
  ("A holder handing back one thing rather than a record escapes that reading entirely, because it wants a record written out and there is none. So the same question is asked a second way, and the two together cover both kinds of product a holder can have.");
  let relabel_holder_is = js_relabel_only_is(declaration_holder);
  let why = null;
  if (relabel_holder_is) {
    why =
      "the run was the whole of what its holder still did, so what stands there now is the call to the piece and the one thing it hands back - a second name for that piece rather than work of its own. The lines moved and nothing got shorter. Would you like to cut a smaller run, and leave the holder something of its own to do?";
  }
  if (repack_holder_is) {
    why =
      "the run was the whole of what its holder still did, so what stands there now is the call to the piece and the names it hands back - a label on another function rather than work of its own. The lines moved and nothing got shorter, and the name grew a word that narrows nothing. Would you like to cut a smaller run, and leave the holder something of its own to do?";
  }
  if (repack_is) {
    why =
      "everything the run does is lift a name out of a record and hand it on, so the piece that came out held no work at all - each of its lines carried one name from one side of it to the other, and whoever called it could have read those names where they already were. Would you like to look at what the run is actually for, and cut a smaller one that does it?";
  }
  let taken_is = null_is(why);
  if (taken_is) {
    let made = {
      address_to,
      f_name_new,
      cut_is: true,
    };
    return made;
  }
  await function_source_overwrite(f_name, before);
  await function_delete(f_name_new);
  let undone = {
    address_to,
    f_name_new,
    cut_is: false,
    why,
  };
  return undone;
}
