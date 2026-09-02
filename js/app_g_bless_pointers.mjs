import { app_g_bless_mark_edge_filter } from "./app_g_bless_mark_edge_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_color_family_remaining } from "./app_g_bless_color_family_remaining.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { app_shared_game_npc_pointer_get } from "./app_shared_game_npc_pointer_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_bless_arrow_bob } from "./app_g_bless_arrow_bob.mjs";
import { app_shared_game_npc_pointer_set } from "./app_shared_game_npc_pointer_set.mjs";
import { each } from "./each.mjs";
import { app_g_bless_mark_visibility } from "./app_g_bless_mark_visibility.mjs";
export function app_g_bless_pointers(pointers, everyone, remaining) {
  arguments_assert(arguments, 3);
  ("Hangs a nodding arrow over the head of everybody who is left in a house the player has started, and over nobody else.");
  ("It says the same thing the ring under their feet says, and it is here because saying it once was not enough to be SEEN. The street is drawn from overhead and the people on it stand close together, so a ring on the ground belonging to somebody in the back row is hidden behind whoever is in front of them - and a mark a player has to hunt for is a mark that has not told them anything.");
  ("Above head height, on the layer the icons live on, which is the one layer that clears the crowd. Nothing a person walks behind can cover it.");
  ("It MOVES, and that is what makes it easier to see than a prayer already said. A blessing is a still gold light and stays one - it is a finished thing, and a finished thing has no business waving. What is still to be done is the thing nodding, so a player sweeping their eyes over a street full of gold picks out the few faces that still want something without reading the street at all.");
  ("The same warm colour as the ring, because it is the same fact. A second colour here would read as a second kind of person and send a player looking for a difference that is not there.");
  ("EVERYBODY is given an arrow when the street is first drawn and praying only SHOWS one, for the reason the lights and the rings are made that way: a person's tile names the square their step is heading for rather than the one they are on, so a mark placed at the moment it becomes true arrives ahead of them and stands waiting. An arrow made before anybody has moved is carried by their steps instead of placed by them, which is why the whole street is handed in here and not only the people to point at.");
  let color = app_g_bless_color_family_remaining();
  let size = g_img_square_size_css();
  let font_size = text_combine_multiple(["calc((", size, ") * 0.75)"]);
  let lift = text_combine_multiple(["translateY(calc((", size, ") * -1.1))"]);
  let people_all = bless_view_people(everyone);
  function person_pointer(person) {
    let already = app_shared_game_npc_pointer_get(person);
    let made = null_not_is(already);
    if (made) {
      return;
    }
    let pointer = html_div(pointers);
    g_img_square_style_position(pointer, person, "icon");
    html_style_assign(pointer, {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      color: color,
      "font-size": font_size,
      transform: lift,
      filter: app_g_bless_mark_edge_filter(),
      "pointer-events": "none",
      visibility: "hidden",
    });
    app_g_bless_arrow_bob(pointer, 90);
    app_shared_game_npc_pointer_set(person, pointer);
  }
  each(people_all, person_pointer);
  app_g_bless_mark_visibility(
    app_shared_game_npc_pointer_get,
    everyone,
    remaining,
  );
}
