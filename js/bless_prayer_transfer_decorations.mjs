import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_crown } from "./emoji_crown.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_hands_raising } from "./emoji_hands_raising.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_bow } from "./emoji_bow.mjs";
import { emoji_person_outline } from "./emoji_person_outline.mjs";
import { emoji_family } from "./emoji_family.mjs";
import { emoji_heart } from "./emoji_heart.mjs";
import { emoji_video_game } from "./emoji_video_game.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_handshake } from "./emoji_handshake.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { emoji_church } from "./emoji_church.mjs";
export function bless_prayer_transfer_decorations() {
  arguments_assert(arguments, 0);
  ("Every picture the prayer at the door is shown with, and the words in it each one stands");
  ("beside.");
  ("A run of pictures rather than one, at every anchor, because a single picture is a");
  ("label and several are a scene. People are a person and a family and a heart; God is a");
  ("crown and a cross and lifted hands. Each run says a little more than any of its members");
  ("would alone, and the reader takes it in at the speed of a glance either way.");
  ("Eight anchors is nearly every noun in the sentence, and that is the point of this");
  ("screen in particular. It is a wall of words shown to somebody who has not yet decided");
  ("to play, on a phone, before anything has moved - so it is the one screen in the game");
  ("that has to be readable to a person who is not reading. Everywhere else, decoration");
  ("this thick would be noise laid over words the player has already chosen to read.");
  ("Every anchor is short and stands exactly once in the prayer, which is what lets each be");
  ("found without a rule for which one was meant. Where a word repeats - pray, and again in");
  ("prayer - the anchor takes in enough of the line around it to tell the two apart.");
  ("An anchor holds the punctuation next to it where there is any, so the pictures land");
  ("after the comma rather than inside the phrase. A picture between a word and its own");
  ("comma reads as an interruption of the sentence rather than as a picture of it.");
  ("None of this is drawn at random, unlike the pictures over a person. This prayer is read");
  ("once and read closely, so its pictures are chosen for what they MEAN; a prayer read a");
  ("thousand times is drawn from a pool instead, because what a picture there has to do is");
  ("keep a panel from going stale, and nothing seen once can go stale.");
  let v = emoji_crown();
  let v2 = emoji_cross();
  let v3 = emoji_hands_raising();
  let god = text_combine_multiple([v, v2, v3]);
  let v4 = emoji_pray();
  let v5 = emoji_bow();
  let praying = text_combine_multiple([v4, v5]);
  let v6 = emoji_person_outline();
  let v7 = emoji_family();
  let v8 = emoji_heart();
  let people = text_combine_multiple([v6, v7, v8]);
  let v9 = emoji_video_game();
  let e = emoji_mobile();
  let game = text_combine_multiple([v9, e]);
  let v10 = emoji_pray();
  let v11 = emoji_dove();
  let prayer = text_combine_multiple([v10, v11]);
  let v12 = emoji_handshake();
  let v13 = emoji_wave();
  let everyone = text_combine_multiple([v12, v13]);
  let v14 = emoji_globe_americas();
  let v15 = emoji_sunrise();
  let world = text_combine_multiple([v14, v15]);
  let v16 = emoji_home();
  let v17 = emoji_church();
  let home = text_combine_multiple([v16, v17]);
  let decorations = [
    {
      anchor: "God,",
      emojis: god,
    },
    {
      anchor: "as I pray",
      emojis: praying,
    },
    {
      anchor: "people",
      emojis: people,
    },
    {
      anchor: "video game,",
      emojis: game,
    },
    {
      anchor: "this prayer",
      emojis: prayer,
    },
    {
      anchor: "everyone",
      emojis: everyone,
    },
    {
      anchor: "in the world",
      emojis: world,
    },
    {
      anchor: "I live in",
      emojis: home,
    },
  ];
  return decorations;
}
