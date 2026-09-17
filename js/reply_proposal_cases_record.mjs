import { list_find_property_get } from "./list_find_property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals } from "./reply_proposals.mjs";
import { property_get } from "./property_get.mjs";
import { reply_cases_path } from "./reply_cases_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { json_equal } from "./json_equal.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function reply_proposal_cases_record(title) {
  arguments_assert(arguments, 1);
  ("Writes what one change to the reply rules was measured to answer into the worked cases, for every case of it the corpus already holds, and answers with the messages it changed.");
  ("★ THE ANSWERS WRITTEN ARE THE ONES ON THE SCREEN WHEN THE CHANGE WAS APPROVED, NOT ONES WORKED OUT AGAIN. A change's cases are part of what a person said yes to, so a corpus left saying the old answer turns the gate red for doing exactly what was approved, and a corpus rewritten from whatever the rules now say would record a result nobody looked at. The gate then asks the rules again, so a change that did not do what it was measured to do still shows as red.");
  ("★ ONLY CASES THE CORPUS ALREADY HOLDS ARE WRITTEN, MATCHED ON BOTH THE MESSAGE AND THE WORD FOR THE REAL MESSAGE IT WAS DRAWN FROM. Every message in the corpus is a rewrite of one somebody really sent; a change's own cases also include ones made up to show the rule's edges, and those would put a message nobody sent among the ones people did.");
  ("It looks the change up among every change and not only the waiting ones, because it is asked right after the change goes in, when it has just stopped waiting.");
  let proposals = await reply_proposals();
  let measured = list_find_property_get(proposals, "title", title, "cases");
  let path = reply_cases_path();
  let cases = await file_read_json(path);
  let changed = [];
  for (let one of cases) {
    let from = property_get(one, "from");
    let message = property_get(one, "message");
    for (let wanted of measured) {
      let left = property_get(wanted, "from");
      let same_from = equal(left, from);
      let left2 = property_get(wanted, "message");
      let same_message = equal(left2, message);
      let same = and(same_from, same_message);
      if (not(same)) {
        continue;
      }
      let answered = property_get(wanted, "answered");
      let outputs = property_get(wanted, "outputs");
      let left3 = property_get(one, "answered");
      let left4 = json_equal(left3, answered);
      let left5 = property_get(one, "outputs");
      let right = json_equal(left5, outputs);
      let already = and(left4, right);
      if (already) {
        continue;
      }
      property_set(one, "answered", answered);
      property_set(one, "outputs", outputs);
      list_add(changed, message);
    }
  }
  let none = list_empty_is(changed);
  if (none) {
    return changed;
  }
  let json = json_format_to(cases);
  let text = text_combine(json, "\n");
  await file_overwrite(path, text);
  return changed;
}
