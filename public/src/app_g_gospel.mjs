import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { app_g_wrong } from "../../../love/public/src/app_g_wrong.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { app_g_tutorial } from "../../../love/public/src/app_g_tutorial.mjs";
import { app_g_main_books } from "../../../love/public/src/app_g_main_books.mjs";
import { app_g_chapter_code } from "../../../love/public/src/app_g_chapter_code.mjs";
import { global_function_property_nested_lambda } from "../../../love/public/src/global_function_property_nested_lambda.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { app_g_button_conversation_end } from "../../../love/public/src/app_g_button_conversation_end.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { trinity_name_prayer } from "../../../love/public/src/trinity_name_prayer.mjs";
import { string_random_or_empty } from "../../../love/public/src/string_random_or_empty.mjs";
import { list_map_combine } from "../../../love/public/src/list_map_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { lambda_invoke_multiple } from "../../../love/public/src/lambda_invoke_multiple.mjs";
import { app_g_bible_passage_button } from "../../../love/public/src/app_g_bible_passage_button.mjs";
import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { object_property_change } from "../../../love/public/src/object_property_change.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { app_g_npc_says } from "../../../love/public/src/app_g_npc_says.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_objection_generate_upload_path } from "../../../love/public/src/g_objection_generate_upload_path.mjs";
import { positive_is } from "../../../love/public/src/positive_is.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
export async function app_g_gospel(
  overlay,
  npc,
  game_prefix,
  overlay_close,
  player,
  div_map,
) {
  marker("1");
  html_clear(overlay);
  let objections2 = object_property_get(npc, "objections");
  let p = positive_is(objections2);
  if (p) {
    let books = app_g_main_books();
    let chapter_code = app_g_chapter_code();
    async function lambda5() {
      let destination = g_objection_generate_upload_path(chapter_code);
      let o = await firebase_storage_download_json(destination);
      return o;
    }
    let o = await global_function_property_nested_lambda(
      app_g_gospel,
      "objections",
      chapter_code,
      lambda5,
    );
    let passages = object_property_get(o, "passages");
    list_shuffle(passages);
    let passage = list_last(passages);
    let property = g_objection_generate_property();
    let { ob, passage_wrong } = app_g_wrong(passage, passages, property);
    app_g_npc_says(npc, overlay, game_prefix, ob);
    app_g_container_text(overlay, "What would you like to say?");
    let choices = [
      function correct() {
        async function lambda() {
          object_property_change(npc, "objections", subtract_1);
          await app_g_gospel(
            overlay,
            npc,
            game_prefix,
            overlay_close,
            player,
            div_map,
          );
        }
        app_g_bible_passage_button(
          passage,
          chapter_code,
          books,
          overlay,
          lambda,
        );
      },
      function wrong() {
        let b = app_g_bible_passage_button(
          passage_wrong,
          chapter_code,
          books,
          overlay,
          lambda3,
        );
        function lambda3() {
          let review = object_property_get(player, "review");
          let verse_numbers = object_property_get(
            passage_wrong,
            "verse_numbers",
          );
          list_add(review, {
            chapter_code,
            verse_numbers,
          });
          let text = emoji_book_open();
          const player_property = "studied";
          const tutorial_property = "tutorial_converse";
          app_g_tutorial(
            player,
            player_property,
            div_map,
            tutorial_property,
            text,
          );
          html_remove(b);
        }
      },
    ];
    list_shuffle(choices);
    lambda_invoke_multiple(choices);
    app_g_button_conversation_end(overlay, overlay_close);
  } else {
    function jesus_christ() {
      let v = "Jesus" + string_random_or_empty(" Christ");
      return v;
    }
    let t = trinity_name_prayer();
    const believe =
      string_random_or_empty("Now ") +
      "I believe" +
      string_random_or_empty(
        ", in " +
          jesus_christ() +
          string_random_or_empty(
            ", the son of" + string_random_or_empty(" the living") + " God",
          ),
      );
    const blessing =
      "God bless you " +
      string_random_or_empty(
        " in the name of " + list_random_item(["Jesus", t]) + " ",
      ) +
      "amen";
    const choices = [
      "Thank you" +
        string_random_or_empty(
          " very much" + string_random_or_empty(" from the bottom of my heart"),
        ),
      "Glory to God" + string_random_or_empty(" in the highest"),
      "Praise God" +
        string_random_or_empty(
          ", the Father of " +
            string_random_or_empty("our Lord ") +
            jesus_christ(),
        ),
      "Hallelujah",
      "Amen",
    ];
    list_shuffle(choices);
    let r = integer_random(1, 3);
    let taken = list_take(choices, r);
    let combined = list_concat_multiple([[believe], taken, [blessing]]);
    const mapped = list_map_combine("!", combined);
    const doxology = list_join_space(mapped);
    app_g_npc_says(npc, overlay, game_prefix, doxology);
    app_g_button_conversation_end(overlay, overlay_close);
  }
}
