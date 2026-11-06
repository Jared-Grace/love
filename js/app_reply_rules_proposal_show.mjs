import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_reply_rules_case_approve_show } from "./app_reply_rules_case_approve_show.mjs";
import { list_map } from "./list_map.mjs";
import { app_reply_rules_cases_wrong_show } from "./app_reply_rules_cases_wrong_show.mjs";
import { app_reply_rules_cases_approved_show } from "./app_reply_rules_cases_approved_show.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_reply_rules_file_outstanding_is } from "./app_reply_rules_file_outstanding_is.mjs";
import { app_reply_rules_file_card } from "./app_reply_rules_file_card.mjs";
import { app_reply_rules_file_contents } from "./app_reply_rules_file_contents.mjs";
import { app_reply_rules_diff_show } from "./app_reply_rules_diff_show.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { not } from "./not.mjs";
import { app_reply_rules_approve_button } from "./app_reply_rules_approve_button.mjs";
import { app_reply_rules_file_notes } from "./app_reply_rules_file_notes.mjs";
import { list_filter } from "./list_filter.mjs";
import { or } from "./or.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { app_reply_rules_whole_show } from "./app_reply_rules_whole_show.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { noop } from "./noop.mjs";
export function app_reply_rules_proposal_show(root, proposal, approvals) {
  arguments_assert(arguments, 3);
  ("One change to the reply rules laid out to be said yes or no to: what it is for, the lines it would alter, the exchanges it was measured to produce, and the questions about it that nobody else can answer.");
  ("★ THE ORDER IS THE ORDER SOMEBODY DECIDES IN, and it is not the order a change is written in. What it does comes first, because a reader who does not want it can stop there. The exchanges come next, because what a reply says can be judged on sight, and a reader who does not want the answers has no need of the code. The files come after them, and the questions come last, because they are what is left once the change itself has been agreed to.");
  ("The name of the function is said once, across the top of its card, and not again under the title. It is what makes the change findable afterwards and not what the change is about, and a second copy of it directly above the first said nothing the card does not.");
  ("★ EVERY FILE IS SHOWN WHOLE, WHICH IS LONGER TO SCROLL AND IS THE POINT. A few lines either side of a change say what the change is and say nothing about what else is in the file, so anybody wanting to know whether something else is also going on had to leave this screen and open the code - which is the one thing this screen exists to save them. Nothing above is hidden behind a summary, because a summary of a change is the change described by the person proposing it.");
  ("The shortest file comes first, whether it is new or altered, so a reader takes in the small pieces before the longer files. An altered file with lines missing comes before them all, because its warning means stop.");
  ("Lines the change names that the file no longer holds are said in red directly under it, because a change drawn without them is a change that has been quietly shortened. They are put under it rather than over it so that a reader sees what was drawn before being told part of it is missing, and they are the one thing on this screen that means stop rather than read on.");
  ("The questions are numbered by being listed rather than by counting, because they are answered in a message written back and a person answering picks them out by their first few words.");
  let title = property_get(proposal, "title");
  let block = html_div(root);
  html_style_margin_top(block, "2.5em");
  let head = html_p_text(block, title);
  html_style_font_size(head, "1.2em");
  let gray = app_shared_color_gray_dark();
  let cases_head = html_p_text(block, "What it would answer");
  html_style_margin_top(cases_head, "1.5em");
  html_style_font_size(cases_head, "0.9em");
  html_font_color_set(cases_head, gray);
  let cases = property_get(proposal, "cases");
  function each_case(one) {
    app_reply_rules_case_approve_show(block, one, approvals);
  }
  list_map(cases, each_case);
  let wrong = property_get(proposal, "wrong");
  app_reply_rules_cases_wrong_show(block, wrong);
  app_reply_rules_cases_approved_show(block, cases, approvals);
  let f_name = property_get(proposal, "fn");
  let lines = property_get(proposal, "lines");
  let unplaced = property_get(proposal, "unplaced");
  let stale = list_empty_not_is(unplaced);
  ("★ ONLY THE CODE STILL NEEDING A VERDICT IS DRAWN. A file already approved as it stands is a question answered, so its card is left out when the page opens. A file approved in an older wording is drawn again, and so is an altered file with lines missing, however it was approved, because the warning about those lines is the one thing that means stop.");
  ("The name of a verdict is worked out on the server and handed down, the same as a test's, because working it out needs a hash the browser does not have.");
  let changed_approval = property_get(proposal, "changed_approval");
  let changed_name = property_get(changed_approval, "name");
  let changed_lines = property_get(changed_approval, "lines");
  let outstanding = app_reply_rules_file_outstanding_is(
    changed_name,
    changed_lines,
    approvals,
  );
  function changed_show() {
    let card = app_reply_rules_file_card(block, "changed file", f_name);
    let diff = app_reply_rules_file_contents(card);
    app_reply_rules_diff_show(diff, lines);
    if (stale) {
      let warned = html_p_text(
        card,
        "These lines are written into the change and are no longer in the file, so the change above is drawn without them and cannot be trusted as it stands:",
      );
      html_style_margin_top(warned, "1.5em");
      html_style_font_size(warned, "0.9em");
      let color = app_shared_color_red();
      html_font_color_set(warned, color);
      app_reply_rules_diff_show(card, unplaced);
    }
    ("★ THE ALTERED FILE IS OFFERED NO VERDICT WHILE ANY OF ITS LINES ARE MISSING. What is drawn above in that case is the change with a piece taken out of it, and a yes recorded against it would be a yes to something nobody was shown. It is the one place on this bench where the button is withheld rather than left to the reader, because the reader cannot see what is not there.");
    let whole_shown = not(stale);
    if (whole_shown) {
      app_reply_rules_approve_button(
        card,
        changed_name,
        changed_lines,
        approvals,
        diff,
      );
    }
    app_reply_rules_file_notes(card, f_name);
  }
  let whole = property_get(proposal, "whole");
  function file_outstanding_is(file) {
    let name = property_get(file, "name");
    let file_lines = property_get(file, "lines");
    let r = app_reply_rules_file_outstanding_is(name, file_lines, approvals);
    return r;
  }
  let whole_outstanding = list_filter(whole, file_outstanding_is);
  let shows = [];
  if (or(stale, outstanding)) {
    let size = list_size(lines);
    if (stale) {
      size = 0;
    }
    list_add(shows, {
      size,
      show: changed_show,
    });
  }
  function each_file(file) {
    function file_show() {
      app_reply_rules_whole_show(block, file, approvals);
    }
    let file_lines = property_get(file, "lines");
    list_add(shows, {
      size: list_size(file_lines),
      show: file_show,
    });
  }
  list_map(whole_outstanding, each_file);
  function show_size(one) {
    let size = property_get(one, "size");
    return size;
  }
  list_sort_number_mapper(shows, show_size);
  for (let one of shows) {
    one.show();
  }
  ("The questions stay shut under one line that says how many there are, because a verdict does not wait on any of them, and each change on the page was otherwise followed by a wall of them. With none, nothing is drawn.");
  let decide = property_get(proposal, "decide");
  let none = list_empty_is(decide);
  if (none) {
    let r2 = [];
    return r2;
  }
  let decide_size = list_size(decide);
  let decide_title = text_combine_multiple([
    "Yours to decide (",
    decide_size,
    ")",
  ]);
  let fold = app_shared_container_blue_collapsible(block, decide_title, noop);
  let decide_body = property_get(fold, "body");
  let collapsed_set = property_get(fold, "collapsed_set");
  collapsed_set(true);
  function each_question(question) {
    let line = html_p_text(decide_body, question);
    html_style_font_size(line, "0.85em");
    return line;
  }
  let asked = list_map(decide, each_question);
  return asked;
}
