import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { noop } from "./noop.mjs";
import { not } from "./not.mjs";
import { app_reply_rules_diff_show } from "./app_reply_rules_diff_show.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_notes_review } from "./app_shared_notes_review.mjs";
export async function g_sermon_sweep_preview() {
  arguments_assert(arguments, 0);
  ("Proposed rewordings of already-written sermon verses, on the sandbox app at hash sermon_sweep: each verse showing its current lines against the proposed ones as a difference, with a button to approve and a box to say what is still wrong.");
  ("★ NOTHING CHANGES IN A VERSE UNTIL ITS APPROVE IS PRESSED. The proposals sit in their own file beside the lines files, so a whole book can be proposed, read on a phone, and turned down verse by verse without any sermon moving.");
  ("It runs on the serving machine, because the lines files are kept outside every repo, so it works on the dev server only.");
  let root = html_body_div();
  html_font_sans_serif_set_html();
  html_style_overflow_wrap(root, "anywhere");
  html_p_text(root, "Changes to past sermons, waiting on you.");
  let status = html_p_text(root, "Reading...");
  let listed = html_div(root);
  let shown = await app_shared_api_named(fn_name("g_sermon_sweep_review"), []);
  function waiting_is(one) {
    let decision = property_get(one, "decision");
    let eq = equal(decision, null);
    return eq;
  }
  let waiting = shown.filter(waiting_is);
  html_text_content_set(
    status,
    waiting.length + " waiting, " + shown.length + " in all.",
  );
  for (let one of shown) {
    let chapter_code = property_get(one, "chapter_code");
    let key = property_get(one, "key");
    let decision = property_get(one, "decision");
    let diff = property_get(one, "diff");
    let title = chapter_code + " verse " + key;
    ("★ A DECIDED VERSE IS SHUT UNDER ITS TITLE, and its title is the button that shows it again. The diffs are the long part of the page, so leaving decided ones open buries the verses still waiting; the same folding card the reply rules page shuts its approved tests in.");
    let fold = app_shared_container_blue_collapsible(listed, title, noop);
    let block = property_get(fold, "body");
    let heading = property_get(fold, "title_mark");
    let collapsed_set = property_get(fold, "collapsed_set");
    function heading_set(said) {
      let decided = equal(said, null) ? "" : " - " + said;
      html_text_content_set(heading, title + decided);
    }
    heading_set(decision);
    let waiting_this = equal(decision, null);
    let n = not(waiting_this);
    collapsed_set(n);
    app_reply_rules_diff_show(block, diff);
    let buttons = html_div(block);
    async function decide(word) {
      heading_set("saving...");
      await app_shared_api_named(fn_name("g_sermon_sweep_decide"), [
        chapter_code,
        key,
        word,
      ]);
      heading_set(word);
      collapsed_set(true);
    }
    async function approve() {
      await decide("approved");
    }
    app_shared_button_uncolored(buttons, "Approve", approve);
    ("★ THERE IS NO REJECT, ONLY A NOTE. A proposal is reworked until it is accepted, never turned down, so what the reviewer owes is not a verdict but the reason it is not right yet - and the reason is what the next draft is written from. The same notes panel the reply rules files and the lyric video pictures are reviewed with, so a note is filed, shown and answered the same way everywhere.");
    ("THE STORE IS THIS FUNCTION'S OWN NAME AND THE KEY IS THE CHAPTER AND VERSE, so a note left on one draft is still standing beside the next draft of the same verse.");
    let names = ["lines"];
    app_shared_notes_review(
      block,
      fn_name("g_sermon_sweep_preview"),
      chapter_code + "_" + key,
      title,
      names,
    );
  }
}
