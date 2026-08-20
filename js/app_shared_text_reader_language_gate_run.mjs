import { app_shared_text_reader_language_defects } from "./app_shared_text_reader_language_defects.mjs";
import { json_to } from "./json_to.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_shared_text_reader_language_gate_run() {
  "Gate: a button that says its piece in one language says it in all of them. Throws so the dispatcher seam exits nonzero.";
  "The thing this catches is a page that half turned. Nothing breaks when one saying is left in english - the app runs, the button works, and the only person who sees the fault is the reader, who is also the one person who cannot report it. So it has to be caught here, where a count can see it, rather than there.";
  "It catches a translation left behind by an edit to its english the same way, and for the same reason. That one is worse, because the button then reads as fluent writing rather than as an english word out of place, so the reader cannot even see that anything is wrong.";
  "Each fault says in its own words what it is; the throw only says how many there were. A throw that named one kind of fault would be describing the wrong one every time the count included another.";
  "It says how many sayings came through each way of picking as well as how many were faulty, because no fault found has two readings and they are opposite. Every saying in the folder in order reads exactly like a reading that never recognised a single call, and a count of faults cannot be asked which one it is looking at. A way of picking standing at nothing is the tell.";
  "That still leaves it half a guard, and the half it is not is words that never went near a way of picking at all. Those are not sayings counted short - they were never met, so nothing here can be short about them. Its partner walks the places words leave by and names those. A green answer here is a promise about the sayings, not about the app.";
  let found = await app_shared_text_reader_language_defects();
  let defects = property_get(found, "defects");
  let languages = property_get(found, "languages");
  let picked = property_get(found, "picked");
  let sites = property_get(found, "sites");
  console.log("ways of picking watched  " + json_to(picked));
  for (let one of defects) {
    let file = property_get(one, "file");
    let reason = property_get(one, "reason");
    console.log("saying  " + file + "  " + reason);
  }
  console.log(
    "sayings: " +
      sites +
      "  languages: " +
      languages +
      "  defects: " +
      defects.length,
  );
  if (list_empty_not_is(defects)) {
    throw new Error(
      "reader language gate: " +
        defects.length +
        " sayings are not ready to be read in every language this app offers - each one is named above with what is the matter with it",
    );
  }
  let r = {
    defects: 0,
    languages,
    picked,
    sites,
  };
  return r;
}
