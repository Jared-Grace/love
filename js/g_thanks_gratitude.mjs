import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { emoji_heart } from "./emoji_heart.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { emoji_family } from "./emoji_family.mjs";
import { emoji_hourglass } from "./emoji_hourglass.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_rainbow } from "./emoji_rainbow.mjs";
export function g_thanks_gratitude() {
  "the pool of short, person-neutral thanksgivings for the spontaneous gratitude prayer menu — each is {emoji, text}: a topical emoji (🙏 where none fits) + a thing to thank God for, anytime. the menu shuffles these and shows a few; picking one prays it. no meter, no reward (gratitude is spontaneous)";
  let thanks = [
    { emoji: emoji_pray(), text: "God, thank You for enough food to stay alive today" },
    { emoji: text_combine(emoji_sunrise(), emoji_heart()), text: "God, thank You for another day to love" },
    { emoji: emoji_cross(), text: "God, thank You for saving me through Jesus" },
    { emoji: emoji_book_open(), text: "God, thank You for Your word to guide me" },
    { emoji: emoji_pray(), text: "God, thank You for breath in my lungs" },
    { emoji: emoji_family(), text: "God, thank You for the people You put around me" },
    { emoji: emoji_hourglass(), text: "God, thank You for Your patience with me" },
    { emoji: emoji_home(), text: "God, thank You for a place to rest" },
    { emoji: emoji_dove(), text: "God, thank You for Your Spirit within me" },
    { emoji: emoji_rainbow(), text: "God, thank You for hope beyond this life" },
  ];
  return thanks;
}
