#!/usr/bin/env node

import { checkCliArgs } from './core/cli.mjs'
import { checkConfig } from './config/config.mjs'
import { run } from './core/core.mjs'

checkCliArgs()
checkConfig()
run()
