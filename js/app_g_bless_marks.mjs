import { bless_view_finish_first } from "./bless_view_finish_first.mjs";
import { app_g_bless_lit_except } from "./app_g_bless_lit_except.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_blessed } from "./bless_view_blessed.mjs";
import { app_g_bless_glows } from "./app_g_bless_glows.mjs";
import { app_g_bless_homes } from "./app_g_bless_homes.mjs";
import { bless_view_household_started } from "./bless_view_household_started.mjs";
import { app_g_bless_rings } from "./app_g_bless_rings.mjs";
import { app_g_bless_pointers } from "./app_g_bless_pointers.mjs";
export function app_g_bless_marks({
  glows,
  homes,
  blocks,
  blessed,
  everyone,
  ground,
  held,
  discerned,
}) {
  arguments_assert(arguments, 1);
  ("Draws everything the record has to say about the street: the lights on the people who");
  ("have been prayed for, the houses filled in behind them, and the rings on the people left");
  ("in a house the player has started.");
  ("The three are said together because they are one answer read three ways, and they are");
  ("all read from the same record on the same step. A prayer that finished a household");
  ("lights the last face, fills the last third of the house and takes the last ring off at");
  ("the same moment, because all three are asked after the prayer is written down.");
  ("Every one of them is worked out over the WHOLE street rather than over what the player");
  ("can see. A prayer said is a fact about a person and a filled house is a fact about a");
  ("house, and neither stops being true while the player is round the corner. Drawn only");
  ("where the player was looking, the street would go dark behind them and the map would");
  ("forget where the work had reached - and the map is the whole of how a player knows");
  ("where to pray next.");
  ("A few of the prayed-for may be held OUT of the gold pass, and they are named rather");
  ("than worked out here. A prayer that has just landed is being celebrated with a light of");
  ("its own on those very faces, and the mark they keep afterwards must not be up while");
  ("that is still arriving - the player would meet what remains before what arrives, and on");
  ("the same few pixels the two would read as one mark getting brighter. Who is being");
  ("celebrated is known only where the celebration is run, so it is handed in.");
  ("Named as PEOPLE and not as a moment in time, because the street is redrawn on its own");
  ("clock all through a celebration - every step every walking person takes asks for this");
  ("again. A hold that was a single skipped draw was undone by the next of those within a");
  ("breath, which is the whole reason this is a list and not a flag.");
  let lit = bless_view_blessed(blessed, everyone);
  let shown = app_g_bless_lit_except(lit, held);
  app_g_bless_glows(glows, everyone, shown);
  ("The ground is the one of the three that can be asked to WAIT. A prayer that finishes a");
  ("house lights the last resident and fills the house in at the same instant as far as the");
  ("record is concerned, but the player is shown those one after the other - so the caller");
  ("that is about to celebrate a face can say not yet, and put the house up afterwards.");
  ("Waiting costs nothing and loses nothing, because the houses are never rubbed out except");
  ("by being drawn again. Skipping the draw leaves the last one standing, which is every");
  ("house that was already lit - and the only one missing from it is the house this very");
  ("prayer finished.");
  ("The faces and the rings are never held back. They are about the person just prayed for,");
  ("and the person just prayed for is what the player is looking at.");
  if (ground) {
    app_g_bless_homes(homes, blessed, blocks);
  }
  ("The ring is worked out last because it is the only one of the three that can be wrong");
  ("about somebody already handled: it asks who is left, and who is left is decided by the");
  ("same record the light was just read from.");
  let remaining = bless_view_household_started(blessed, everyone);
  app_g_bless_rings(glows, everyone, remaining);
  ("Ringed and POINTED AT are no longer the same people, and that is the whole difference");
  ("between the two marks. A ring says the player has prayed in this house before and has");
  ("not finished it - a fact, true of every house they have opened, and it stays up. An");
  ("arrow says go here next, and an arrow over ten heads at once has not said anything.");
  ("So the pointing is narrowed to the one house that should be closed first, and which");
  ("house that is is worked out where the record can be read rather than here.");
  ("Both are still drawn onto the same layer. A ring is on the ground and an arrow is over a");
  ("head, so a crowd that hides one of them cannot hide the other - and which of the two a");
  ("player notices first is a question about where they happen to be standing, not one this");
  ("has to answer.");
  ("An answered prayer for discernment is folded in here rather than pointed at from");
  ("somewhere of its own, so the two hints are one hint. The arrow over a head and the");
  ("arrow at the edge of the screen both aim at whatever comes back from this, and a");
  ("discerned person aimed at from a second place would be a third arrow disagreeing with");
  ("the other two.");
  let started = bless_view_finish_first(blessed, remaining);
  let next = bless_view_aimed(blessed, started, discerned);
  app_g_bless_pointers(glows, everyone, next);
  ("The NARROWED list is handed back, because one more thing is aimed at it and it is not on");
  ("the map: the arrow at the edge of the screen, which hangs on the frame and stays put");
  ("while the street slides underneath. That arrow and the arrows over heads have to name");
  ("the same house or they are two hints disagreeing - the edge one saying walk that way and");
  ("the map one saying pray here. Working the question out a second time where that arrow is");
  ("aimed would be two readings of one record, free to disagree on the step where a prayer");
  ("has just landed.");
  return next;
}
