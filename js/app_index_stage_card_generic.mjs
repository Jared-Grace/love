import { arguments_assert } from "./arguments_assert.mjs";
import { host_local_network_is } from "./host_local_network_is.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_go } from "./window_go.mjs";
import { app_index_card } from "./app_index_card.mjs";
import { not } from "./not.mjs";
export function app_index_stage_card_generic(root, shown, path, label, text) {
  "The card at the very top of the index page that swaps which copy of the whole site the rest of the page leads to - the dev build or the built one - written once for both directions.";
  "It is here for a phone. A phone has no way from one copy to the other except by pecking the whole address out by hand, which takes longer than most of the changes it is meant to check took to make, and one wrong character lands on a blank page that looks exactly like a broken app. One tap cannot be mistyped.";
  "Shown only on a machine on this same network, the same as the working links it sits with, so a reader of the deployed site is never offered a door into a copy that was never meant for them.";
  "Whether this direction is the one worth offering is decided by the caller and handed over, because the answer is which copy the page is standing in, and a card that leads to the page it is standing on says nothing and still costs a tap to find out.";
  arguments_assert(arguments, 5);
  let local = host_local_network_is();
  let wanted = local && shown;
  if (not(wanted)) {
    return;
  }
  ("counted from the top of the site rather than from the page asking, because the dev folder sits at the top and nowhere else. Asked relatively it would be right from the page people see and wrong from the checked-over copy one folder in, which would look for a dev folder inside that copy and find nothing.");
  let root_mark = text_slash_forward();
  let url = text_combine(root_mark, path);
  function opened() {
    "gone to in this tab rather than opened beside it, so the browser's own back button is the way back and a phone is not left with tabs to close";
    window_go(url);
  }
  app_index_card(root, label, text, opened);
}
