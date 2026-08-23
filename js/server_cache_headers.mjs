import { arguments_assert } from "./arguments_assert.mjs";
export function server_cache_headers(res, file_path) {
  arguments_assert(arguments, 2);
  "How long the dev server lets a browser keep what it just served.";
  "The game's art used to be answered for here as well, back when it was served from beside the page. It is fetched from storage now, which says the same thing about it - the words are in one function both ends ask - so there is nothing left here to say about a picture.";
  let header = "Cache-Control";
  ("everything under dev/ must be REVALIDATED on every load, because the ?v= stamp in the page does not prove the bundle behind it is the one on disk. The stamp is written when the PAGE is written, and the page and the bundle are built by separate steps that each run without the other — so a rebuilt bundle can sit on disk under a stamp the browser already has, and the browser then keeps serving the older copy it cached. That is not a theoretical gap: a broken bundle survived three reloads that way, and every one of them showed the same failure that had already been fixed on disk. no-cache still stores the file and still answers 304 when nothing changed, so the cost is one conditional request and the win is that dev can never show code that is no longer there.");
  let dev = file_path.includes("/dev/");
  if (dev) {
    res.setHeader(header, "no-cache");
  }
}
