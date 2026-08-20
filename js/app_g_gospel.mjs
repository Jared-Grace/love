import { app_g_gospel_build_wrong } from "./app_g_gospel_build_wrong.mjs";
import { firebase_storage_download_json_jg } from "./firebase_storage_download_json_jg.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_doxology } from "./app_g_doxology.mjs";
import { app_g_objection_random } from "./app_g_objection_random.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_g_main_books } from "./app_g_main_books.mjs";
import { app_g_chapter_code } from "./app_g_chapter_code.mjs";
import { global_function_property_nested_lambda } from "./global_function_property_nested_lambda.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_bible_passage_button } from "./app_g_bible_passage_button.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { property_transform } from "./property_transform.mjs";
import { app_g_turn_quiz } from "./app_g_turn_quiz.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { list_last } from "./list_last.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { property_get } from "./property_get.mjs";
import { g_objection_generate_upload_path } from "./g_objection_generate_upload_path.mjs";
import { positive_is } from "./positive_is.mjs";
import { html_clear } from "./html_clear.mjs";
import { g_icon_cross } from "./g_icon_cross.mjs";
export async function app_g_gospel(
  overlay,
  npc,
  overlay_close,
  player,
  div_map,
) {
  "One turn of sharing the gospel with a person standing on the map: while they still have an objection left they raise one, and the player answers by choosing the passage that meets it rather than a verse that does not.";
  "Answering rightly takes one objection off them and begins the whole turn over again, so nobody is talked round in a single exchange. When the last objection is gone they speak the doxology, they are marked a Christian, and a cross goes up over them on the map.";
  "The objections written for a chapter are fetched once and then kept on this function itself. Everybody in the chapter is talked to out of the same file and the file does not change while the player is there, so fetching it again for each person would be paying for the same answer over and over.";
  "Walking away is not always allowed. A player who has prayed for discernment is shown the dove instead and the conversation stays open, because guidance that has been asked for and given is not something the player is then free to step around.";
  html_clear(overlay);
  let objections = property_get(npc, "objections");
  let p = positive_is(objections);
  if (p) {
    let books = app_g_main_books();
    let chapter_code = app_g_chapter_code();
    async function lambda5() {
      let destination = g_objection_generate_upload_path(chapter_code);
      let o2 = await firebase_storage_download_json_jg(destination);
      return o2;
    }
    let o = await global_function_property_nested_lambda(
      app_g_gospel,
      "objections",
      chapter_code,
      lambda5,
    );
    let passages = property_get(o, "passages");
    list_shuffle(passages);
    let passage = list_last(passages);
    let ob = app_g_objection_random(passage);
    let list = g_verses_off_topic();
    let verse_wrong = list_random_item(list);
    let discern = {
      prayed: false,
    };
    function build_correct(container) {
      async function lambda() {
        property_transform(npc, "objections", subtract_1);
        await app_g_gospel(overlay, npc, overlay_close, player, div_map);
      }
      let b = app_g_bible_passage_button(
        passage,
        chapter_code,
        books,
        container,
        lambda,
      );
      return b;
    }
    function build_wrong(container) {
      let r = app_g_gospel_build_wrong(
        container,
        discern,
        verse_wrong,
        player,
        passage,
        chapter_code,
      );
      return r;
    }
    function on_end() {
      if (app_g_discern_prevent(discern)) {
        return;
      }
      overlay_close();
    }
    app_g_turn_quiz(
      overlay,
      npc,
      ob,
      "What would you like to say?",
      build_correct,
      build_wrong,
      discern,
      on_end,
    );
  } else {
    let doxology = app_g_doxology();
    app_g_npc_says(npc, overlay, doxology);
    function lambda4() {
      overlay_close();
      g_icon_cross(div_map, npc);
    }
    app_g_button_conversation_end(overlay, lambda4);
    property_set(npc, "christian", true);
  }
}
