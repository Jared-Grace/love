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
  ("Every picture the prayer at the door is shown with, the words in it each one stands");
  ("beside, and which side of those words it stands on.");
  ("A run of pictures rather than one, at every anchor, because a single picture is a");
  ("label and several are a scene. People are a person and a family and a heart; God is a");
  ("crown and a cross and a dove. Each run says a little more than any of its members would");
  ("alone, and the reader takes it in at the speed of a glance either way.");
  ("Lifted hands stand with PRAYING and not with God, which is the way round somebody who");
  ("has ever prayed with their hands up will read them: hands are what the person does");
  ("(1 Timothy 2:8, lifting up holy hands), so beside the prayer they are the reader's own");
  ("posture, and beside God they would only have been a third way of saying God again. The");
  ("dove went the other way for the same reason - the Spirit belongs in the picture of God,");
  ("and crown, cross and dove are the three Persons in the order the sentence names them.");
  ("Half of the runs are SPLIT around their words and half stand whole after them, and that");
  ("mixture is the point. With all of them on one side the sentence comes out as word-pair,");
  ("word-pair, word-pair the whole way down - a shape the eye learns in three anchors and");
  ("then stops reading. Splitting some of them breaks the count without changing a single");
  ("picture: the same crown, cross and dove are shown, but the words are held between them");
  ("rather than trailed by them.");
  ("Runs of one, two and THREE all stand somewhere in the sentence, and that is deliberate.");
  ("Splitting the threes fixes the pattern at the anchors but leaves every run one picture");
  ("or two, which is a shorter pattern doing the same thing a rung lower. People keep all");
  ("three of theirs together so that one place in the prayer is plainly bigger than the");
  ("rest, and the reader's eye has three sizes to move between instead of two.");
  ("Which ones are split is chosen for what the words are, not to make the numbers come");
  ("out. A thing gets a picture in front of it where the picture is what the thing IS - a");
  ("crown before God, a game before the game, a hand offered before everyone - and the rest");
  ("of the run follows to say more about it. An action keeps its whole run behind it");
  ("instead, because praying and blessing are things the words do, and a picture in front of");
  ("a verb reads as the thing doing it rather than as the doing.");
  ("Eight anchors is nearly every noun in the sentence, and that is the point of this");
  ("screen in particular. It is a wall of words shown to somebody who has not yet decided");
  ("to play, on a phone, before anything has moved - so it is the one screen in the game");
  ("that has to be readable to a person who is not reading. Everywhere else, decoration");
  ("this thick would be noise laid over words the player has already chosen to read.");
  ("Every anchor is short and stands exactly once in the prayer, which is what lets each be");
  ("found without a rule for which one was meant. Where a word repeats - pray, and again in");
  ("prayers - the anchor takes in enough of the line around it to tell the two apart.");
  ("An anchor holds the punctuation next to it where there is any, so the pictures land");
  ("after the comma rather than inside the phrase. A picture between a word and its own");
  ("comma reads as an interruption of the sentence rather than as a picture of it.");
  ("None of this is drawn at random, unlike the pictures over a person. This prayer is read");
  ("once and read closely, so its pictures are chosen for what they MEAN; a prayer read a");
  ("thousand times is drawn from a pool instead, because what a picture there has to do is");
  ("keep a panel from going stale, and nothing seen once can go stale.");
  let none = "";
  let god_before = emoji_crown();
  let v = emoji_cross();
  let v2 = emoji_dove();
  let god_after = text_combine_multiple([v, v2]);
  let v3 = emoji_pray();
  let v4 = emoji_bow();
  let praying = text_combine_multiple([v3, v4]);
  let v5 = emoji_person_outline();
  let v6 = emoji_family();
  let v7 = emoji_heart();
  let people = text_combine_multiple([v5, v6, v7]);
  let game_before = emoji_video_game();
  let game_after = emoji_mobile();
  let v8 = emoji_pray();
  let v9 = emoji_hands_raising();
  let prayer = text_combine_multiple([v8, v9]);
  let everyone_before = emoji_handshake();
  let everyone_after = emoji_wave();
  let v10 = emoji_globe_americas();
  let v11 = emoji_sunrise();
  let world = text_combine_multiple([v10, v11]);
  let v12 = emoji_home();
  let v13 = emoji_church();
  let home = text_combine_multiple([v12, v13]);
  let decorations = [
    {
      before: god_before,
      anchor: "God,",
      after: god_after,
    },
    {
      before: none,
      anchor: "as I pray",
      after: praying,
    },
    {
      before: none,
      anchor: "people",
      after: people,
    },
    {
      before: game_before,
      anchor: "video game,",
      after: game_after,
    },
    {
      before: none,
      anchor: "these prayers",
      after: prayer,
    },
    {
      before: everyone_before,
      anchor: "everyone",
      after: everyone_after,
    },
    {
      before: none,
      anchor: "in the world",
      after: world,
    },
    {
      before: none,
      anchor: "I live in",
      after: home,
    },
  ];
  return decorations;
}
