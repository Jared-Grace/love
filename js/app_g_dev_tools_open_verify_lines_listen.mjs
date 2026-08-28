import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { app_g_dev_tools_open_verify_console_each } from "./app_g_dev_tools_open_verify_console_each.mjs";
export function app_g_dev_tools_open_verify_lines_listen(page, lines) {
  "Start writing down everything the page says while it is being driven - the errors nobody caught and whatever the code printed - so the run can be read afterwards rather than watched.";
  "BOTH ARE LISTENED FOR BEFORE THE PAGE IS ASKED TO GO ANYWHERE, because a page that fails while it is loading says so once and never again, and a listener added after the load would hear silence and report a clean run.";
  "An uncaught error is written down with its own word in front of it, so a reader of the lines can tell a thrown error apart from a line the code chose to print.";
  arguments_assert(arguments, 2);
  function error_each(err) {
    let line = text_combine_multiple(["uncaught  ", err.message]);
    list_add(lines, line);
  }
  page.on("pageerror", error_each);
  function console_each(message) {
    let r = app_g_dev_tools_open_verify_console_each(message, lines);
    return r;
  }
  page.on("console", console_each);
}
