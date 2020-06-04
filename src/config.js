import fs from 'fs';
import _ from 'lodash';


const config = {
  apiKey: '1042101d554993f0eadfa095a088dfa821fef8915c8f875ee74883c6e735d2b3',
  apiSecret: '31b2f54a55aa79a122d4966abf974a1dd4a6981cc6efcbbbc86ba2d061772aa3',
  amount: 2000,
  amountCurrency: 'BRL',
  initialBuy: true,
  minProfitPercent: 0.02,
  // specify null to let the bot calculate the minimum allowed interval
  intervalSeconds: null,
  playSound: false,
  simulation: false,
  executeMissedSecondLeg: true,
};

try {
  _.merge(config, JSON.parse(fs.readFileSync(
    `./config.json`,
  )));
} catch (err) {
  console.log('[INFO] Could not read config.json file.', err);
}

export default config;
