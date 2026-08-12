import { fn_name } from "./fn_name.mjs";
import { functions_page_serialized_report } from "./functions_page_serialized_report.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { each_async } from "./each_async.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_page_serialized_imported_gate_run() {
  "QA gate: a function sent to a browser from another file borrows no name from this repo.";
  "The gate beside this one reads a function sent to a browser and asks whether it uses an import of the file it was written in. That question can only be asked of a function written where it is sent. A function imported by name from a file of its own is handed over exactly the same way, and until this was written neither file said anything: the sender does not hold the code, and the file holding it mentions no browser at all.";
  "So the question is asked of the far file instead, and asked in the simplest form there is: does that function import anything. The repo's normalizing pass never writes a name into a line without adding the import for it, so no imports is the same statement as nothing borrowed - and over in the page, where none of this repo's names exist, one borrowed name is a line that throws where nothing is reading.";
  ("It stands at zero. Nothing in the repo sends a function from another file today, and the reader it rests on is held to the corpus in ",
    fn_name("js_page_serialized_imported_names_cases"),
    " so a green here cannot come from a reader that stopped looking.");
  ("Throws so the dispatcher seam exits nonzero.");
  let exposed = await functions_page_serialized_report();
  let broken = [];
  async function sender_each(one) {
    let sender = property_get(one, "name");
    let imported = property_get(one, "imported");
    async function name_each(sent) {
      let borrowed = await function_imports(sent);
      let some = list_empty_not_is(borrowed);
      if (some) {
        let entry = {
          sender,
          sent,
          borrowed,
        };
        list_add(broken, entry);
      }
    }
    await each_async(imported, name_each);
  }
  await each_async(exposed, sender_each);
  list_empty_is_assert_json(broken, {
    hint: "a function sent to a browser from another file is reading names imported into that file - they do not exist where it runs. keep the browser code as a string instead: a function named ending in _script that returns its source, handed over as page.evaluate(that_script()), cannot be rewritten by anything that reads code",
    broken,
  });
  let r = {
    exposed: list_size(exposed),
  };
  return r;
}
