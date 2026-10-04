import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { app_verses_link_copied_get } from "./app_verses_link_copied_get.mjs";
import { app_verses_link_copied_button_text } from "./app_verses_link_copied_button_text.mjs";
import { app_verses_link_copied_toggle } from "./app_verses_link_copied_toggle.mjs";
import { property_get } from "./property_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_set } from "./property_set.mjs";
import { app_verses_card4_refresh } from "./app_verses_card4_refresh.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
export async function app_verses_draw_restore({
  counts,
  count_each,
  content,
  reroll,
  copy,
  verse_groups,
}) {
  arguments_assert(arguments, 1);
  each(counts, count_each);
  let card = app_shared_container_blue(content);
  app_shared_text_body(
    card,
    "3. Whenever you would like a different set, tap the button below. Your verses are lovingly copied for you each time.",
  );
  let left = emoji_arrows_crossed();
  let text = text_combine(left, " New verses");
  app_shared_button(card, text, reroll);
  app_shared_text_body(
    card,
    "If the copy did not work, this button will gently copy them again.",
  );
  app_shared_button_copy(card, copy);
  app_shared_text_body(
    card,
    "Your verses are copied on their own, so you can send them to anybody. If you would also like the person to be able to come and get their own verses, you can add a link under them. Whichever you choose is remembered for next time.",
  );
  let link_copied = app_verses_link_copied_get();
  let link_text = app_verses_link_copied_button_text(link_copied);
  let button_link_held = {
    button_link: null,
  };
  async function link_toggle() {
    let next = app_verses_link_copied_toggle();
    let text_next = app_verses_link_copied_button_text(next);
    let button_link = property_get(button_link_held, "button_link");
    html_text_set(button_link, text_next);
    ("the clipboard is filled again straight away, because the reader pressed this while holding a copy made the other way and would otherwise paste the old one without ever being told");
    await copy();
  }
  let button_link2 = app_shared_button(card, link_text, link_toggle);
  property_set(button_link_held, "button_link", button_link2);
  let card4 = app_shared_container_blue(content);
  app_verses_card4_refresh(verse_groups, card4);
  app_shared_footer(content);
  ("bringing the saved verses back belongs to the caller, not to here, because drawing them needs the card returned just below and the caller has nowhere to have put it until this returns; a restore set off from in here read that name while the line giving it a value had not finished, and the page died before it drew anything");
  return card4;
}
