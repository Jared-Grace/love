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
  "reply_local went from 192 to 208 for the same reason a second time, and the second telling is worth more than the first because it was ARGUED rather than assumed. The page grew from a hundred and eighty eight KiB to two hundred over two days, in a dozen small steps, and a drift is exactly what an accidental import does NOT look like - a tree arrives all at once. The one step big enough to be suspicious was four KiB, and the only thing it changed that this page can reach was the languages list, which took another ninety four languages. Three hundred and forty languages are now offered.";
  "The whole reachable set was read rather than trusted, and everything in it belongs to this app: the language lists, the uplifting verse references, the browser halves of the Bible readers, and Firebase storage for fetching verses. There is nothing here to strip, which is what makes raising the ceiling the honest answer instead of the easy one.";
  "The obvious win was left alone deliberately. The languages list is thirty KiB of source that a reader only needs once they open the picker, so loading it on demand would pay for the whole raise - but a piece fetched on demand is only known to arrive correctly by opening the page on a real device, which is a person's job and not a gate's. It is written down here so the next person to hit this ceiling meets the idea rather than rediscovering it.";
  "sandbox went from 64 to 104 on the day a fourth preview was registered. It sat at sixty three KiB the evening before and passed ninety nine the next, and the jump is one step rather than a drift - the whole tree behind the new preview arrived at once, the moment its name was written into the registry.";
  "That step is the feature and not an accident, but it is also the third one, and the fifth preview will do the same again. The page shows exactly one preview per visit, the one the address names, and carries all four every time - so what is measured here is not what anybody loads for a purpose. The ceiling is being raised rather than the imports being made to wait because a preview loaded on demand arrives as its own separately fetched piece, and whether the page fetches those correctly is answered by opening it rather than by reading it.";
  "sandbox went from 104 to 128 when a fifth and a sixth preview were registered a day apart, which is the thing the paragraph above said would happen next. It was checked rather than assumed: everything each of the two new previews can reach by importing was read, fifty eight functions apiece, and every one of them draws or colours or lays out something. No server-side half, no Bible text, no bucket - so this is the tree behind a preview arriving, which is what registering a preview means.";
  "Six previews now, and the page still shows exactly one. Whoever registers the seventh will raise this again, and that is the ratchet working rather than failing: each raise costs a person a measurement, and the measurement is the only thing that could ever tell a preview apart from an accident. The way out is still the one written down above and still a person's to take.";
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
      kib: 128,
    },
    {
      name: "designs_universal",
      kib: 50,
    },
    {
      name: "reply_local",
      kib: 208,
    },
  ];
  return ceilings;
}
