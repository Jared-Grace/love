import { arguments_assert } from "./arguments_assert.mjs";
import { smart_alert_log_path } from "./smart_alert_log_path.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { file_executable_is } from "./file_executable_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_includes_assert_json } from "./text_includes_assert_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function smart_alert_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no drive on this machine has raised a health warning, and the thing that would write one down is still installed, still allowed to run, and still writing where this reads.");
  ("Three questions, and the last two are what make the first mean anything. An empty warnings file says nothing on its own - it reads exactly the same whether no warning was ever raised or whether the handler that raises them was removed, renamed, pointed at some other file, or left in place unable to run. So the handler is read first, then checked for the mark that lets it be run at all, then the file it appends to is checked against the file read here. Only after all three does an empty list mean the drives are well.");
  ("The third question is the one that looks least necessary and is the easiest to fail. What the daemon runs on a warning does not run the scripts in that folder itself - it hands the folder to the thing that runs every script in a folder, and that thing walks straight past any file not marked as runnable, saying nothing at all. So a handler restored from an archive that did not keep the marks, or copied into place by a hand that copied only the text, is installed and correct and dead, and every reading here except this one calls it healthy.");
  ("The handler lives outside this repo, under the system's own folder and owned by root, because that is the only place the daemon looks. Nothing in here can install it and nothing in here should try - a person with the machine's password puts it there. What this can do is notice it has stopped being there, which is the failure that would otherwise look identical to good news.");
  ("A red answer on the warnings themselves is not about the code and cannot be repaired by changing any. It means a drive said something about its own health. Do not empty the file to make this pass: the file is the only record that the warning happened, the drive does not repeat itself, and a warning cleared unread is worse than one never raised, because afterwards the machine looks checked. Read what it says, act on it, and leave clearing it to the person who owns the machine.");
  let log_path = smart_alert_log_path();
  let handler_path = text_frozen("/etc/smartmontools/run.d/20local");
  let handler = await file_read_try(handler_path);
  text_is_assert_json(handler, {
    handler_path,
    hint: "the drive-warning handler is not installed, so a warning would be raised into a mailbox nobody reads and this file would stay empty either way - reinstall it before believing an empty warnings file",
  });
  let runnable = await file_executable_is(handler_path);
  assert_json(runnable, {
    handler_path,
    hint: "the drive-warning handler is installed but not marked as runnable, and what runs the scripts in that folder skips such a file in silence - so a warning would be raised and nothing would write it down. Give it the mark back on the machine itself, since this repo does not own that file",
  });
  text_includes_assert_json(handler, log_path, {
    hint: "the installed handler does not write to the file this gate reads, so warnings are being recorded somewhere nothing looks - make the two name the same file",
  });
  let present = await file_exists(log_path);
  let contents = present ? await file_read_uncached(log_path) : "";
  let lines = text_split_newline(contents);
  let alerts = list_filter_text_empty_not_is(lines);
  list_empty_is_assert_json(alerts, {
    log: log_path,
    hint: "a drive reported a health problem about itself - read these lines, act on them, and do not empty the file to clear this",
  });
  ("Says that all three questions were asked, because a gate that answers nothing cannot be told apart from one that did nothing - and that is the whole shape of the fault this exists to catch.");
  let r = {
    handler: handler_path,
    runnable,
    alerts: 0,
  };
  return r;
}
