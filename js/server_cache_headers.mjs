import { arguments_assert } from "./arguments_assert.mjs";
export function server_cache_headers(res, file_path) {
  arguments_assert(arguments, 2);
  ("stale-while-revalidate caching for the game's static art (img/game/**): a dev RELOAD serves the cached sprite INSTANTLY (never blocks on the HTTP/1.1 6-connection cap → no 'did not load' flood) AND revalidates in the background, so an EDITED sprite is picked up on the next normal reload — no hard-reload needed.");
  let header = "Cache-Control";
  let asset = file_path.includes("/img/game/");
  if (asset) {
    res.setHeader(header, "public, max-age=0, stale-while-revalidate=31536000");
  }
  ("everything under dev/ must be REVALIDATED on every load, because the ?v= stamp in the page does not prove the bundle behind it is the one on disk. The stamp is written when the PAGE is written, and the page and the bundle are built by separate steps that each run without the other — so a rebuilt bundle can sit on disk under a stamp the browser already has, and the browser then keeps serving the older copy it cached. That is not a theoretical gap: a broken bundle survived three reloads that way, and every one of them showed the same failure that had already been fixed on disk. no-cache still stores the file and still answers 304 when nothing changed, so the cost is one conditional request and the win is that dev can never show code that is no longer there.");
  let dev = file_path.includes("/dev/");
  if (dev) {
    res.setHeader(header, "no-cache");
  }
}
