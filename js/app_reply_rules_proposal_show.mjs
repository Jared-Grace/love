import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_reply_rules_file_outstanding_is } from "./app_reply_rules_file_outstanding_is.mjs";
import { or } from "./or.mjs";
import { app_reply_rules_file_card } from "./app_reply_rules_file_card.mjs";
import { app_reply_rules_file_contents } from "./app_reply_rules_file_contents.mjs";
import { app_reply_rules_diff_show } from "./app_reply_rules_diff_show.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { not } from "./not.mjs";
import { app_reply_rules_approve_button } from "./app_reply_rules_approve_button.mjs";
import { app_reply_rules_file_notes } from "./app_reply_rules_file_notes.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_reply_rules_whole_show } from "./app_reply_rules_whole_show.mjs";
import { list_map } from "./list_map.mjs";
import { app_reply_rules_case_approve_show } from "./app_reply_rules_case_approve_show.mjs";
import { app_reply_rules_cases_approved_show } from "./app_reply_rules_cases_approved_show.mjs";
export function app_reply_rules_proposal_show(root, proposal, approvals) {
  arguments_assert(arguments, 3);
  ("One change to the reply rules laid out to be said yes or no to: what it is for, the lines it would alter, the exchanges it was measured to produce, and the questions about it that nobody else can answer.");
  ("★ THE ORDER IS THE ORDER SOMEBODY DECIDES IN, and it is not the order a change is written in. What it does comes first, because a reader who does not want it can stop there. The lines come next, because a reader who does want it has to see that it is small. The exchanges come after the lines rather than before them, because the whole reason to look at the lines is to believe the exchanges. The questions come last, because they are what is left once the change itself has been agreed to.");
  ("The name of the function is said once, across the top of its card, and not again under the title. It is what makes the change findable afterwards and not what the change is about, and a second copy of it directly above the first said nothing the card does not.");
  ("★ THE FILE IS SHOWN WHOLE AND THE NEW FILES ARE SHOWN WHOLE AFTER IT, WHICH IS LONGER TO SCROLL AND IS THE POINT. A few lines either side of a change say what the change is and say nothing about what else is in the file, so anybody wanting to know whether something else is also going on had to leave this screen and open the code - which is the one thing this screen exists to save them. Nothing above is hidden behind a summary, because a summary of a change is the change described by the person proposing it.");
  ("The new files come after the altered one rather than before it, because the altered one is where the change is decided. What a new file holds only matters once somebody has seen the line that starts calling it.");
  ("Lines the change names that the file no longer holds are said in red directly under it, because a change drawn without them is a change that has been quietly shortened. They are put under it rather than over it so that a reader sees what was drawn before being told part of it is missing, and they are the one thing on this screen that means stop rather than read on.");
  ("The questions are numbered by being listed rather than by counting, because they are answered in a message written back and a person answering picks them out by their first few words.");
  let title = property_get(proposal, "title");
  let block = html_div(root);
  html_style_margin_top(block, "2.5em");
  let head = html_p_text(block, title);
  html_style_font_size(head, "1.2em");
  let gray = app_shared_color_gray_dark();
  let f_name = property_get(proposal, "fn");
  let lines = property_get(proposal, "lines");
  let unplaced = property_get(proposal, "unplaced");
  let stale = list_empty_not_is(unplaced);
  ("★ ONLY THE CODE STILL NEEDING A VERDICT IS DRAWN. A file already approved as it stands is a question answered, so its card is left out when the page opens. A file approved in an older wording is drawn again, and so is an altered file with lines missing, however it was approved, because the warning about those lines is the one thing that means stop.");
  let outstanding = app_reply_rules_file_outstanding_is(
    f_name,
    lines,
    approvals,
  );
  if (or(stale, outstanding)) {
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
      app_reply_rules_approve_button(card, f_name, lines, approvals, diff);
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
  function each_file(file) {
    let shown = app_reply_rules_whole_show(block, file, approvals);
    return shown;
  }
  list_map(whole_outstanding, each_file);
  let cases_head = html_p_text(block, "What it would answer");
  html_style_margin_top(cases_head, "1.5em");
  html_style_font_size(cases_head, "0.9em");
  html_font_color_set(cases_head, gray);
  let cases = property_get(proposal, "cases");
  function each_case(one) {
    app_reply_rules_case_approve_show(block, one, approvals);
  }
  list_map(cases, each_case);
  app_reply_rules_cases_approved_show(block, cases, approvals);
  let decide_head = html_p_text(block, "Yours to decide");
  html_style_margin_top(decide_head, "1.5em");
  html_style_font_size(decide_head, "0.9em");
  html_font_color_set(decide_head, gray);
  let decide = property_get(proposal, "decide");
  function each_question(question) {
    let line = html_p_text(block, question);
    html_style_font_size(line, "0.85em");
    return line;
  }
  let asked = list_map(decide, each_question);
  return asked;
}
