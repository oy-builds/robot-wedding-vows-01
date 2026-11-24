[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/oy-builds/robot-wedding-vows-01/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/oy-builds/robot-wedding-vows-01/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

# One-Line Robot Wedding Vows

A single line of wedding vows from one robot to another, written for the
[make.fun bounty](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b):
a promise that survives updates, glitches and dying batteries, landing on
two machines growing old — and rusty — side by side, servo in servo.

> I vow to love you through every update, every glitch, and every low-battery warning — and to hold your servo hand until our circuits rust together.

## Run

Requires Node 22 or later (stdlib only, nothing to install):

```sh
node main.ts
```

This writes the entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`), validates that it is a single line of
1–160 characters, reads it back to verify what landed on disk, and prints it.
