import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_loading_said } from "./text_loading_said.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_parent_waiting_run } from "./html_parent_waiting_run.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { html_hash_name_third_or_empty } from "./html_hash_name_third_or_empty.mjs";
import { lyric_video_song_swaps_narrow } from "./lyric_video_song_swaps_narrow.mjs";
import { lyric_video_song_swap_card } from "./lyric_video_song_swap_card.mjs";
import { html_hash_name_part_or_empty } from "./html_hash_name_part_or_empty.mjs";
import { equal } from "./equal.mjs";
import { picture_swap_shown_approved_is } from "./picture_swap_shown_approved_is.mjs";
import { picture_swaps_undecided_each } from "./picture_swaps_undecided_each.mjs";
import { lyric_video_song_buttons } from "./lyric_video_song_buttons.mjs";
export async function lyric_video_song_swaps_preview() {
  "The screen for choosing between a song's current background pictures and the pictures offered to replace them, on the sandbox app at hash lyric_video_song_swaps.";
  "BEFORE AND AFTER SIT SIDE BY SIDE, because a replacement is judged against what it replaces; seen alone, a candidate is judged against nothing.";
  "A THIRD PART IN THE ADDRESS KEEPS ONLY THE PLACES OFFERING A PICTURE FROM THAT FOLDER, as mixed in #lyric_video_song_swaps/agape/mixed. Asking someone to look at seven rows out of twenty-four, and leaving them to find which seven, spends their attention on the finding rather than on the looking.";
  "A FOURTH PART, all, AS IN #lyric_video_song_swaps/agape/video_now,jewish/all, SHOWS PLACES APPROVED THROUGH A PICTURE NOT ON SCREEN. By default an approved place is left off, because the page is a list of what still needs a decision; but a new round of pictures for places already approved can only be compared on a page that shows them. A place whose approved picture is one of those on screen is still left off, because it is decided among exactly the pictures being compared.";
  "NOTHING IS CHANGED FROM HERE. Choosing is said to whoever is at the keyboard, who points the song's document at the picture and renders again.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  let asked =
    "Choose a song. Each picture that has candidates is shown first, then the candidates beside it, under the words sung over it. Press Approve under a picture to use it in the video: it gets a green frame and is saved at once. Press again to take the approval back. An approved picture is left off the next time the page opens.";
  html_p_text(root, asked);
  let chosen = html_div(root);
  let told = app_shared_text_quiet(root, "");
  let cards = html_div(root);
  async function song_show(name) {
    "THE WAIT FOR THE TWO DOCUMENTS IS SAID IN THE PLACE THE ROWS GO. Emptying that place and then asking the server left it blank for the whole of both fetches, and a part of the screen that goes empty and stays empty is what a button that did nothing also looks like - so the one move left to a person is to press it again, which is the wrong move against a press that was merely slow. The line names the song, so pressing one song's button and pressing another's do not read the same.";
    "BOTH ARE ASKED FOR BEHIND THE ONE LINE, because neither of them alone draws a row: a candidate is shown against the picture it would replace, so the screen waits for the pair and there is nothing to put up in between.";
    let what = text_combine("the pictures on offer for ", name);
    let waiting_said = text_loading_said(what);
    async function documents_ask() {
      let fetched_document = await api_read(
        fn_name("lyric_video_song_document_read"),
        [name],
      );
      let fetched_swaps = await api_read(
        fn_name("lyric_video_song_swaps_read"),
        [name],
      );
      let pair = {
        document: fetched_document,
        swaps: fetched_swaps,
      };
      return pair;
    }
    let both = await html_parent_waiting_run(
      cards,
      waiting_said,
      documents_ask,
    );
    let document = property_get(both, "document");
    let swaps = property_get(both, "swaps");
    let none = null_is(document) || null_is(swaps);
    if (none) {
      app_shared_text_quiet(cards, "this song has no pictures on offer");
      return;
    }
    let listed2 = property_get(swaps, "swaps");
    let folder_name = html_hash_name_third_or_empty();
    let listed = lyric_video_song_swaps_narrow(listed2, folder_name);
    function card(swap) {
      lyric_video_song_swap_card(cards, document, swap, name);
    }
    let left = html_hash_name_part_or_empty(3);
    let every = equal(left, "all");
    if (every) {
      let hidden_shown = 0;
      for (let swap of listed) {
        if (picture_swap_shown_approved_is(swap)) {
          hidden_shown = hidden_shown + 1;
        } else {
          card(swap);
        }
      }
      app_shared_text_quiet(
        cards,
        hidden_shown + " approved from these pictures, not shown",
      );
      return;
    }
    let hidden = picture_swaps_undecided_each(listed, card);
    app_shared_text_quiet(cards, hidden + " already approved, not shown");
  }
  await lyric_video_song_buttons(chosen, song_show);
  return told;
}
