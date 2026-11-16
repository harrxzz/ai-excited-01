# ai-excited-01 — Whale City Breach

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/harrxzz/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/harrxzz/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A colossal whale dives over a rain-slick city street at night. Its belly
glows neon cyan and magenta, and the tiny people below give the scale: this
is not a sea creature out of place, it is a whole sky falling into the city —
a jolt of scale and light, built to excite the judge at first glance.

## The image

`entry.png` (1024×1024) is the entry. The program does not draw anything —
it copies the image to the output directory, byte for byte, every run.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `./entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output` in the grader).
