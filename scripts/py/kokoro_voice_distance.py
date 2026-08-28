"""How close each drawn voice sits to any one real voice, in the model's own speaker space.

THIS IS NOT A SPEAKER-VERIFICATION VERDICT.  A verification system compares
recorded audio; this compares the style vectors Kokoro uses to mean "who is
speaking".  It answers a narrower question - is a drawn voice unusually close to
one real speaker - and it answers that one exactly, because the style vector is
what the generator itself treats as identity.  Saying more than that needs a
verification model, which is a download nobody has agreed to yet.

THE CONTROL IS THE POINT.  A similarity number on its own has no scale.  Two
real male voices are already similar to each other, so the question is never
"how close is a draw to am_adam" but "is a draw closer to its nearest real voice
than two real voices already are to each other".  Both numbers are computed here
from the same vectors, so they can be read side by side and the claim that a
draw belongs to nobody can be checked instead of trusted.

Usage:
    python kokoro_voice_distance.py
"""

import json
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))

from kokoro_voice_draw import CAST_SEEDS, loaded, voice_drawn  # noqa: E402


def flat(style):
    """One style as a single row of floats, which is what a similarity is taken over."""
    return np.asarray(style, dtype=np.float64).reshape(-1)


def cosine(a, b):
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))


def real_to_real(real, names):
    """Every pair of real voices, most alike first - the scale the draws are read against."""
    pairs = []
    for i, left in enumerate(names):
        for right in names[i + 1:]:
            pairs.append((cosine(real[left], real[right]), left, right))
    pairs.sort(reverse=True)
    return pairs


def draw_rows(kokoro, names, real):
    """Each seed's draw, with the real voice it lands nearest to and the one after that."""
    rows = []
    for seed in CAST_SEEDS:
        style, note = voice_drawn(kokoro, seed, names)
        v = flat(style)
        scores = sorted(((cosine(v, real[n]), n) for n in names), reverse=True)
        rows.append({
            "seed": seed,
            "nearest": scores[0][1],
            "nearest_similarity": round(scores[0][0], 4),
            "second": scores[1][1],
            "second_similarity": round(scores[1][0], 4),
            "largest_coordinate_share": note["largest_share"],
        })
    return rows


def main():
    kokoro, _, names = loaded()
    real = {n: flat(kokoro.get_voice_style(n)) for n in names}
    pairs = real_to_real(real, names)
    scale = np.array([p[0] for p in pairs])
    rows = draw_rows(kokoro, names, real)
    nearest = np.array([r["nearest_similarity"] for r in rows])
    print(json.dumps({
        "real_voices": len(names),
        "real_to_real": {
            "pairs": len(pairs),
            "max": round(float(scale.max()), 4),
            "mean": round(float(scale.mean()), 4),
            "min": round(float(scale.min()), 4),
            "closest_pair": [pairs[0][1], pairs[0][2]],
        },
        "draw_to_nearest_real": {
            "max": round(float(nearest.max()), 4),
            "mean": round(float(nearest.mean()), 4),
            "min": round(float(nearest.min()), 4),
        },
        "draws": rows,
    }, indent=1))


if __name__ == "__main__":
    main()
