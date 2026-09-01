import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_verses_group_count_each } from "./app_verses_group_count_each.mjs";
import { app_verses_draw_restore } from "./app_verses_draw_restore.mjs";
import { app_verses_group_draw_restore } from "./app_verses_group_draw_restore.mjs";
import { app_verses_group_offline_guard } from "./app_verses_group_offline_guard.mjs";
import { app_verses_references_to_groups } from "./app_verses_references_to_groups.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_verses_group_shown } from "./app_verses_group_shown.mjs";
import { app_verses_draw_fresh } from "./app_verses_draw_fresh.mjs";
import { app_verses_display_group } from "./app_verses_display_group.mjs";
export async function app_verses_group(
  r,
  count_updates,
  copy,
  verse_groups,
  languages_chosen,
) {
  "The verses card: the buttons for how many, the verses themselves, and the four things a tap can set going - pick a count, ask for new ones, bring back the last ones, and copy them out.";
  "FOUR OF THOSE FIVE JOBS ARE DONE NEXT DOOR, so what stands here is only what they have to share: how many verses are wanted, whether the person has already been told they are offline, and which asking is the newest.";
  "HOW MANY VERSES ARE WANTED IS KEPT IN A RECORD RATHER THAN A NAME, because the count buttons are made once and read it long afterwards, so they need the place the number lives rather than the number as it stood when they were made.";
  "AN ASKING THAT HAS BEEN OVERTAKEN THROWS ITS OWN ANSWER AWAY, because gathering verses takes time and a second tap during it would otherwise leave two drawings fighting over one card.";
  arguments_assert(arguments, 5);
  let offline_notified = property_get(r, "offline_notified");
  let apply_seq = property_get(r, "apply_seq");
  let chosen_references = property_get(r, "chosen_references");
  let order = property_get(r, "order");
  let content = property_get(r, "content");
  let card = property_get(r, "card");
  let counts = property_get(r, "counts");
  let verse_count = property_get(r, "verse_count");
  let verse_count_held = {
    verse_count,
  };
  function count_each(c) {
    app_verses_group_count_each(c, {
      card,
      count_updates,
      count_update_invoke,
      order,
      references_show,
      verse_count_held,
    });
  }
  let card4 = await app_verses_draw_restore({
    counts,
    count_each,
    content,
    reroll,
    copy,
    verse_groups,
    draw_restore,
  });
  async function draw_restore() {
    await app_verses_group_draw_restore(
      verse_count_held,
      count_updates,
      count_update_invoke,
      references_show,
    );
  }
  function count_update_invoke(update) {
    update();
  }
  async function references_show(references, copy_after) {
    apply_seq = apply_seq + 1;
    let my_seq = apply_seq;
    let guard = await app_verses_group_offline_guard(
      offline_notified,
      languages_chosen,
    );
    offline_notified = property_get(guard, "offline_notified");
    let handled = property_get(guard, "handled");
    if (handled) {
      return;
    }
    let groups = await app_verses_references_to_groups(
      references,
      languages_chosen,
    );
    let superseded = not_equal(my_seq, apply_seq);
    if (superseded) {
      return;
    }
    chosen_references = references;
    await app_verses_group_shown({
      verse_groups,
      groups,
      card: card4,
      display_group,
      verse_count_held,
      references,
      copy_after,
      copy,
    });
  }
  async function reroll() {
    let count = property_get(verse_count_held, "verse_count");
    await app_verses_draw_fresh(true, order, count, references_show);
  }
  function display_group(group) {
    let r3 = app_verses_display_group(group, card4);
    return r3;
  }
}
