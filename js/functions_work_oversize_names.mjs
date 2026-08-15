import { functions_work_oversize_measured } from "./functions_work_oversize_measured.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function functions_work_oversize_names() {
  "Every function holding more lines of work than one may, less the ones something excuses.";
  "The ceiling is read where the measuring happens rather than here, so the gate and anybody asking the question by hand cannot be measuring against two different numbers - which is the way a ceiling quietly stops meaning anything.";
  "An excused function is left out here rather than forgiven downstream, so that the record of who is over the ceiling holds only the ones somebody still has to cut. A name in that record is then a job rather than a fact, and a name that never has to appear costs nobody a reading.";
  let measured = await functions_work_oversize_measured();
  let over = [];
  for (let entry of measured) {
    let excuse = property_get_or_null(entry, "excuse");
    let unexcused_is = null_is(excuse);
    if (unexcused_is) {
      let name = property_get(entry, "name");
      list_add(over, name);
    }
  }
  return over;
}
