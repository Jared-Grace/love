import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { text_language_codes_guess } from "./text_language_codes_guess.mjs";
export async function facebook_profile_posts_language_codes(profile_url) {
  "$plain profile_url";
  "The bible language codes the recent posts on the facebook profile at profile_url are most likely written in - a guess for someone who was never sent a next-passage link. Only codes and counts come back.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ONLY WHAT THEY WROTE: a post's own message box is read, never the whole post, because facebook's buttons and labels are English on this machine and would make everyone read as English.";
  "★ NAMES NEVER READ: every link inside a message - a tagged person, a mention, a hashtag - is emptied in the page before its text is taken, and the text itself never leaves this function: the detector runs on this machine.";
  "★ PER POST AND JOINED: one post can be in English while the rest are not, so each long enough post is guessed alone and tallied, beside one guess over all of them joined.";
  let o = await facebook_page_open(profile_url);
  let page = o.page;
  try {
    await sleep_human_pace();
    for (let i = 0; i < 4; i++) {
      await page.evaluate("window.scrollBy(0, 1500)");
      await sleep_human_pace();
    }
    let messages = await page.evaluate(
      "(function(){var ms=[].slice.call(document.querySelectorAll('[data-ad-preview=\"message\"],[data-ad-rendering-role=\"story_message\"]'));var out=[];ms.forEach(function(m){if(ms.some(function(o){return o!==m&&o.contains(m)}))return;[].slice.call(m.querySelectorAll('a')).forEach(function(a){a.textContent=' '});var t=(m.innerText||'').trim();if(t&&out.indexOf(t)<0)out.push(t)});return out})()",
    );
    let tally = {};
    let guessed = 0;
    for (let message of messages) {
      let codes = await text_language_codes_guess(message);
      if (codes.length === 0) {
        continue;
      }
      guessed++;
      for (let code of codes) {
        tally[code] = (tally[code] || 0) + 1;
      }
    }
    let text = messages.join("\n");
    let joined = await text_language_codes_guess(text);
    let r = {
      posts: messages.length,
      guessed,
      tally,
      joined,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
