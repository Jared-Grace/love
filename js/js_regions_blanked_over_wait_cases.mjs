import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function js_regions_blanked_over_wait_cases() {
  arguments_assert(arguments, 0);
  ("Written-out functions handed to the blank-over-a-wait reading, and the regions each one has to come back naming.");
  ("A READING THAT HAS NEVER BEEN SHOWN TO FIRE IS NOT A GREEN GATE, IT IS AN UNTESTED ONE. Finding nothing is what this says about a clean repo and it is also what it says when it has quietly stopped working, and the two are the same word. These hold the difference down: three of them must be found and four must be left alone, so a change that widens the reading into the deliberate cases, or narrows it out of the real ones, cannot pass.");
  ("The four that must be left alone are the ones that fooled it while it was being written. A hub whose bar is emptied because the menu is drawn over it, a picker emptied because it has been answered, a screen that says what is coming before it waits, and a wait written inside a function stored for later - each of those was named as a fault by one draft or another, and each one is correct code.");
  ("The one that says what is coming is the remedy as well as a case. It is the shape every offender is meant to be turned into, so it earns its place twice: it proves the way out reads clean, which is what makes the message on the gate an instruction rather than a complaint.");
  let cases = [
    {
      code: list_join_newline([
        "export async function straight(parent, book) {",
        text_combine_multiple(["  ", fn_name("html_clear"), "(parent);"]),
        "  let rows = await api_rows(book);",
        text_combine_multiple([
          "  ",
          fn_name("html_div_text"),
          "(parent, rows[0]);",
        ]),
        "}",
      ]),
      regions: ["parent"],
      why: "the plain fault: emptied, then a wait, then written into again, so the screen is blank for the whole of the fetch",
    },
    {
      code: list_join_newline([
        "export async function inline_refill(parent, book) {",
        text_combine_multiple(["  ", fn_name("html_clear"), "(parent);"]),
        "  let rows = await api_rows(book);",
        text_combine_multiple([
          "  list_each(rows, (row) => ",
          fn_name("html_div_text"),
          "(parent, row));",
        ]),
        "}",
      ]),
      regions: ["parent"],
      why: "the same fault drawn the ordinary way, with each row put on the screen inside a callback handed straight to the call - the narrower first draft called this clean and it is the commonest drawing there is",
    },
    {
      code: list_join_newline([
        "export async function nested_empty(parent, book, changed) {",
        "  if (changed) {",
        text_combine_multiple(["    ", fn_name("html_clear"), "(parent);"]),
        "  }",
        "  let rows = await api_rows(book);",
        text_combine_multiple([
          "  ",
          fn_name("html_div_text"),
          "(parent, rows[0]);",
        ]),
        "}",
      ]),
      regions: ["parent"],
      why: "emptying only when the chapter actually changed leaves exactly the same blank screen on the runs where it does change, so a guarded emptying counts at the line its block stands on",
    },
    {
      code: list_join_newline([
        "export async function told_first(parent, book) {",
        text_combine_multiple(["  ", fn_name("html_clear"), "(parent);"]),
        text_combine_multiple([
          "  ",
          fn_name("html_div_text"),
          '(parent, "Loading");',
        ]),
        "  let rows = await api_rows(book);",
        text_combine_multiple(["  ", fn_name("html_clear"), "(parent);"]),
        text_combine_multiple([
          "  ",
          fn_name("html_div_text"),
          "(parent, rows[0]);",
        ]),
        "}",
      ]),
      regions: [],
      why: "the remedy: a word written into the region before the wait rather than after it, which is the shape every offender is meant to be turned into, so the gate's own instruction has to read clean here",
    },
    {
      code: list_join_newline([
        "export async function hub(bar, content, context) {",
        text_combine_multiple(["  ", fn_name("html_clear"), "(bar);"]),
        "  let destination = await kept_reference(context);",
        "  panel_open(content, destination);",
        "  async function back() {",
        "    await hub(bar, content, context);",
        "  }",
        "  menu_render(content, back);",
        "}",
      ]),
      regions: [],
      why: "the settings hub empties the reading bar because the menu is drawn over it, and the only later mention of that bar is the argument of the way back out - a function put away to be run later fills nothing now",
    },
    {
      code: list_join_newline([
        "export async function closed(panel, content, choice) {",
        text_combine_multiple(["  ", fn_name("html_clear"), "(panel);"]),
        "  let chosen = await settled(choice);",
        text_combine_multiple([
          "  ",
          fn_name("html_div_text"),
          "(content, chosen);",
        ]),
        "}",
      ]),
      regions: [],
      why: "a picker emptied because it has been answered stays empty on purpose and is never written into again, so emptying followed by a wait is not on its own a fault",
    },
    {
      code: list_join_newline([
        "export function stored_wait(root) {",
        text_combine_multiple(["  ", fn_name("html_clear"), "(root);"]),
        "  async function upload() {",
        "    await send(root);",
        "  }",
        "  button_on(root, upload);",
        "}",
      ]),
      regions: [],
      why: "a wait written inside a function declared here is a promise to wait at some later moment, not a wait happening now, so nothing here leaves the screen blank",
    },
  ];
  return cases;
}
