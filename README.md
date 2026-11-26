# The Moon Gets One Star

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![Rank](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5-entry-v1/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![Reward](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5-entry-v1/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)

Entry for [The Moon Gets One Star](https://make.fun/competitions/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5) — a program that writes the funniest one-star review of the Moon (120 characters or fewer) to `/output/entry.txt`.

The review reads like a real one-star review: a rating, a grievance about the Moon itself, and a reason it earned its single star — the Moon never shows up on time, hogs the whole night sky, and still wants applause.

## Run

```sh
node main.ts
```

This writes one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), after validating the line is non-blank, exactly one line, 1–120 characters, with no control characters, and re-reading the file to confirm it matches byte for byte.
