import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter_property_path } from "./list_filter_property_path.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_reply_rules_proposal_show } from "./app_reply_rules_proposal_show.mjs";
import { list_map } from "./list_map.mjs";
import { app_reply_rules_corpus_show } from "./app_reply_rules_corpus_show.mjs";
import { app_shared_buttons_mark_current } from "./app_shared_buttons_mark_current.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_reply_rules_preview() {
  arguments_assert(arguments, 0);
  ("Changes to the reply rules waiting to be said yes or no to, on the sandbox app at hash reply_rules: each one showing the lines it would alter, the exchanges it was measured to produce, and the real messages those were drawn from - with the whole worked corpus behind a second button.");
  ("★ THE REPLIES GO OUT UNDER ONE PERSON'S NAME, SO THIS SCREEN EXISTS TO BE READ BEFORE THE CODE MOVES AND NOT AFTER. A change made and then described is a change that has already spoken for somebody. Written down and drawn here, it can be read on a phone, argued with, and turned down, and nothing in the rules has been touched the whole time.");
  ("★ IT RUNS ON THE SERVING MACHINE AND SHOWS THE ANSWER HERE, which is the only way the real messages can be beside the rewritten ones. The messages are kept in a folder outside every repo that nothing serves; the cases are in the public one; the word joining the two is worked out by hashing on the machine. So this works on the dev server and nowhere else, and that is the point rather than a limitation.");
  ("★ THE TWO BUTTONS ARE TWO JOBS AND NOT TWO VIEWS OF ONE. The changes are a decision to make; the corpus is a thing to check is still true. Run together as one long page the decision is buried a long way down and gets made without the check, or the check is skipped because the decision was what somebody came for.");
  ("The count of cases that have stopped matching is said on the button rather than found by scrolling, because it is the one number that should stop somebody approving a change today.");
  ("Everything is asked for once, when the page opens, and choosing between the two redraws from what is already held. Choosing is then instant and asks the machine nothing.");
  let root = html_body_div();
  html_font_sans_serif_set_html();
  html_style_overflow_wrap(root, "anywhere");
  html_p_text(root, "Changes to the reply rules, waiting on you.");
  let status = html_p_text(root, "Reading...");
  let chooser = html_div(root);
  let listed = html_div(root);
  let f = fn_name("reply_proposals_shown");
  let shown = await app_shared_api_named(f, []);
  let proposals = property_get(shown, "proposals");
  let cases = property_get(shown, "cases");
  let count_proposals = list_size(proposals);
  let count_cases = list_size(cases);
  let names_ok = ["ok"];
  let wrong = list_filter_property_path(cases, names_ok, false);
  let count_wrong = list_size(wrong);
  let counted = word_count_pluralize(count_proposals, "change");
  let counted_cases = word_count_pluralize(count_cases, "worked case");
  let counted_wrong = word_count_pluralize(count_wrong, "case");
  let said = text_combine_multiple([
    counted,
    " waiting, measured against ",
    counted_cases,
    ", ",
    counted_wrong,
    " no longer matching.",
  ]);
  html_text_content_set(status, said);
  let buttons = [];
  let sides = [true, false];
  function side_show(wanted) {
    html_clear(listed);
    if (wanted) {
      function each_shown(proposal) {
        let drawn = app_reply_rules_proposal_show(listed, proposal);
        return drawn;
      }
      list_map(proposals, each_shown);
    }
    if (not(wanted)) {
      app_reply_rules_corpus_show(listed, cases);
    }
    app_shared_buttons_mark_current(buttons, sides, wanted);
  }
  function side_changes() {
    side_show(true);
  }
  function side_cases() {
    side_show(false);
  }
  let t_proposals = text_from_number(count_proposals);
  let t_cases = text_from_number(count_cases);
  let label_changes = text_combine_multiple([
    "changes waiting (",
    t_proposals,
    ")",
  ]);
  let label_cases = text_combine_multiple(["worked cases (", t_cases, ")"]);
  let button_changes = app_shared_button_uncolored(
    chooser,
    label_changes,
    side_changes,
  );
  let button_cases = app_shared_button_uncolored(
    chooser,
    label_cases,
    side_cases,
  );
  list_add_multiple(buttons, [button_changes, button_cases]);
  side_show(true);
}
