import { emoji_wine } from "./emoji_wine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_mobile_arrow } from "./emoji_mobile_arrow.mjs";
import { emoji_picture_frame } from "./emoji_picture_frame.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { emoji_folder } from "./emoji_folder.mjs";
import { emoji_martial_arts_uniform } from "./emoji_martial_arts_uniform.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { emoji_books } from "./emoji_books.mjs";
import { emoji_bread } from "./emoji_bread.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { emoji_computer } from "./emoji_computer.mjs";
import { emoji_copy } from "./emoji_copy.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_edit } from "./emoji_edit.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { emoji_gear } from "./emoji_gear.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { emoji_heart } from "./emoji_heart.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_rainbow } from "./emoji_rainbow.mjs";
import { emoji_search } from "./emoji_search.mjs";
import { emoji_secure } from "./emoji_secure.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_index_emojis() {
  "one small picture for an app, for the apps a picture actually says something about - what goes in front of the name on the page listing them.";
  "A name on its own is read; a picture is recognised, and a reader looking for the one app they came for finds it without reading the twelve names above it. That is the whole of what these are for, so an app only gets one where the picture genuinely says which app it is.";
  "AN APP WITH NO SUITABLE PICTURE IS SIMPLY LEFT OUT, and its name stands alone. A picture chosen because every other app had one says nothing about the app it sits on, and worse, it makes the pictures beside it stop meaning anything either - the reader learns they are decoration and goes back to reading the names.";
  "Two apps may share a picture where they really are the same kind of thing, as the two ways of copying verses to send do. What the picture tells the reader is which KIND of thing this is, and narrowing that from thirty to two has already done nearly all of the work.";
  "A picture may be two pictures where the thing itself is two. The Lord's Supper is bread AND wine, and a loaf on its own tells the reader half of what that app is; the two together are still recognised at a glance, which is the only test that matters here.";
  "One is left out on purpose rather than not got round to: the bible inside the game, which is a bible and would have to wear the same picture as THE bible, saying the wrong thing about both.";
  "The page listing every app was left out for a while on the reasoning that these pictures are drawn ON it, so it has nothing there to be told apart from. That was answered by where else its name turns up: it is a card on the index, a link in the foot of nearly every app, and a line on its own page among the rest. Everywhere but one, it is one name among many, so it gets a picture like the others - a phone with an arrow leaving it, which is what going to the other apps looks like.";
  "Kept apart from the list of which apps the index offers, because the two answer different questions and change on different days: that list is a judgment about what a visitor should be offered, and this is a judgment about what a thing looks like. An app is also on this list whether or not the index offers it, so the page listing EVERY app is drawn from the same pictures.";
  let v = emoji_bread();
  let v2 = emoji_wine();
  let v3 = emoji_bread();
  let v4 = emoji_wine();
  let r = [
    {
      app_fn: fn_name("app_bible"),
      emoji: emoji_book_open(),
    },
    {
      app_fn: fn_name("app_search"),
      emoji: emoji_search(),
    },
    {
      app_fn: fn_name("app_verses"),
      emoji: emoji_heart(),
    },
    {
      app_fn: fn_name("app_g"),
      emoji: emoji_cross(),
    },
    {
      app_fn: fn_name("app_g_bless"),
      emoji: emoji_pray(),
    },
    {
      app_fn: fn_name("app_autopray"),
      emoji: emoji_pray(),
    },
    {
      app_fn: fn_name("app_code"),
      emoji: emoji_computer(),
    },
    {
      app_fn: fn_name("app_replace"),
      emoji: emoji_arrows_crossed(),
    },
    {
      app_fn: fn_name("app_original_bible"),
      emoji: emoji_books(),
    },
    {
      app_fn: fn_name("app_ceb_bible"),
      emoji: emoji_globe_americas(),
    },
    {
      app_fn: fn_name("app_en_learn_bible"),
      emoji: emoji_globe_americas(),
    },
    {
      app_fn: fn_name("app_supper"),
      emoji: text_combine_multiple([v, v2]),
    },
    {
      app_fn: fn_name("app_supper_tl"),
      emoji: text_combine_multiple([v3, v4]),
    },
    {
      app_fn: fn_name("app_examples"),
      emoji: emoji_edit(),
    },
    {
      app_fn: fn_name("app_designs_universal"),
      emoji: emoji_rainbow(),
    },
    {
      app_fn: fn_name("app_reply"),
      emoji: emoji_email(),
    },
    {
      app_fn: fn_name("app_reply_local"),
      emoji: emoji_email(),
    },
    {
      app_fn: fn_name("app_message"),
      emoji: emoji_email(),
    },
    {
      app_fn: fn_name("app_privacy_policy"),
      emoji: emoji_secure(),
    },
    {
      app_fn: fn_name("app_calendar"),
      emoji: emoji_clock(),
    },
    {
      app_fn: fn_name("app_calendar_paste"),
      emoji: emoji_copy(),
    },
    {
      app_fn: fn_name("app_sandbox"),
      emoji: emoji_gear(),
    },
    {
      app_fn: fn_name("app_next"),
      emoji: emoji_arrow_right(),
    },
    {
      app_fn: fn_name("app_emoji_bible"),
      emoji: emoji_picture_frame(),
    },
    {
      app_fn: fn_name("app_index"),
      emoji: emoji_home(),
    },
    {
      app_fn: fn_name("app_a"),
      emoji: emoji_folder(),
    },
    {
      app_fn: fn_name("app_karate"),
      emoji: emoji_martial_arts_uniform(),
    },
    {
      app_fn: fn_name("app_g_verify"),
      emoji: emoji_check(),
    },
    {
      app_fn: fn_name("app_apps_all"),
      emoji: emoji_mobile_arrow(),
    },
  ];
  return r;
}
