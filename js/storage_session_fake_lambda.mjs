import { arguments_assert } from "./arguments_assert.mjs";
export function storage_session_fake_lambda(lambda) {
  arguments_assert(arguments, 1);
  ("Runs a drawing program with a stand-in for one browser tab's own memory in place, so code that keeps something per tab works where there is no browser.");
  ("Whatever was there before is put back even when the drawing throws, because a stand-in left behind would quietly answer for a real tab afterwards.");
  ("★ IT REMEMBERS WHAT IT IS GIVEN, RATHER THAN ANSWERING NOTHING TO EVERY QUESTION. A store that always answered nothing would still let most drawings finish: the usual shape is write a starting value, then read it back, and a reader handed nothing there falls through to a sensible first answer. It would finish for the wrong reason. The drawing would be taking the never-been-here path every single time, and the path a returning reader takes - the one where something is already stored - would never be drawn at all and so never be checked. A store that behaves as the browser behaves cannot pass a drawing the browser would fail.");
  ("What is kept is thrown away when the drawing ends, which is what the browser does when the tab closes. Nothing here reaches a disk.");
  let before = globalThis.sessionStorage;
  let kept = new Map();
  let fake = {
    getItem: function item_get(key) {
      let held = kept.has(key);
      if (held) {
        let value = kept.get(key);
        return value;
      }
      return null;
    },
    setItem: function item_set(key, value) {
      let v = String(value);
      kept.set(key, v);
    },
    removeItem: function item_remove(key) {
      kept.delete(key);
    },
    clear: function all_remove() {
      kept.clear();
    },
  };
  globalThis.sessionStorage = fake;
  try {
    lambda();
  } finally {
    globalThis.sessionStorage = before;
  }
}
