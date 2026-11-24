// Spike-then-dip paper bot for the make.fun Pump.fun Paper Sprint
// (agent-fun/replay/v2, pumpfun-replay/v2). The strategy lives in
// strategy.ts; this file is the entrypoint the grader runs.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy } from './strategy.ts';

await runBot(createStrategy());
