export function g_profile_target_shares() {
  "What share of the dealt cast each axis value SHOULD hold, out of a hundred per axis, so the people a player meets are the people the setting actually held.";
  "This is a target, not a mechanism. Nothing deals profiles yet, and when a dealer is written this is the shape it aims at; until then it is the written-down answer to a question the deck was answering by accident.";
  "The deck cannot carry this itself, and that is the whole reason for a second file. g_profiles is one row per VALID combination, so its shape comes from how many values each axis happens to have. Correcting a share by pruning the deck would delete people who really lived in order to fix a ratio. Weighting the draw leaves every one of them constructible and only changes how often they are met.";
  "Gender is the clearest case. No woman held Roman office or served in a legion, so the sieve withholds two of three government roles from women - a rule that is TRUE, and whose side effect is a cast a third female, which is false. Keep the true rule, correct the frequency here.";
  "The numbers come from Scripture, from what tradition records of the early church, and from what is known of Roman demography - in that order where they speak to the same thing. Roman demography is model estimate rather than measurement (life expectancy at birth near twenty-five, a population far younger than any modern one), so these are directional and each is meant to be argued with on its own line.";
  "These are the shares of the CHURCH rather than of the town, and the two would differ if the game held both. Every conversable person comes to faith - there is no rejecting outcome - so the cast a player meets and the people who believe are one set under two names, and a share written here is a share of the believers.";
  "That single outcome is a design decision and it is the hopeful one. God is not willing that any should perish but that all should come to repentance, 2 Peter 3 verse 9, and desires all men to be saved and to come to the knowledge of the truth, 1 Timothy 2 verse 4. It is also the simpler thing to build: one ending needs no branch, no rejection state, and no second set of words for a door that closed.";
  "So James 2 verse 5 and 1 Corinthians 1 verse 26 bear on these numbers DIRECTLY rather than on some later step. God chose the poor of this world to be rich in faith, and not many wise, not many mighty, not many noble were called - those describe a church, and this table is a church. That is why the shares here lean poorer than Roman demography alone would put them: slaves and freedmen above their share of the population, the mighty below it.";
  "Tradition says the same from outside. Celsus sneered that Christians were wool-workers and cobblers and laundry-workers, and that the faith spread through women; Pliny, writing to Trajan, tortured two women he calls ministrae. Both are hostile witnesses, which is what makes them worth citing - neither had a reason to flatter the church about who it held.";
  "Pliny also reports Christians of every age and every rank, omnis ordinis, so no share here is zero. Lydia dealt in purple, Cornelius was a centurion, Erastus kept the city treasury, Philemon had servants. NOT MANY is a proportion, and a table that wrote nought would contradict Scripture as plainly as one that wrote a quarter.";
  "PLOT people are not dealt from here at all and so are not counted in these shares. Demons in a prison, the soldiers of a persecution, anything that arrives in a cut scene - those are authored for the story they carry, and a share is the wrong instrument for something there is exactly one of. This table spreads the ORDINARY cast, which is the set of people a player walks up to and shares the gospel with.";
  ("AGE is where the deck is furthest out. An ancient population was strikingly young - well over a third under fifteen - and the deck runs a fifth elderly against a twenty-fifth teenage, which is an old population where the real one was young.");
  ("MARRIAGE was near universal for adults, women marrying in their teens and men in their late twenties, so single belongs mostly to the young men. Widows are numerous rather than exceptional for the same reason, and 1 Timothy 5 verses 3 to 16 addresses them as a standing class of the church with its own roll.");
  ("SERVITUDE follows history for who is met: slaves perhaps a tenth to a seventh of the empire, freedmen a real and visible urban class but nowhere near a quarter of everyone, and the great bulk of people poor and free. The deck has free at under a third, which inverts the setting.");
  ("HAS SERVANTS is held down by Scripture rather than by demography. It is the master's side of Ephesians 6 verse 9 and Philemon, and those passages are wanted - but wanting the passage is not a reason to make the household common, and 1 Corinthians 1 verse 26 says plainly that it was not.");
  ("GOVERNMENT ROLE is rare on both counts. The legions came to perhaps three or four hundred thousand men in an empire of tens of millions, office was a tiny elite, and not many mighty says the same thing from the other direction. Soldiers sit slightly above their true share because the setting is Rome persecuting Christians and a soldier is the face of that.");
  ("CHILDREN follow the marriages. Fertility had to be high to hold a population against that mortality, so a couple with any surviving children usually had more than one, and none carries the unmarried as well as the childless.");
  let r = {
    gender: {
      male: 45,
      female: 55,
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
      married: 60,
      widowed: 22,
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
      free: 53,
      "is a bondservant": 22,
      "was a bondservant": 20,
      "has servants": 5,
    },
    government_role: {
      none: 95,
      official: 2,
      soldier: 3,
    },
  };
  return r;
}
