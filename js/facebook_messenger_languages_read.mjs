import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
import { facebook_messenger_next_link } from "./facebook_messenger_next_link.mjs";
import { facebook_messenger_scroll_up_until } from "./facebook_messenger_scroll_up_until.mjs";
import { next_link_languages } from "./next_link_languages.mjs";
import { facebook_messenger_profile_languages_set } from "./facebook_messenger_profile_languages_set.mjs";
export async function facebook_messenger_languages_read(thread_id) {
  "$plain thread_id";
  "Opens messenger conversation number thread_id, scrolls up until a next-passage link you sent is on the page, and keeps the languages that link names as that person's, in the private profiles file. Answers the link and the languages, or null for both when you never sent one.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ THE LAST LINK SENT IS THE CHOICE: the page puts its onward link last in what it copies, and the link keeps the languages, so the newest one you sent says what this person reads in now.";
  "★ NOTHING IS KEPT WHEN NO LINK IS FOUND: no link is not a choice of no languages, so whatever was kept before stays.";
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, thread_id);
    if (not(clicked)) {
      let r2 = {
        thread_id,
        found: false,
        link: null,
        languages: null,
      };
      return r2;
    }
    await sleep_human_pace();
    function stop(messages) {
      let left = facebook_messenger_next_link(messages);
      let r3 = not_equal(left, null);
      return r3;
    }
    let read = await facebook_messenger_scroll_up_until(page, stop);
    let link = facebook_messenger_next_link(read.messages);
    let languages = null;
    if (not_equal(link, null)) {
      languages = next_link_languages(link);
    }
    if (not_equal(languages, null)) {
      await facebook_messenger_profile_languages_set(thread_id, languages);
    }
    let r = {
      thread_id,
      found: true,
      top: read.top,
      link,
      languages,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
