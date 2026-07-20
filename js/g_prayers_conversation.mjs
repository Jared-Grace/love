import { emoji_heart } from "./emoji_heart.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { g_prayer } from "./g_prayer.mjs";
export function g_prayers_conversation() {
  "GENERIC placeholder prayer choices for the conversation-closing prayer turn — person-neutral intercessions for the person just spoken with + the mission ({emoji, text} composed DRY via g_prayer). PLACEHOLDER: real, contextual prayers (tied to the struggles / questions actually raised) are created + reviewed later, not here";
  let prayers = [
    { emoji: emoji_heart(), text: g_prayer("soften their heart to receive Your love") },
    { emoji: emoji_sunrise(), text: g_prayer("open their eyes to see who You are") },
    { emoji: emoji_dove(), text: g_prayer("let Your Spirit draw them to You") },
    { emoji: emoji_book_open(), text: g_prayer("let Your word take root in them") },
    { emoji: emoji_cross(), text: g_prayer("bring them to trust in what Jesus did for them") },
    { emoji: emoji_pray(), text: g_prayer("give me boldness and love to keep sharing") },
  ];
  return prayers;
}
