import { app_shared_footer } from "./app_shared_footer.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { app_verses_card4_refresh } from "./app_verses_card4_refresh.mjs";
export async function app_verses_draw_restore(
  counts,
  count_each,
  content,
  reroll,
  copy,
  verse_groups,
  draw_restore,
) {
  arguments_assert(arguments, 7);
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
  let card4 = app_shared_container_blue(content);
  app_verses_card4_refresh(verse_groups, card4);
  app_shared_footer(content);
  await draw_restore();
  return card4;
}
