import { fn_name } from "./fn_name.mjs";
export function app_shared_font_size_step() {
  "How far one press of the larger or smaller button moves this app's text, as a multiple of the size it is at now.";
  ("A STEP, not the size itself. It was called a factor until the size a reader chose became a factor too - a multiple of the size their own browser is set to, filed under the word ",
    fn_name("app_shared_font_size_key_factor"),
    " names - and one word standing for two different numbers in the same file is what made the first migration written here wrong. The stored multiple is the factor; this is the amount a press moves it by.");
  ("A multiple rather than a count of pixels so that a press moves the text by the same PROPORTION wherever the reader starts from. A fixed count would be a large jump for somebody reading small and an imperceptible one for somebody reading large, which is backwards - the reader who has already asked for bigger text is the one who wants the next press to do something.");
  let v = 1.1;
  return v;
}
