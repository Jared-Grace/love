export function bundle_size_ceilings() {
  "Per-page byte ceilings (in KiB) for CLIENT bundles that must stay SMALL — pure";
  "nav/docs pages. If one accidentally imports an app's dependency tree (e.g. an ao";
  "string-to-reference conversion pulls heavy server-side modules in) it blows past";
  "its ceiling instantly, so the gate catches silent bloat that a green build hides.";
  "Each ceiling sits well above the page's real size but far below any accidental-import size.";
  "Most functional apps are ABSENT — they are legitimately large. One exception: a functional";
  "app joins this list once a MEASURED size win is worth protecting, with its ceiling set just";
  "above the measured size, so the win cannot silently regress.";
  "reply_local went from 176 to 192 on the day the languages list grew from thirty nine hand-picked languages to two hundred and seventy seven. That page carries a language picker, so it carries the list, and the list is nine and a half KiB larger than it was. That is the feature rather than an accidental import, which is the only reason a ceiling here is ever raised.";
  "sandbox went from 64 to 104 on the day a fourth preview was registered. It sat at sixty three KiB the evening before and passed ninety nine the next, and the jump is one step rather than a drift - the whole tree behind the new preview arrived at once, the moment its name was written into the registry.";
  "That step is the feature and not an accident, but it is also the third one, and the fifth preview will do the same again. The page shows exactly one preview per visit, the one the address names, and carries all four every time - so what is measured here is not what anybody loads for a purpose. The ceiling is being raised rather than the imports being made to wait because a preview loaded on demand arrives as its own separately fetched piece, and whether the page fetches those correctly is answered by opening it rather than by reading it.";
  let ceilings = [
    {
      name: "index",
      kib: 50,
    },
    {
      name: "apps_all",
      kib: 50,
    },
    {
      name: "examples",
      kib: 260,
    },
    {
      name: "sandbox",
      kib: 104,
    },
    {
      name: "designs_universal",
      kib: 50,
    },
    {
      name: "reply_local",
      kib: 192,
    },
  ];
  return ceilings;
}
