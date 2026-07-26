import { g_verify_books_urls } from "./g_verify_books_urls.mjs";
import { window_open_seam_assert } from "./window_open_seam_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function g_verify_books_chrome_open() {
  "Open the PROD approve-your-lines app (g_verify) for each active sermon-loop book, each in its own tab, all in ONE new Chrome window. Reads the live loop state, deep-links g_verify.html?chapter=<chapter code> per book (the app auto-selects that book's current verse awaiting approval, and its own biblehub + whole-chapter links reach the passage), and spawns google-chrome --new-window with every URL. A one-command shortcut to pull up every in-flight book ready to approve.";
  window_open_seam_assert(g_verify_books_chrome_open.name);
  let urls = await g_verify_books_urls();
  let flags = ["--new-window"];
  let args = flags.concat(urls);
  let module = await import("child_process");
  let spawn = property_get(module, "spawn");
  let child = spawn("google-chrome", args, {
    detached: true,
    stdio: "ignore",
  });
  child.unref();
  let r = {
    opened: urls,
  };
  return r;
}
