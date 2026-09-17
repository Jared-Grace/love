import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_rules_file_card } from "./app_reply_rules_file_card.mjs";
import { html_div } from "./html_div.mjs";
import { app_reply_rules_diff_show } from "./app_reply_rules_diff_show.mjs";
import { app_reply_rules_approve_button } from "./app_reply_rules_approve_button.mjs";
export function app_reply_rules_whole_show(root, file, approvals) {
  arguments_assert(arguments, 3);
  ("One file a change would bring into being, drawn under its name with every line of it marked as arriving.");
  ("★ IT IS SHOWN WHOLE BECAUSE THERE IS NO OTHER COPY OF IT TO GO AND LOOK AT. A change to a function that already exists can be read as a few lines, because the reader can open the file if they want the rest; a file that does not exist yet has no rest to open. Showing a summary of it would be showing the only account there is, and calling it a summary.");
  ("The name is said above it rather than beside it, because the lines below are long and a name at the side of a long line is a name that has scrolled away.");
  let name = property_get(file, "name");
  let lines = property_get(file, "lines");
  let card = app_reply_rules_file_card(root, "new file", name);
  let diff = html_div(card);
  app_reply_rules_diff_show(diff, lines);
  ("The verdict is asked for under the file rather than beside its name, because a reviewer reaches it by getting to the bottom of what they are being asked about. A button at the top can be pressed on the way past.");
  let asked = app_reply_rules_approve_button(
    card,
    name,
    lines,
    approvals,
    diff,
  );
  return asked;
}
