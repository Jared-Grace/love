import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_name } from "./random_seed_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_screens_seed_script() {
  "the browser-side line that leaves a seed on a page before any of the page's own code runs, kept as a STRING (must not be canonicalized)";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "it runs again on every address the crawl opens, and it always leaves the SAME seed. Carrying the run forward from one screen into the next would mean a lesson that draws one more number than it used to shifts the words on every screen after it as well, so one change would read as hundreds. Starting each screen from the same place keeps a changed screen to the screen that actually changed.";
  "the seed is a number well inside the range rather than a small one, because the first few numbers a seeded run gives back from a small seed are all close to nought - which would have every screen making its first choice from the very front of whatever list it is choosing out of";
  arguments_assert(arguments, 0);
  let name = random_seed_name();
  let script = text_combine_multiple(['globalThis["', name, '"] = 1234567;']);
  return script;
}
