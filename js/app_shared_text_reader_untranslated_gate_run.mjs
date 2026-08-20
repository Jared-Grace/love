import { json_to } from "./json_to.mjs";
import { app_shared_text_reader_apps } from "./app_shared_text_reader_apps.mjs";
import { app_shared_text_reader_untranslated } from "./app_shared_text_reader_untranslated.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_text_reader_untranslated_gate_run() {
  "Gate: in an app that promised to meet its reader in their own language, no word goes onto the page in english straight from where it was typed. Throws so the dispatcher seam exits nonzero.";
  "This is the half the count of sayings cannot reach. That one asks of every saying already going through the picking whether it has been written in each language, and a word that never went near the picking is not a saying it finds short - it is a saying it never met, so it comes out clean while a whole screen stays in english.";
  "It says how many doors it stood at as well as what it found, one line per door, because nothing here can tell a clean app from an unwatched one by the answer alone. Nothing found at nine doors is a good day; nothing found at one door is a page nobody looked at.";
  "Even at every door it is only half a guard, and the half it is not covers a whole way of writing a screen. Words gathered into a record first and read back out at the door are settled while the app runs, so nothing written in the code says what the reader gets, and this passes them by. Its partner reads the sayings themselves and catches those. So a green answer here is a promise about one shape of code and not about the app, and it is the pair that means the app was looked at.";
  let apps = app_shared_text_reader_apps();
  let untranslated = [];
  for (let f_name_app of apps) {
    let scan = await app_shared_text_reader_untranslated(f_name_app);
    let found = property_get(scan, "found");
    let looked = property_get(scan, "looked");
    list_add_multiple(untranslated, found);
    console.log("app  " + f_name_app + "  doors watched  " + json_to(looked));
    for (let one of found) {
      let f_name = property_get(one, "f_name");
      let door = property_get(one, "door");
      let words = property_get(one, "words");
      console.log("english  " + f_name + "  " + door + "  " + words);
    }
  }
  console.log(
    "apps: " + apps.length + "  untranslated: " + untranslated.length,
  );
  if (list_empty_not_is(untranslated)) {
    throw new Error(
      "reader untranslated gate: " +
        untranslated.length +
        " words go onto the page in english in an app that promised its reader another language - each one is named above with where it was typed and which door it leaves by",
    );
  }
  let r = {
    apps: apps.length,
    untranslated: 0,
  };
  return r;
}
