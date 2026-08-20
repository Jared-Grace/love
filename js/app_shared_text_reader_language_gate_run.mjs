import { app_shared_text_reader_language_defects } from "./app_shared_text_reader_language_defects.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_shared_text_reader_language_gate_run() {
  "Gate: a button that says its piece in one language says it in all of them. Throws so the dispatcher seam exits nonzero.";
  "The thing this catches is a page that half turned. Nothing breaks when one saying is left in english - the app runs, the button works, and the only person who sees the fault is the reader, who is also the one person who cannot report it. So it has to be caught here, where a count can see it, rather than there.";
  "It catches a translation left behind by an edit to its english the same way, and for the same reason. That one is worse, because the button then reads as fluent writing rather than as an english word out of place, so the reader cannot even see that anything is wrong.";
  "Each fault says in its own words what it is; the throw only says how many there were. A throw that named one kind of fault would be describing the wrong one every time the count included another.";
  let found = await app_shared_text_reader_language_defects();
  let defects = property_get(found, "defects");
  let languages = property_get(found, "languages");
  let sites = property_get(found, "sites");
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
    sites,
  };
  return r;
}
