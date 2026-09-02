import { arguments_assert } from "./arguments_assert.mjs";
import { smart_unit_name } from "./smart_unit_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_code_ignore_stdout } from "./command_line_code_ignore_stdout.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { smart_devices_monitored } from "./smart_devices_monitored.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function smart_self_test_recent_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every drive in this machine has actually been made to read itself lately, and the record that would say so reaches far enough back for its silence to mean anything.");
  ("A drive reports healthy attributes whether or not it has ever been asked to read its own surface, so a monitor watching only attributes can sit for years beside a platter rotting quietly. The daemon can be told to order a self-test on a schedule, and that is the part with no feedback of its own: a schedule that never fires looks exactly like a schedule that fires and finds nothing wrong. This asks the daemon's own log whether tests are happening at all.");
  ("Four questions, and the first three are what stop the fourth being a lie. Is the daemon running - a stopped daemon orders nothing, and its log is silent for that reason rather than a good one. Does the log reach back past the start of the window - a log that was rotated away yesterday is silent about last week no matter what happened in it, and reading that silence as a verdict is reading the size of a record as the state of a drive. Which drives is the daemon actually watching - without that there is nothing to hold the evidence against. Only then does an empty list of tests mean the tests stopped.");
  ("Every watched drive has to show its own test, and this is the whole reason the question is asked per drive rather than in total. Counting tests across the machine lets one drive that is tested nightly cover for one that has never been tested at all, and the total is healthy the entire time. That is not a hypothetical: when this was first written it counted the whole machine, was green, and the solid-state drive in it had no test of any kind in its record - the spinning drive beside it was answering for both.");
  ("The window is deliberately much longer than the schedule. Short tests are ordered daily and long ones weekly, so a week of history should hold several of each; a machine that was switched off for the hour a test was due simply skips it, and that is normal rather than broken. What a week of complete silence about a drive means is that no test of it has run through any of its chances.");
  ("A red answer is not about the code here and cannot be fixed by editing any. Either some drive is not being tested, or the daemon is down, or the log no longer goes back far enough to tell. Read which of them it said - the message names the drive - and fix the machine rather than the gate.");
  ("This asks the log rather than the drives because reading a drive's own self-test history needs to be root, and a gate that needs a password is a gate that gets skipped. The daemon already writes down what it did, and a record of what happened beats reasoning about what should have.");
  ("The window is quoted with double quotes and no other kind. What runs these commands starts the program directly rather than through a shell, and splits the line itself on a rule that understands double quotes only. Single quotes are ordinary characters to it, so a window written in them arrives as three separate arguments, the command fails, and a runner told to ignore the exit code hands back an empty answer - which reads exactly like a log with nothing in it. That is this gate's own subject repeated one level down, and it was written the wrong way first.");
  let unit = smart_unit_name();
  let since = text_frozen("7 days ago");
  let command = text_combine_multiple(["systemctl is-active ", unit]);
  let active = await command_line_code_ignore_stdout(command);
  ("Compared whole rather than looked for inside the answer. The word for a stopped daemon is the word for a running one with two letters on the front, so asking whether the reply contains the running word answers yes about a daemon that is off. It was written the containing way first, and it would have passed for exactly the failure this gate exists to notice.");
  let left = text_trim(active);
  let right = text_frozen("active");
  equal_assert_json(left, right, {
    unit,
    hint: "the drive-testing daemon is not running, so nothing is ordering self-tests and its log would be quiet for that reason rather than a good one - start it before believing anything else here",
  });
  ("Asks for one entry older than the window opens. Anything at all coming back proves the record covers the whole window; nothing coming back proves only that the record is younger than the question.");
  let command2 = text_combine_multiple([
    'journalctl --until "',
    since,
    '" -n 1 -q --no-pager',
  ]);
  let older = await command_line_code_ignore_stdout(command2);
  let list = text_split_newline(older);
  let older_lines = list_filter_text_empty_not_is(list);
  list_empty_not_is_assert_json(older_lines, {
    since,
    hint: "the system log does not reach back to the start of the window, so it cannot say whether tests ran in it - widen the log's retention or shorten the window, and do not read this silence as an answer about the drives",
  });
  ("A running daemon watching nothing is the third way this could be quiet for a reason that has nothing to do with the drives, so it is refused rather than passed as an empty success.");
  let devices = await smart_devices_monitored();
  list_empty_not_is_assert_json(devices, {
    unit,
    hint: "the daemon is running but is watching no drive that is still plugged into this machine, so there is nothing for it to test and its silence is about that - check what it found when it started",
  });
  let command3 = text_combine_multiple([
    "journalctl -u ",
    unit,
    ' --since "',
    since,
    '" --no-pager',
  ]);
  let journal_text = await command_line_code_ignore_stdout(command3);
  let mapped = text_split_newline(journal_text);
  let part = text_frozen("self-test");
  let tests = list_filter_text_includes(mapped, part);
  ("Every line the daemon writes about a drive opens with that drive's name, so the lines about tests are shared out by looking for the name in them. The last one is kept as well as the count, because a count on its own cannot be told apart from a count of the same stale line repeated.");
  let reports = [];
  let untested = [];
  for (let device of devices) {
    let found = list_filter_text_includes(tests, device);
    let report = {
      device,
      tests: found.length,
      latest: list_last_or_null(found),
    };
    list_add(reports, report);
    let none = list_empty_is(found);
    if (none) {
      list_add(untested, device);
    }
  }
  ("The list of drives with nothing to show has to be the empty one. Written the other way round the first time, which demanded that some drive be untested and so was green exactly when the machine was broken - the same inversion this gate exists to catch, made in the line that catches it.");
  list_empty_is_assert_json(untested, {
    since,
    untested,
    reports,
    hint: "no self-test of these drives has started or finished in the whole window - so the schedule is not reaching them and they are being watched without ever being read; check smartd -q showtests, whether the drive's kind supports scheduled tests at all, and whether -n standby is skipping tests on a spun-down drive",
  });
  let r = {
    unit,
    since,
    reports,
  };
  return r;
}
