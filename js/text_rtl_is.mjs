export function text_rtl_is(text) {
  ("right-to-left scripts (Hebrew, Arabic, Urdu, and their neighbors) occupy these Unicode ranges; a verse holding any such letter reads right-to-left as a whole");
  let rtl = /[֐-ࣿיִ-﷿ﹰ-﻿]/;
  let has = rtl.test(text);
  return has;
}
