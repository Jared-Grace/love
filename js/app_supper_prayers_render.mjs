import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { each } from "./each.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_supper_prayers_render(root) {
  let prayer_card = app_shared_container_blue(root);
  function lambda(item) {
    let p2 = html_p_text(
      prayer_card,
      text_combine_multiple([
        "Heavenly Father, in the name of the Father, and of the Son, and of the Holy Spirit: Have mercy on me a sinner. Thanks. Help. Bless this ",
        item,
        ". Amen.",
      ]),
    );
    html_style_margin_y(p2, "0.25em");
  }
  each(["bread", "fruit of the vine"], lambda);
  let p3 = html_p_text(prayer_card, "Sing hymn");
  html_style_margin_y(p3, "0.25em");
}
