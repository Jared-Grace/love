import { arguments_assert } from "./arguments_assert.mjs";
export function server_cache_headers(res, file_path) {
  arguments_assert(arguments, 2);
  ("stale-while-revalidate caching for the game's static art (img/game/**): a dev RELOAD serves the cached sprite INSTANTLY (never blocks on the HTTP/1.1 6-connection cap → no 'did not load' flood) AND revalidates in the background, so an EDITED sprite is picked up on the next normal reload — no hard-reload needed. html/js keep default freshness (the dev bundle is already ?v= busted)");
  let asset = file_path.includes("/img/game/");
  if (asset) {
    res.setHeader(
      "Cache-Control",
      "public, max-age=0, stale-while-revalidate=31536000",
    );
  }
}
