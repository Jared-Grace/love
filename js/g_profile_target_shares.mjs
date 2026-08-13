export function g_profile_target_shares() {
  "What share of the dealt cast each axis value SHOULD hold, out of a hundred per axis, so the people a player meets are the people the setting actually held.";
  "This is a target, not a mechanism. Nothing deals profiles yet, and when a dealer is written this is the shape it aims at; until then it is the written-down answer to a question the deck was answering by accident.";
  "The deck cannot carry this itself, and that is the whole reason for a second file. g_profiles is one row per VALID combination, so its shape comes from how many values each axis happens to have. Correcting a share by pruning the deck would delete people who really lived in order to fix a ratio. Weighting the draw leaves every one of them constructible and only changes how often they are met.";
  "Gender is the clearest case. No woman held Roman office or served in a legion, so the sieve withholds two of three government roles from women - a rule that is TRUE, and whose side effect is a cast a third female, which is false. Keep the true rule, correct the frequency here.";
  "The numbers come from Scripture, from what tradition records of the early church, and from what is known of Roman demography - in that order where they speak to the same thing. Roman demography is model estimate rather than measurement (life expectancy at birth near twenty-five, a population far younger than any modern one), so these are directional and each is meant to be argued with on its own line.";
  "WHO IS MET and WHO BELIEVES are two distributions, and only the first is here. James 2 verse 5 says God chose the poor of this world to be rich in faith, and 1 Corinthians 1 verse 26 says not many wise, not many mighty, not many noble were called - both speak to who comes to faith, not to who lives in the town. So the poor should be the bulk of the CONVERTS beyond even their share of the population, and that belongs wherever belief is decided rather than here.";
  "Not many is a proportion and never none. Lydia dealt in purple, Cornelius was a centurion, Erastus kept the city treasury, Philemon had servants - the mighty and the noble did come, rarely. A share of zero would contradict Scripture as plainly as a share of a quarter does.";
  ("AGE is where the deck is furthest out. An ancient population was strikingly young - well over a third under fifteen - and the deck runs a fifth elderly against a twenty-fifth teenage, which is an old population where the real one was young.");
  ("MARRIAGE was near universal for adults, women marrying in their teens and men in their late twenties, so single belongs mostly to the young men. Widows are numerous rather than exceptional for the same reason, and 1 Timothy 5 verses 3 to 16 addresses them as a standing class of the church with its own roll.");
  ("SERVITUDE follows history for who is met: slaves perhaps a tenth to a seventh of the empire, freedmen a real and visible urban class but nowhere near a quarter of everyone, and the great bulk of people poor and free. The deck has free at under a third, which inverts the setting.");
  ("HAS SERVANTS is held down by Scripture rather than by demography. It is the master's side of Ephesians 6 verse 9 and Philemon, and those passages are wanted - but wanting the passage is not a reason to make the household common, and 1 Corinthians 1 verse 26 says plainly that it was not.");
  ("GOVERNMENT ROLE is rare on both counts. The legions came to perhaps three or four hundred thousand men in an empire of tens of millions, office was a tiny elite, and not many mighty says the same thing from the other direction. Soldiers sit slightly above their true share because the setting is Rome persecuting Christians and a soldier is the face of that.");
  ("CHILDREN follow the marriages. Fertility had to be high to hold a population against that mortality, so a couple with any surviving children usually had more than one, and none carries the unmarried as well as the childless.");
  let r = {
    gender: {
      male: 50,
      female: 50,
    },
    age: {
      teenager: 18,
      "young adult": 33,
      "middle-aged": 24,
      older: 17,
      elderly: 8,
    },
    marital_status: {
      single: 14,
      betrothed: 4,
      married: 62,
      widowed: 20,
    },
    sons: {
      none: 32,
      one: 28,
      multiple: 40,
    },
    daughters: {
      none: 32,
      one: 28,
      multiple: 40,
    },
    servitude: {
      free: 62,
      "is a bondservant": 15,
      "was a bondservant": 15,
      "has servants": 8,
    },
    government_role: {
      none: 92,
      official: 3,
      soldier: 5,
    },
  };
  return r;
}
