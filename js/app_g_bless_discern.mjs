import { arguments_assert } from "./arguments_assert.mjs";
import { g_prayer_discern } from "./g_prayer_discern.mjs";
import { app_g_bless_pray_words } from "./app_g_bless_pray_words.mjs";
import { app_g_bless_discern_button } from "./app_g_bless_discern_button.mjs";
export function app_g_bless_discern(container_map, bar, on_amen) {
  arguments_assert(arguments, 3);
  ("The prayer for discernment, from the button that offers it to the amen that ends it.");
  ("Pressing it does not answer anything. It puts the prayer up to be read, exactly as");
  ("praying over a person does, and only the amen asks for an answer - so the answer is");
  ("something the player prayed for rather than something a button gave them. That is the");
  ("whole of why this is in the game: it is the one place where somebody else picks, and a");
  ("button that picked on being pressed would be a hint dressed as a prayer.");
  ("The words are this street's OWN discernment prayer and not the gospel game's, though");
  ("the two ask the same question. There the player SPEAKS with whoever they are led to, so");
  ("its petitions may say hear and say speak with; here nobody is ever spoken to and the");
  ("answer asked for is somebody to pray FOR. Borrowing the day walk's words put a prayer");
  ("about being heard in front of a player who had nobody to say it to.");
  ("The shared half is still called rather than copied - the address, the asking word, the");
  ("closing and the bow and hands are one shape both games wear, so only the verb is");
  ("written in two places, and the verb is the whole of what each game is.");
  ("It is drawn at random from several petitions, so the prayer said on the fiftieth");
  ("asking is not word for word the prayer said on the first. A prayer that is always");
  ("identical stops being read, and the player's eye goes to the amen.");
  ("The bare prayer is also what is printed. The pictures that stand around the prayer over");
  ("a person are there because that prayer never changes a word; this one changes its own");
  ("words, so it does not need them.");
  function ask() {
    let prayer = bless_prayer_discern();
    app_g_bless_pray_words(container_map, prayer, prayer, on_amen);
  }
  let button = app_g_bless_discern_button(bar, ask);
  return button;
}
