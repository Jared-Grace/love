import { ai_git_noted } from "./ai_git_noted.mjs";
import { each_async } from "./each_async.mjs";
import { function_auto_decline_add } from "./function_auto_decline_add.mjs";
import { function_auto_declined_is } from "./function_auto_declined_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_page_serialized_report } from "./functions_page_serialized_report.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_page_serialized_decline() {
  "Writes the leave-me-alone request into every function that hands work to a browser and is not already asking";
  "A function sent to a browser is sent as text, so the names this repo keeps are not there when it runs. A pass that rewrote one of its lines has broken it where nothing looks - the failure arrives as a browser test going wrong, and no reading of this repo would show the cause";
  "The set is asked for rather than listed, because the danger is a property of the file and not of the twelve files that happen to have it today. A test written next week that drives a page is exposed the moment it is written, and a list would have to be remembered; this is asked again every time it runs";
  "Five of these were found the slow way - a repair pass picked them up, changed nothing, and reported them as still waiting, twice in a row. That is the whole cost of the request having no reader, paid once per person who runs the repair. The other seven had nothing written at all, and would have been found the fast way, by something breaking";
  "Declining is the safe direction and that is why this is safe to run unasked. The worst it costs is that a file stays uncanonicalized and so stays invisible to the duplication gate; the worst not doing it costs is code that is wrong in a browser and right everywhere a gate can read";
  "Whether any particular request is still a good one is left alone. Some of these may one day be safe again, and reading a body to find out is a judgment somebody makes one function at a time";
  await ai_git_noted();
  let exposed = await functions_page_serialized_report();
  let declined = [];
  let already = [];
  async function lambda(one) {
    let f_name = property_get(one, "name");
    let asked_off = await function_auto_declined_is(f_name);
    if (asked_off) {
      list_add(already, f_name);
      return;
    }
    let args = [f_name, "BROWSER-SERIALIZED"];
    await function_call_commit(function_auto_decline_add, args);
    list_add(declined, f_name);
  }
  await each_async(exposed, lambda);
  let r = {
    declined,
    already,
  };
  return r;
}
