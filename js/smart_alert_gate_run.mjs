import { arguments_assert } from "./arguments_assert.mjs";
import { smart_alert_log_path } from "./smart_alert_log_path.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { text_includes_assert_json } from "./text_includes_assert_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function smart_alert_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no drive on this machine has raised a health warning, and the thing that would write one down is still installed and still writing where this reads.");
  ("Two questions, and the second is what makes the first mean anything. An empty warnings file says nothing on its own - it reads exactly the same whether no warning was ever raised or whether the handler that raises them was removed, renamed, or pointed at some other file. So the handler is read first and the file it appends to is checked against the file read here. Only after that does an empty list mean the drives are well.");
  ("The handler lives outside this repo, under the system's own folder and owned by root, because that is the only place the daemon looks. Nothing in here can install it and nothing in here should try - a person with the machine's password puts it there. What this can do is notice it has stopped being there, which is the failure that would otherwise look identical to good news.");
  ("A red answer here is not about the code and cannot be repaired by changing any. It means a drive said something about its own health. Do not empty the file to make this pass: the file is the only record that the warning happened, the drive does not repeat itself, and a warning cleared unread is worse than one never raised, because afterwards the machine looks checked. Read what it says, act on it, and leave clearing it to the person who owns the machine.");
  let log = smart_alert_log_path();
  let handler_path = text_frozen("/etc/smartmontools/run.d/20local");
  let handler = await file_read_try(handler_path);
  text_is_assert_json(handler, {
    handler_path,
    hint: "the drive-warning handler is not installed, so a warning would be raised into a mailbox nobody reads and this file would stay empty either way - reinstall it before believing an empty warnings file",
  });
  text_includes_assert_json(handler, log, {
    hint: "the installed handler does not write to the file this gate reads, so warnings are being recorded somewhere nothing looks - make the two name the same file",
  });
  let present = await file_exists(log);
  let contents = present ? await file_read_uncached(log) : "";
  let lines = text_split_newline(contents);
  let alerts = list_filter_text_empty_not_is(lines);
  list_empty_is_assert_json(alerts, {
    log,
    hint: "a drive reported a health problem about itself - read these lines, act on them, and do not empty the file to clear this",
  });
  ("Says that both questions were asked, because a gate that answers nothing cannot be told apart from one that did nothing - and that is the whole shape of the fault this exists to catch.");
  let r = {
    handler: handler_path,
    alerts: 0,
  };
  return r;
}
