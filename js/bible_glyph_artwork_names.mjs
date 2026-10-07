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
      glyph: "face_steam",
      asset: "Face with steam from nose",
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
      asset: "Backhand index pointing up",
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
      glyph: "might",
      asset: "Flexed biceps",
    },
    {
      glyph: "rescue",
      asset: "Ring buoy",
    },
    {
      glyph: "i_am",
      asset: "Infinity",
    },
    {
      glyph: "proper_name",
      asset: "Name badge",
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
      glyph: "new_moon",
      asset: "New moon",
    },
    {
      glyph: "one",
      asset: "Keycap 1",
    },
    {
      glyph: "two",
      asset: "Keycap 2",
    },
    {
      glyph: "three",
      asset: "Keycap 3",
    },
    {
      glyph: "seven",
      asset: "Keycap 7",
    },
    {
      glyph: "brick",
      asset: "Brick",
    },
    {
      glyph: "crossed_swords",
      asset: "Crossed swords",
    },
    {
      glyph: "clock",
      asset: "Mantelpiece clock",
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
    {
      glyph: "year",
      asset: "Calendar",
    },
    {
      glyph: "eating",
      asset: "Fork and knife with plate",
    },
    {
      glyph: "lifting",
      asset: "Person lifting weights",
    },
    {
      glyph: "fist",
      asset: "Oncoming fist",
    },
    {
      glyph: "baby",
      asset: "Baby",
    },
    {
      glyph: "tomb",
      asset: "Headstone",
    },
    {
      glyph: "cloak",
      asset: "Coat",
    },
    {
      glyph: "garment",
      asset: "T-shirt",
    },
    {
      glyph: "snare",
      asset: "Mouse trap",
    },
    {
      glyph: "cup",
      asset: "Teacup without handle",
    },
    {
      glyph: "dream",
      asset: "Thought balloon",
    },
    {
      glyph: "tower",
      asset: "Tokyo tower",
    },
    {
      glyph: "wall",
      asset: "Brick",
    },
    {
      glyph: "raven",
      asset: "Blackbird",
    },
    {
      glyph: "locusts",
      asset: "Cricket",
    },
    {
      glyph: "lots",
      asset: "Game die",
    },
    {
      glyph: "harp",
      asset: "Banjo",
    },
    {
      glyph: "tambourine",
      asset: "Long drum",
    },
    {
      glyph: "cave",
      asset: "Hole",
    },
    {
      glyph: "wheat",
      asset: "Sheaf of rice",
    },
    {
      glyph: "throne",
      asset: "Chair",
    },
    {
      glyph: "queen",
      asset: "Person with crown",
    },
    {
      glyph: "dawn",
      asset: "Sunrise over mountains",
    },
    {
      glyph: "thorns",
      asset: "Cactus",
    },
    {
      glyph: "bull",
      asset: "Cow",
    },
    {
      glyph: "mother",
      asset: "Woman feeding baby",
    },
    {
      glyph: "net",
      asset: "Goal net",
    },
    {
      glyph: "camp",
      asset: "Camping",
    },
    {
      glyph: "away",
      asset: "Left arrow",
    },
    {
      glyph: "writing_hand",
      asset: "Writing hand",
    },
    {
      glyph: "teacher",
      asset: "Teacher",
    },
    {
      glyph: "magnifying_glass",
      asset: "Magnifying glass tilted left",
    },
    {
      glyph: "exclamation",
      asset: "Red exclamation mark",
    },
    {
      glyph: "waving_hand",
      asset: "Waving hand",
    },
    {
      glyph: "guard",
      asset: "Guard",
    },
    {
      glyph: "angry_face",
      asset: "Angry face",
    },
    {
      glyph: "old_man",
      asset: "Old man",
    },
    {
      glyph: "placard",
      asset: "Placard",
    },
    {
      glyph: "unlocked",
      asset: "Unlocked",
    },
    {
      glyph: "question",
      asset: "Red question mark",
    },
    {
      glyph: "five",
      asset: "Keycap 5",
    },
    {
      glyph: "four",
      asset: "Keycap 4",
    },
    {
      glyph: "ten",
      asset: "Keycap 10",
    },
    {
      glyph: "scissors",
      asset: "Scissors",
    },
    {
      glyph: "military_helmet",
      asset: "Military helmet",
    },
    {
      glyph: "palm_down",
      asset: "Palm down hand",
    },
    {
      glyph: "bridge",
      asset: "Bridge at night",
    },
    {
      glyph: "first_place",
      asset: "1st place medal",
    },
    {
      glyph: "loudspeaker",
      asset: "Speaker high volume",
    },
    {
      glyph: "up_arrow",
      asset: "Up arrow",
    },
    {
      glyph: "hollow_circle",
      asset: "Hollow red circle",
    },
    {
      glyph: "cup_with_straw",
      asset: "Cup with straw",
    },
    {
      glyph: "seat",
      asset: "Seat",
    },
    {
      glyph: "six",
      asset: "Keycap 6",
    },
    {
      glyph: "classical_building",
      asset: "Classical building",
    },
    {
      glyph: "synagogue",
      asset: "Synagogue",
    },
    {
      glyph: "public_address",
      asset: "Loudspeaker",
    },
    {
      glyph: "reminder_ribbon",
      asset: "Reminder ribbon",
    },
    {
      glyph: "paw_prints",
      asset: "Paw prints",
    },
    {
      glyph: "brain",
      asset: "Brain",
    },
    {
      glyph: "clapping_hands",
      asset: "Clapping hands",
    },
    {
      glyph: "wrestling",
      asset: "Person wrestling",
    },
    {
      glyph: "two_hearts",
      asset: "Two hearts",
    },
    {
      glyph: "fishing_pole",
      asset: "Fishing pole",
    },
    {
      glyph: "face_spiral",
      asset: "Face with spiral eyes",
    },
    {
      glyph: "military_medal",
      asset: "Military medal",
    },
    {
      glyph: "houses",
      asset: "Houses",
    },
    {
      glyph: "toolbox",
      asset: "Toolbox",
    },
    {
      glyph: "throwing",
      asset: "Person playing handball",
    },
    {
      glyph: "multiply",
      asset: "Multiply",
    },
    {
      glyph: "newspaper",
      asset: "Rolled-up newspaper",
    },
    {
      glyph: "around",
      asset: "Counterclockwise arrows button",
    },
    {
      glyph: "magnet",
      asset: "Magnet",
    },
    {
      glyph: "top",
      asset: "Top arrow",
    },
    {
      glyph: "round_pushpin",
      asset: "Round pushpin",
    },
    {
      glyph: "input_numbers",
      asset: "Input numbers",
    },
    {
      glyph: "crossed_fingers",
      asset: "Crossed fingers",
    },
    {
      glyph: "next_track",
      asset: "Next track button",
    },
    {
      glyph: "watch",
      asset: "Watch",
    },
    {
      glyph: "repeat",
      asset: "Repeat button",
    },
    {
      glyph: "shuffle",
      asset: "Shuffle tracks button",
    },
    {
      glyph: "dotted_line_face",
      asset: "Dotted line face",
    },
    {
      glyph: "right_arrow",
      asset: "Right arrow",
    },
    {
      glyph: "flashlight",
      asset: "Flashlight",
    },
    {
      glyph: "back",
      asset: "Back arrow",
    },
    {
      glyph: "curving_right",
      asset: "Left arrow curving right",
    },
    {
      glyph: "information",
      asset: "Information",
    },
    {
      glyph: "curving_up",
      asset: "Right arrow curving up",
    },
    {
      glyph: "raised_fist",
      asset: "Raised fist",
    },
    {
      glyph: "traffic_light",
      asset: "Vertical traffic light",
    },
    {
      glyph: "linked_paperclips",
      asset: "Linked paperclips",
    },
    {
      glyph: "metro",
      asset: "Metro",
    },
    {
      glyph: "safety_pin",
      asset: "Safety pin",
    },
    {
      glyph: "telescope",
      asset: "Telescope",
    },
    {
      glyph: "butterfly",
      asset: "Butterfly",
    },
    {
      glyph: "balloon",
      asset: "Balloon",
    },
    {
      glyph: "pleading",
      asset: "Pleading face",
    },
    {
      glyph: "microphone",
      asset: "Studio microphone",
    },
    {
      glyph: "battery",
      asset: "Battery",
    },
    {
      glyph: "passport_control",
      asset: "Passport control",
    },
    {
      glyph: "gear",
      asset: "Gear",
    },
    {
      glyph: "soon",
      asset: "Soon arrow",
    },
    {
      glyph: "zero",
      asset: "Keycap 0",
    },
    {
      glyph: "hatching_chick",
      asset: "Hatching chick",
    },
    {
      glyph: "alarm_clock",
      asset: "Alarm clock",
    },
    {
      glyph: "clapper_board",
      asset: "Clapper board",
    },
    {
      glyph: "diving_mask",
      asset: "Diving mask",
    },
    {
      glyph: "triangular_ruler",
      asset: "Triangular ruler",
    },
    {
      glyph: "double_exclamation",
      asset: "Double exclamation mark",
    },
    {
      glyph: "raised_back_of_hand",
      asset: "Raised back of hand",
    },
    {
      glyph: "end_arrow",
      asset: "End arrow",
    },
    {
      glyph: "second_place",
      asset: "2nd place medal",
    },
    {
      glyph: "third_place",
      asset: "3rd place medal",
    },
    {
      glyph: "sunset",
      asset: "Sunset",
    },
    {
      glyph: "cow_face",
      asset: "Cow face",
    },
    {
      glyph: "national_park",
      asset: "National park",
    },
    {
      glyph: "tongue",
      asset: "Tongue",
    },
    {
      glyph: "pinching_hand",
      asset: "Pinching hand",
    },
    {
      glyph: "laughing",
      asset: "Face with tears of joy",
    },
    {
      glyph: "clamp",
      asset: "Clamp",
    },
    {
      glyph: "compass",
      asset: "Compass",
    },
    {
      glyph: "wilted_flower",
      asset: "Wilted flower",
    },
    {
      glyph: "dashing_away",
      asset: "Dashing away",
    },
    {
      glyph: "triangular_flag",
      asset: "Triangular flag",
    },
    {
      glyph: "brown_square",
      asset: "Brown square",
    },
    {
      glyph: "radio_button",
      asset: "Radio button",
    },
    {
      glyph: "joker",
      asset: "Joker",
    },
    {
      glyph: "fast_forward",
      asset: "Fast-forward button",
    },
    {
      glyph: "saluting_face",
      asset: "Saluting face",
    },
    {
      glyph: "weary_face",
      asset: "Weary face",
    },
    {
      glyph: "check_box",
      asset: "Check box with check",
    },
    {
      glyph: "down_arrow",
      asset: "Down arrow",
    },
    {
      glyph: "peace",
      asset: "Relieved face",
    },
    {
      glyph: "white_cane",
      asset: "White cane",
    },
    {
      glyph: "astonished",
      asset: "Astonished face",
    },
    {
      glyph: "running",
      asset: "Person running",
    },
    {
      glyph: "loudly_crying",
      asset: "Loudly crying face",
    },
    {
      glyph: "new_button",
      asset: "New button",
    },
    {
      glyph: "thermometer_face",
      asset: "Face with thermometer",
    },
    {
      glyph: "open_book",
      asset: "Open book",
    },
    {
      glyph: "thinking",
      asset: "Thinking face",
    },
    {
      glyph: "lying_face",
      asset: "Lying face",
    },
    {
      glyph: "flushed",
      asset: "Flushed face",
    },
    {
      glyph: "bandage",
      asset: "Adhesive bandage",
    },
    {
      glyph: "knot",
      asset: "Knot",
    },
    {
      glyph: "vomiting",
      asset: "Face vomiting",
    },
    {
      glyph: "peacock",
      asset: "Peacock",
    },
    {
      glyph: "gesturing_no",
      asset: "Person gesturing no",
    },
    {
      glyph: "test_tube",
      asset: "Test tube",
    },
    {
      glyph: "imp",
      asset: "Angry face with horns",
    },
    {
      glyph: "timer_clock",
      asset: "Timer clock",
    },
    {
      glyph: "abacus",
      asset: "Abacus",
    },
    {
      glyph: "beaming",
      asset: "Beaming face with smiling eyes",
    },
    {
      glyph: "collision",
      asset: "Collision",
    },
    {
      glyph: "doing",
      asset: "Play button",
    },
    {
      glyph: "doer",
      asset: "Construction worker",
    },
    {
      glyph: "thing",
      asset: "Small blue diamond",
    },
    {
      glyph: "describing",
      asset: "Small orange diamond",
    },
    {
      glyph: "manner",
      asset: "Wavy dash",
    },
    {
      glyph: "more",
      asset: "Upwards button",
    },
    {
      glyph: "most",
      asset: "Fast up button",
    },
    {
      glyph: "sun_with_face",
      asset: "Sun with face",
    },
    {
      glyph: "wing",
      asset: "Wing",
    },
    {
      glyph: "up_down_arrow",
      asset: "Up-down arrow",
    },
    {
      glyph: "soap",
      asset: "Soap",
    },
    {
      glyph: "locked",
      asset: "Locked",
    },
    {
      glyph: "coin",
      asset: "Coin",
    },
    {
      glyph: "eight",
      asset: "Keycap 8",
    },
    {
      glyph: "nine",
      asset: "Keycap 9",
    },
    {
      glyph: "pig",
      asset: "Pig",
    },
    {
      glyph: "tooth",
      asset: "Tooth",
    },
    {
      glyph: "worm",
      asset: "Worm",
    },
    {
      glyph: "horse_racing",
      asset: "Horse racing",
    },
    {
      glyph: "flatbread",
      asset: "Flatbread",
    },
    {
      glyph: "pregnant_woman",
      asset: "Pregnant woman",
    },
    {
      glyph: "money_bag",
      asset: "Money bag",
    },
    {
      glyph: "party_popper",
      asset: "Party popper",
    },
    {
      glyph: "evergreen_tree",
      asset: "Evergreen tree",
    },
    {
      glyph: "pouring_liquid",
      asset: "Pouring liquid",
    },
    {
      glyph: "bathtub",
      asset: "Bathtub",
    },
    {
      glyph: "blossom",
      asset: "Blossom",
    },
    {
      glyph: "divide",
      asset: "Divide",
    },
    {
      glyph: "trophy",
      asset: "Trophy",
    },
    {
      glyph: "salt",
      asset: "Salt",
    },
    {
      glyph: "tornado",
      asset: "Tornado",
    },
    {
      glyph: "herb",
      asset: "Herb",
    },
    {
      glyph: "milky_way",
      asset: "Milky way",
    },
    {
      glyph: "leg",
      asset: "Leg",
    },
    {
      glyph: "broken_chain",
      asset: "Broken chain",
    },
    {
      glyph: "kitchen_knife",
      asset: "Kitchen knife",
    },
    {
      glyph: "ring_buoy",
      asset: "Ring buoy",
    },
    {
      glyph: "gem_stone",
      asset: "Gem stone",
    },
    {
      glyph: "fog",
      asset: "Fog",
    },
    {
      glyph: "nose",
      asset: "Nose",
    },
    {
      glyph: "flexed_biceps",
      asset: "Flexed biceps",
    },
    {
      glyph: "palm_up_hand",
      asset: "Palm up hand",
    },
    {
      glyph: "infinity",
      asset: "Infinity",
    },
  ];
  return names;
}
