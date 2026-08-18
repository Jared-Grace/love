import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
export function bible_glyph_characters() {
  "Every glyph this picture Bible can write, given as the name it is written by and the character that draws it by default.";
  "A glyph is named rather than spelled, everywhere else in this Bible. That indirection is the whole point: a verse is stored as token names, so the same verse can be drawn by a different set of artwork - another tradition's cross, or a drawn SVG instead of a font character - without a single stored verse changing. Spelling the character inside the verse would freeze the artwork into the text.";
  "The character given here is only the default. It is the one a terminal or a plain text file can show, which is what makes a verse readable before any artwork exists at all.";
  "THE LAST FOUR ARE NOT THINGS, and they are the first glyphs here that are not. Every other picture in this list is something a reader could point at - a cross, a hand, a house - and those four draw a RELATION instead: joining, being inside, coming out of, and pointing at what follows. They are grouped at the end rather than mixed in because that difference is real and a later reader should be able to see where it starts.";
  "A relation is drawn as a DIAGRAM rather than as a picture, which is why the four look plainer than everything above them. The in-tray and the out-tray are deliberately the same box with the arrow reversed: neither one teaches anything alone, and the pair teaches itself, which is the only way a reader with no shared language can learn a relation at all.";
  "Single characters are preferred over joined sequences. A joined sequence such as the burning heart is several characters held together by a joiner, and a terminal that does not join them shows the parts instead, which is how a reader ends up seeing a heart and a fire where one glyph was meant.";
  let characters = [
    {
      name: "cross",
      character: emoji_cross(),
    },
    {
      name: "dove",
      character: emoji_dove(),
    },
    {
      name: "fire",
      character: emoji_fire(),
    },
    {
      name: "heart_red",
      character: "❤️",
    },
    {
      name: "heart_orange",
      character: "🧡",
    },
    {
      name: "wind",
      character: "🌬️",
    },
    {
      name: "sparkle",
      character: "✨",
    },
    {
      name: "crown",
      character: "👑",
    },
    {
      name: "oil",
      character: "🫗",
    },
    {
      name: "name_tag",
      character: "🏷️",
    },
    {
      name: "person",
      character: "🧍",
    },
    {
      name: "father",
      character: "👨",
    },
    {
      name: "son",
      character: "👦",
    },
    {
      name: "brother",
      character: "👬",
    },
    {
      name: "speech",
      character: "💬",
    },
    {
      name: "sun",
      character: "☀️",
    },
    {
      name: "sky",
      character: "🌌",
    },
    {
      name: "hug",
      character: "🫂",
    },
    {
      name: "footprints",
      character: "👣",
    },
    {
      name: "person_other",
      character: "🧑",
    },
    {
      name: "man_beard",
      character: "🧔",
    },
    {
      name: "woman",
      character: "👩",
    },
    {
      name: "family",
      character: "👪",
    },
    {
      name: "crowd",
      character: "👥",
    },
    {
      name: "king",
      character: "🤴",
    },
    {
      name: "kneeling",
      character: "🧎",
    },
    {
      name: "walking",
      character: "🚶",
    },
    {
      name: "learner",
      character: "🎓",
    },
    {
      name: "angel",
      character: "👼",
    },
    {
      name: "mouth",
      character: "👄",
    },
    {
      name: "voice",
      character: "🗣️",
    },
    {
      name: "ear",
      character: "👂",
    },
    {
      name: "eye",
      character: "👁️",
    },
    {
      name: "eyes",
      character: "👀",
    },
    {
      name: "hand",
      character: "✋",
    },
    {
      name: "hands_giving",
      character: "🤲",
    },
    {
      name: "hand_receiving",
      character: "🫴",
    },
    {
      name: "hands_praying",
      character: "🙏",
    },
    {
      name: "thumbs_up",
      character: "👍",
    },
    {
      name: "heart_organ",
      character: "🫀",
    },
    {
      name: "meat",
      character: "🥩",
    },
    {
      name: "skull",
      character: "💀",
    },
    {
      name: "sprout",
      character: "🌱",
    },
    {
      name: "earth",
      character: "🌍",
    },
    {
      name: "globe",
      character: "🌐",
    },
    {
      name: "map",
      character: "🗺️",
    },
    {
      name: "city",
      character: "🏙️",
    },
    {
      name: "castle",
      character: "🏰",
    },
    {
      name: "house",
      character: "🏠",
    },
    {
      name: "church",
      character: "⛪",
    },
    {
      name: "menorah",
      character: "🕎",
    },
    {
      name: "scroll",
      character: "📜",
    },
    {
      name: "megaphone",
      character: "📣",
    },
    {
      name: "bow",
      character: "🏹",
    },
    {
      name: "star",
      character: "🌟",
    },
    {
      name: "gift",
      character: "🎁",
    },
    {
      name: "anchor",
      character: "⚓",
    },
    {
      name: "hourglass",
      character: "⏳",
    },
    {
      name: "lightning",
      character: "⚡",
    },
    {
      name: "key",
      character: "🔑",
    },
    {
      name: "lightbulb",
      character: "💡",
    },
    {
      name: "check",
      character: "✅",
    },
    {
      name: "hammer",
      character: "🔨",
    },
    {
      name: "tools",
      character: "🛠️",
    },
    {
      name: "road",
      character: "🛣️",
    },
    {
      name: "plus",
      character: "➕",
    },
    {
      name: "tray_in",
      character: "📥",
    },
    {
      name: "tray_out",
      character: "📤",
    },
    {
      name: "pointing",
      character: "👉",
    },
  ];
  return characters;
}
