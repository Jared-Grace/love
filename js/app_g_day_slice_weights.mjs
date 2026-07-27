export function app_g_day_slice_weights() {
  "the WALK : CONVERSATION time ratio for a #day_unbelievers person-leg — how much of each person's share of the day is spent walking TO them vs IN conversation. default 1:1 (equal). the ONE place to retune the feel; app_g_day_fraction splits every leg by these weights. a far walk and a long conversation each still fill their whole weighted portion (just slower per step / per turn), so the day still lands EXACTLY on sunset";
  return {
    walk: 1,
    conversation: 1,
  };
}
