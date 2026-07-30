export function app_g_dev_tools_open() {
  "open the #index dev-route directory from the player menu — write the hash and then reload on the spot, so the button lands you where typing that address by hand lands you. BESPOKE (window.location) — do NOT auto-canonicalize";
  "It used to write the hash and stop, leaving the reload to whoever was listening for a hash change. That is a dependency on a listener existing, and a listener is exactly the thing a failure earlier in the boot can quietly remove — the address bar then reads #index while the screen still shows the game, and nothing says why. Typing that same address by hand always worked, because a typed address reloads on its own. This makes the button do what typing it does.";
  window.location.hash = "index";
  window.location.reload();
}
