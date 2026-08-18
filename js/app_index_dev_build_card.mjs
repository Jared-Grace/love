import { text_slash_forward } from "./text_slash_forward.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_page_dev_build_is } from "./app_shared_page_dev_build_is.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { host_local_network_is } from "./host_local_network_is.mjs";
import { app_index_card } from "./app_index_card.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { not } from "./not.mjs";
import { window_go } from "./window_go.mjs";
export function app_index_dev_build_card(root) {
  arguments_assert(arguments, 1);
  ("the card at the very top of the index page that goes to the same page's dev build, from which every app card then opens its own dev build.");
  ("It is here for a phone. A phone has no way in to a dev build except by pecking the whole address out by hand, which takes longer than most of the changes it is meant to check took to make, and one wrong character lands on a blank page that looks exactly like a broken app. One tap cannot be mistyped.");
  ("Shown only on a machine on this same network, the same as the working links it sits with, so a reader of the deployed site is never offered a door into a build that was never meant for them.");
  ("Not shown once the page IS the dev build, because a card that leads to the page it is standing on says nothing and still costs a tap to find out.");
  let local = host_local_network_is();
  let already = app_shared_page_dev_build_is();
  let wanted = local && not(already);
  if (wanted) {
    ("the address is built from the dev folder's own word and this app's own name, so it follows a rename of either instead of having to be noticed and typed again");
    let folder = app_shared_name_dev_text();
    let name2 = fn_name("app_index");
    let name = app_shared_name_prefix_without(name2);
    let file = file_name_html(name);
    let path = list_join_slash_forward([folder, file]);
    ("counted from the top of the site rather than from the page asking, because the dev folder sits at the top and nowhere else. Asked relatively it would be right from the page people see and wrong from the checked-over copy one folder in, which would look for a dev folder inside that copy and find nothing.");
    let root_mark = text_slash_forward();
    let url = text_combine(root_mark, path);
    function opened() {
      "gone to in this tab rather than opened beside it, so the browser's own back button is the way back and a phone is not left with tabs to close";
      window_go(url);
    }
    let label = "Dev builds";
    let text =
      "The same index, opening every app's dev build instead of the built one";
    app_index_card(root, label, text, opened);
  }
}
