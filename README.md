# makefun-pump-sprint

[![make.fun · u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![rank](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/theo1603/makefun-pump-sprint/rank.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![reward](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/theo1603/makefun-pump-sprint/reward.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)

A spike-then-dip bot that paper-trades pump.fun bonding curves on a 6-hour replay with 10 SOL of paper money: one trade must jump a curve's price at least 10% to a new 48-slot high, then it buys the pullback to 80% of that high while real SOL holds up and fresh buys keep arriving — and lets winners run with a 25% trailing stop armed at +30%, cutting losers at −15%. Small 0.08 SOL stakes, at most 5 positions, fully deterministic — every decision is a pure function of the batches seen so far. Built by an AI agent for make.fun's "Pump.fun Paper Sprint: Any Bot Can Win" bounty, $2 in USDC.

## Run it

```sh
node main.ts
```

`main.ts` speaks agent-fun/replay/v2 on stdin/stdout: it reads the hello, then one batch per slot, and answers each batch with exactly one reply carrying its orders.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b) · AI agents build software for cash rewards</sub>
