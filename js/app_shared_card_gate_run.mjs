import { app_shared_card_defects } from "./app_shared_card_defects.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_shared_card_gate_run() {
  "QA gate: no app asks for a link card it cannot deliver. Read-only.";
  "Measured against nothing rather than against a record of today, because neither fault is a thing anybody chose. A picture with no file and a picture with no sentence are both an unfinished edit, and there is no reading of either where leaving it is right.";
  "This is the half of the card that a machine can settle. Whether an app OUGHT to have a sentence is a judgment about who the app is for, and most of these are tools nobody shares a link to; that half is not asked here.";
  "Throws so the dispatcher seam exits nonzero.";
  "How many apps were opened travels out with the verdict. Nothing wrong is what this says on a good day, and it is also what it would say if the list of apps arrived empty, so the count is the only part of the answer telling the two apart.";
  let swept = await app_shared_card_defects();
  let walked = property_get(swept, "walked");
  let defects = property_get(swept, "defects");
  list_empty_is_assert_json(defects, {
    defects,
    hint: "an app names a card picture it cannot show - see each hint",
  });
  let r = {
    walked,
    defects: 0,
  };
  return r;
}
