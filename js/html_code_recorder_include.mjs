import { html_code_element } from "./html_code_element.mjs";
export function html_code_recorder_include() {
  "On a /dev/ path only, and only when the address asks for it, bring in the page recorder - the watcher that writes down what the page saw and hands it to this machine, so a fault that only happens on a phone can be read here instead of read aloud off a small screen.";
  "It is asked for by putting record in the address before the hash - code.html?record=1 - rather than by a switch in a file, because the person who needs it is holding the phone and the only thing they can change from there is the address. The hash is where these apps keep what is on the screen, so the question is asked in the part of the address the app does not read.";
  "The phone remembers the answer, so the address only has to carry it once. Asking through the address alone failed in practice: a phone offers the address it already knows as you type, so the part that turns the watcher on quietly went missing and the page came up silent while looking exactly like the one that was asked for. record=0 in the address is how the phone forgets again.";
  "Silent unless asked, because it sends what it sees every few seconds for as long as the page is open: useful while chasing something, and pure noise the rest of the time.";
  "It stands before the app's own script, like the error band next to it, so it is already watching while the app is still starting - which is when a boot that goes wrong goes wrong.";
  let attributes_none = {};
  let code =
    "if (location.pathname.indexOf('/dev/') !== -1) { var recorder_remembers = 'dev_record'; if (location.search.indexOf('record=0') !== -1) { localStorage.removeItem(recorder_remembers); } else if (location.search.indexOf('record') !== -1) { localStorage.setItem(recorder_remembers, '1'); } if (localStorage.getItem(recorder_remembers) === '1') { var page_recorder = document.createElement('script'); page_recorder.src = 'recorder.js'; document.head.appendChild(page_recorder); } }";
  let r = html_code_element("script", attributes_none, code);
  return r;
}
