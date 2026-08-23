import { html_error_records_storage_key } from "./html_error_records_storage_key.mjs";
import { html_error_records_keep } from "./html_error_records_keep.mjs";
import { html_error_records_text_limit } from "./html_error_records_text_limit.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_error_record_script() {
  "the few lines baked into every page that write down what went wrong, so that something is left to send once the app is running again";
  "They are written out as page text rather than as one of this repo's functions for the same reason the notice beside them is: they have to be standing BEFORE the app's own script runs. The one failure worth hearing about most is the boot that never got far enough to install anything, and code that never ran writes nothing down.";
  "Written down rather than sent. Sending needs a device id, an initialised connection and the network, none of which a dead boot has - so the record waits in the browser and goes up on the next load, which is the load the Try again button makes anyway.";
  "An error that repeats itself is written once. A page that throws inside something that repeats throws the same error over and over, and ten copies of one fault would push out the nine other faults that are the only reason for keeping ten.";
  "Every line is inside a catch that does nothing. This runs at the one moment when everything else has already failed, so it must not be able to add a second failure to the first - and a device with storage turned off would otherwise throw here on every error it hits.";
  "The address is kept with each record because the same fault on two screens is two different things to look for, and an error carries no note of where it happened.";
  let key = html_error_records_storage_key();
  let input = html_error_records_keep();
  let keep = text_to(input);
  let input2 = html_error_records_text_limit();
  let limit = text_to(input2);
  let code = text_combine_multiple([
    "var app_error_record = function (event) { try { ",
    'var key = "',
    key,
    '"; var keep = ',
    keep,
    "; var limit = ",
    limit,
    "; var list = []; ",
    "try { var held = JSON.parse(window.localStorage.getItem(key)); ",
    "if (held && held.value && held.value.length) { list = held.value; } } catch (parse_failed) {} ",
    "var fault = (event && event.error) || (event && event.reason) || null; ",
    'var text = "error"; ',
    "if (fault && fault.stack) { text = String(fault.stack); } ",
    "else if (fault && fault.message) { text = String(fault.message); } ",
    "else if (event && event.message) { text = String(event.message); } ",
    "else if (fault) { text = String(fault); } ",
    "var record = { text: text.slice(0, limit), ",
    'file: String((event && event.filename) || ""), ',
    "line: (event && event.lineno) || 0, ",
    "url: String(window.location.href), ",
    "when: new Date().toISOString() }; ",
    "var last = list[list.length - 1]; ",
    "if (last && last.text === record.text && last.url === record.url) { return; } ",
    "list.push(record); ",
    "while (list.length > keep) { list.shift(); } ",
    "window.localStorage.setItem(key, JSON.stringify({ value: list })); ",
    "} catch (ignored) {} }; ",
  ]);
  return code;
}
