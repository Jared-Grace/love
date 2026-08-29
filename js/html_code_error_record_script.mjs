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
  "★ WHAT WENT WRONG IS WRITTEN DOWN BESIDE WHERE IT WENT WRONG, and it took a browser to show why that is two things. A stack in Chrome opens with the error message; a stack in Firefox does not - so writing the stack down and calling it the record threw the message away on one browser and kept it on the other, and every report that came back from that browser was a column of file names saying nothing about the fault. Both are gathered now, and the message is put in front of the stack only when the stack does not already carry it, so neither browser gets it twice.";
  "The message goes first for a second reason: the record is cut to a length, and a cut takes the tail. What is cut off a message and a stack together should be the deepest frames and never the sentence naming the fault.";
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
    'var text = "error"; var said = ""; if (fault && fault.message) { said = String(fault.message); } else if (event && event.message) { said = String(event.message); } var trace = ""; if (fault && fault.stack) { trace = String(fault.stack); } ',
    'if (trace && said && trace.indexOf(said) < 0) { text = said + "\\n" + trace; } ',
    "else if (trace) { text = trace; } ",
    "else if (said) { text = said; } ",
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
