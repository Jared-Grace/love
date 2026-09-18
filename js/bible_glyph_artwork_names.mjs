export function bible_glyph_artwork_names() {
  "What the artwork set calls each of this Bible's glyphs, so a drawn file can be found for one.";
  "TWO VOCABULARIES DESCRIBE THE SAME PICTURES and neither is computable from the other. This repo names a glyph by what it is FOR in a verse - heart_red, heart_orange, person_other - and the artwork set names it by that emoji's common name in the Unicode data - Red heart, Orange heart, Person. The two agree on the picture and on nothing else, so the bridge has to be written by a person looking at both, once, and this is it.";
  "THE NAME HERE IS ONLY USED TO FETCH, and never to draw. A file lands under this repo's own glyph name, so every page addresses a glyph the way it already does and no page ever learns the artwork set's vocabulary. That is what makes the artwork replaceable: swapping sets means rewriting this one table and running the fetch again, and nothing else in the repo notices.";
  "A NAME HERE IS A GUESS UNTIL IT IS CHECKED, which is why the fetch reports the ones it could not find rather than failing on the first. These names were written from knowing the emoji, and the artwork set spells a few of them its own way; the report is what turns the guesses into facts, and it costs one run.";
  "THE LAST THREE WERE ASKED OF THE SET BEFORE THEY WERE WRITTEN, which is the cheap way round and the one to copy. Searching the set's own names for a word costs one listing and answers with the whole neighbourhood of that word, so the name lands correct the first time; guessing costs a fetching run for every guess and only ever answers yes or no.";
  "THE LAST TWO WERE ASKED OF THE SET THE SAME WAY and both came back on the first search, which is what the line above is describing rather than recommending. The set answers to Grinning face and to Left-right arrow, spelled its way and not this repo's, and neither spelling could have been guessed from the glyph name here - which is the whole reason this table exists.";
  "A GLYPH MISSING FROM THIS TABLE IS NOT AN OVERSIGHT. Two of them are named next door instead, in the list of pictures the set simply does not have, because no spelling would have found them. This table is the glyphs that can be fetched, and that list is the glyphs that cannot - together they are all of them.";
  "THE LAST FORTY ONE CAME IN ONE BATCH, for the glyphs seated with an English word as their character. Twenty nine of them the set answers to under the glyph's own word. The other twelve are the set's picture of the same thing under its own name - the oil lamp is the Diya lamp, the wilderness is the Desert, the cedar is the Evergreen tree - and each was taken only where the picture draws the thing itself, never a symbol for it and never a picture this table already spends. The morning took the Sunrise because it is the commoner word; the dawn was left without one, since the set's other sunrise is the same picture with mountains behind it and two words drawn alike would read as one.";
  let names = [
    {
      glyph: "cross",
      asset: "Latin cross",
    },
    {
      glyph: "dove",
      asset: "Dove",
    },
    {
      glyph: "fire",
      asset: "Fire",
    },
    {
      glyph: "heart_red",
      asset: "Red heart",
    },
    {
      glyph: "heart_on_fire",
      asset: "Heart on fire",
    },
    {
      glyph: "moai",
      asset: "Moai",
    },
    {
      glyph: "heart_orange",
      asset: "Orange heart",
    },
    {
      glyph: "wind",
      asset: "Wind face",
    },
    {
      glyph: "sparkle",
      asset: "Sparkles",
    },
    {
      glyph: "crown",
      asset: "Crown",
    },
    {
      glyph: "oil",
      asset: "Pouring liquid",
    },
    {
      glyph: "name_tag",
      asset: "Label",
    },
    {
      glyph: "person",
      asset: "Person standing",
    },
    {
      glyph: "father",
      asset: "Man",
    },
    {
      glyph: "son",
      asset: "Boy",
    },
    {
      glyph: "speech",
      asset: "Speech balloon",
    },
    {
      glyph: "sun",
      asset: "Sun",
    },
    {
      glyph: "sky",
      asset: "Milky way",
    },
    {
      glyph: "hug",
      asset: "People hugging",
    },
    {
      glyph: "footprints",
      asset: "Footprints",
    },
    {
      glyph: "person_other",
      asset: "Person",
    },
    {
      glyph: "door",
      asset: "Door",
    },
    {
      glyph: "man_beard",
      asset: "Person beard",
    },
    {
      glyph: "woman",
      asset: "Woman",
    },
    {
      glyph: "crowd",
      asset: "Busts in silhouette",
    },
    {
      glyph: "handshake",
      asset: "Handshake",
    },
    {
      glyph: "king",
      asset: "Prince",
    },
    {
      glyph: "kneeling",
      asset: "Person kneeling",
    },
    {
      glyph: "walking",
      asset: "Person walking",
    },
    {
      glyph: "learner",
      asset: "Graduation cap",
    },
    {
      glyph: "angel",
      asset: "Baby angel",
    },
    {
      glyph: "mouth",
      asset: "Mouth",
    },
    {
      glyph: "voice",
      asset: "Speaking head",
    },
    {
      glyph: "ear",
      asset: "Ear",
    },
    {
      glyph: "eye",
      asset: "Eye",
    },
    {
      glyph: "eyes",
      asset: "Eyes",
    },
    {
      glyph: "hand",
      asset: "Raised hand",
    },
    {
      glyph: "hands_giving",
      asset: "Palms up together",
    },
    {
      glyph: "hand_receiving",
      asset: "Palm up hand",
    },
    {
      glyph: "hand_sending",
      asset: "Rightwards pushing hand",
    },
    {
      glyph: "hands_praying",
      asset: "Folded hands",
    },
    {
      glyph: "thumbs_up",
      asset: "Thumbs up",
    },
    {
      glyph: "heart_organ",
      asset: "Anatomical heart",
    },
    {
      glyph: "meat",
      asset: "Cut of meat",
    },
    {
      glyph: "bread",
      asset: "Bread",
    },
    {
      glyph: "sword",
      asset: "Dagger",
    },
    {
      glyph: "blood",
      asset: "Drop of blood",
    },
    {
      glyph: "skull",
      asset: "Skull",
    },
    {
      glyph: "sprout",
      asset: "Seedling",
    },
    {
      glyph: "earth",
      asset: "Globe showing europe-africa",
    },
    {
      glyph: "globe",
      asset: "Globe with meridians",
    },
    {
      glyph: "map",
      asset: "World map",
    },
    {
      glyph: "city",
      asset: "Cityscape",
    },
    {
      glyph: "castle",
      asset: "Castle",
    },
    {
      glyph: "house",
      asset: "House",
    },
    {
      glyph: "church",
      asset: "Church",
    },
    {
      glyph: "menorah",
      asset: "Menorah",
    },
    {
      glyph: "scroll",
      asset: "Scroll",
    },
    {
      glyph: "megaphone",
      asset: "Megaphone",
    },
    {
      glyph: "bow",
      asset: "Bow and arrow",
    },
    {
      glyph: "star",
      asset: "Glowing star",
    },
    {
      glyph: "gift",
      asset: "Wrapped gift",
    },
    {
      glyph: "anchor",
      asset: "Anchor",
    },
    {
      glyph: "hourglass",
      asset: "Hourglass not done",
    },
    {
      glyph: "lightning",
      asset: "High voltage",
    },
    {
      glyph: "key",
      asset: "Key",
    },
    {
      glyph: "lightbulb",
      asset: "Light bulb",
    },
    {
      glyph: "check",
      asset: "Check mark button",
    },
    {
      glyph: "hammer",
      asset: "Hammer",
    },
    {
      glyph: "tools",
      asset: "Hammer and wrench",
    },
    {
      glyph: "road",
      asset: "Motorway",
    },
    {
      glyph: "turn_back",
      asset: "Right arrow curving left",
    },
    {
      glyph: "thumbs_down",
      asset: "Thumbs down",
    },
    {
      glyph: "bowing",
      asset: "Person bowing",
    },
    {
      glyph: "mountain",
      asset: "Mountain",
    },
    {
      glyph: "scales",
      asset: "Balance scale",
    },
    {
      glyph: "sea",
      asset: "Water wave",
    },
    {
      glyph: "light",
      asset: "Bright button",
    },
    {
      glyph: "darkness",
      asset: "Black large square",
    },
    {
      glyph: "witness",
      asset: "Person raising hand",
    },
    {
      glyph: "plus",
      asset: "Plus",
    },
    {
      glyph: "tray_in",
      asset: "Inbox tray",
    },
    {
      glyph: "tray_out",
      asset: "Outbox tray",
    },
    {
      glyph: "pointing",
      asset: "Backhand index pointing right",
    },
    {
      glyph: "pointing_down",
      asset: "Backhand index pointing down",
    },
    {
      glyph: "pointing_back",
      asset: "Backhand index pointing left",
    },
    {
      glyph: "me",
      asset: "Bust in silhouette",
    },
    {
      glyph: "you",
      asset: "Index pointing at the viewer",
    },
    {
      glyph: "toward",
      asset: "Bullseye",
    },
    {
      glyph: "likeness",
      asset: "Mirror",
    },
    {
      glyph: "pin",
      asset: "Pushpin",
    },
    {
      glyph: "link",
      asset: "Link",
    },
    {
      glyph: "pointing_up",
      asset: "Index pointing up",
    },
    {
      glyph: "finish",
      asset: "Chequered flag",
    },
    {
      glyph: "face",
      asset: "Neutral face",
    },
    {
      glyph: "all",
      asset: "Hundred points",
    },
    {
      glyph: "equals",
      asset: "Heavy equals sign",
    },
    {
      glyph: "no_entry",
      asset: "Prohibited",
    },
    {
      glyph: "smile",
      asset: "Grinning face",
    },
    {
      glyph: "arrow_both_ways",
      asset: "Left-right arrow",
    },
    {
      glyph: "water",
      asset: "Droplet",
    },
    {
      glyph: "child",
      asset: "Child",
    },
    {
      glyph: "hands_raised",
      asset: "Raising hands",
    },
    {
      glyph: "sheep",
      asset: "Ewe",
    },
    {
      glyph: "ruler",
      asset: "Straight ruler",
    },
    {
      glyph: "fear",
      asset: "Face screaming in fear",
    },
    {
      glyph: "moon",
      asset: "Crescent moon",
    },
    {
      glyph: "fish",
      asset: "Fish",
    },
    {
      glyph: "bird",
      asset: "Bird",
    },
    {
      glyph: "tree",
      asset: "Deciduous tree",
    },
    {
      glyph: "tent",
      asset: "Tent",
    },
    {
      glyph: "foot",
      asset: "Foot",
    },
    {
      glyph: "horse",
      asset: "Horse",
    },
    {
      glyph: "cloud",
      asset: "Cloud",
    },
    {
      glyph: "donkey",
      asset: "Donkey",
    },
    {
      glyph: "lion",
      asset: "Lion",
    },
    {
      glyph: "bed",
      asset: "Bed",
    },
    {
      glyph: "rock",
      asset: "Rock",
    },
    {
      glyph: "trumpet",
      asset: "Trumpet",
    },
    {
      glyph: "camel",
      asset: "Camel",
    },
    {
      glyph: "ox",
      asset: "Ox",
    },
    {
      glyph: "basket",
      asset: "Basket",
    },
    {
      glyph: "goat",
      asset: "Goat",
    },
    {
      glyph: "ram",
      asset: "Ram",
    },
    {
      glyph: "jar",
      asset: "Jar",
    },
    {
      glyph: "olive",
      asset: "Olive",
    },
    {
      glyph: "grapes",
      asset: "Grapes",
    },
    {
      glyph: "girl",
      asset: "Girl",
    },
    {
      glyph: "dog",
      asset: "Dog",
    },
    {
      glyph: "snake",
      asset: "Snake",
    },
    {
      glyph: "ring",
      asset: "Ring",
    },
    {
      glyph: "eagle",
      asset: "Eagle",
    },
    {
      glyph: "ship",
      asset: "Ship",
    },
    {
      glyph: "shield",
      asset: "Shield",
    },
    {
      glyph: "window",
      asset: "Window",
    },
    {
      glyph: "wolf",
      asset: "Wolf",
    },
    {
      glyph: "fox",
      asset: "Fox",
    },
    {
      glyph: "frog",
      asset: "Frog",
    },
    {
      glyph: "scorpion",
      asset: "Scorpion",
    },
    {
      glyph: "night",
      asset: "Night with stars",
    },
    {
      glyph: "wine",
      asset: "Wine glass",
    },
    {
      glyph: "honey",
      asset: "Honey pot",
    },
    {
      glyph: "milk",
      asset: "Glass of milk",
    },
    {
      glyph: "snow",
      asset: "Snowflake",
    },
    {
      glyph: "sandal",
      asset: "Thong sandal",
    },
    {
      glyph: "lamp",
      asset: "Diya lamp",
    },
    {
      glyph: "morning",
      asset: "Sunrise",
    },
    {
      glyph: "cedar",
      asset: "Evergreen tree",
    },
    {
      glyph: "song",
      asset: "Musical notes",
    },
    {
      glyph: "wilderness",
      asset: "Desert",
    },
    {
      glyph: "rain",
      asset: "Cloud with rain",
    },
  ];
  return names;
}
