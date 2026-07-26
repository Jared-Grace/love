import { markers_names } from "./markers_names.mjs";
import { markers_unresolved } from "./markers_unresolved.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function markers_gate_run() {
  "Gate: every mark that can be written in a function body still names a live reader. Throws so the dispatcher seam exits nonzero.";
  "A mark is explicit where a naming rule is not, and this is the price of that. A rule cannot go stale because nothing writes it down; a mark is written down in two places at once - in the body that carries it and in the list that knows it - and either can drift from the function it names. What makes a mark worth more than a sentence of prose is only ever that something checks it, and this is that something.";
  let marker_names = markers_names();
  let unresolved = await markers_unresolved(marker_names);
  for (let one of unresolved) {
    let mark_name = property_get(one, "mark_name");
    let missing = property_get(one, "missing");
    console.log("unresolved  " + mark_name + "  names no live  " + missing);
  }
  console.log("marker defects: " + unresolved.length);
  if (list_empty_not_is(unresolved)) {
    throw new Error(
      "markers gate: " +
        unresolved.length +
        " marks name no live function - was a reader renamed, and should the mark follow it?",
    );
  }
  let r = {
    markers: marker_names.length,
    unresolved: 0,
  };
  return r;
}
