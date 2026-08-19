import { app_shared_bible_licences_body } from "./app_shared_bible_licences_body.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_credits_browser } from "./ebible_credits_browser.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { null_is } from "./null_is.mjs";
export async function app_shared_bible_licences_fill(container) {
  "fetches the credits and fills a waiting area with them, saying it is on its way while it goes and saying so kindly if it cannot get there";
  "held apart from the two things that open it, because a screen and an in-place panel differ only in how they are framed and how they are left. Everything between those two moments is the same, and a second copy of it would be the one that quietly stops matching the first.";
  app_shared_text_quiet(container, "Fetching the credits");
  let credits = await catch_null_async(ebible_credits_browser);
  let unreachable = null_is(credits);
  if (unreachable) {
    html_clear(container);
    html_div_text(
      container,
      "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
    );
    return;
  }
  app_shared_bible_licences_body(container, credits);
}
