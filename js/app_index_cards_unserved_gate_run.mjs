import { app_index_cards_unserved } from "./app_index_cards_unserved.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_index_cards_unserved_gate_run() {
  "Gate: every app the front page offers has something standing at its address in the folder that goes live, so no card leads a visitor to a page that is not there.";
  "Against zero rather than against a baseline: a card leading nowhere is wrong in every case, and the repair is always one of three small things - promote the app, forward its address, or take the card off.";
  let unserved = await app_index_cards_unserved();
  list_empty_is_assert_json(unserved, {
    hint: "the front page offers these apps and nothing is served at their address - promote the app, forward the address, or take the card off the front page",
  });
}
