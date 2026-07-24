export function text_rtl_is(text) {
  ("right-to-left scripts (Hebrew, Arabic, Urdu, and their neighbors) occupy these Unicode ranges; a verse holding any such letter reads right-to-left as a whole");
  let rtl = new RegExp("[\\u0590-\\u08FF\\uFB1D-\\uFDFF\\uFE70-\\uFEFF]");
  let has = rtl.test(text);
  return has;
}
