import { noop } from "./noop.mjs";
export function console_log_silence() {
  "Hands back the real printer and puts a silent one in its place. Work running";
  "side by side cannot print sensibly — every line arrives from somewhere the";
  "reader cannot see, and the interleaving reads as one garbled report. Silence";
  "until the work is done, then a summary that knows who said what.";
  let real = console.log;
  console.log = noop;
  return real;
}
