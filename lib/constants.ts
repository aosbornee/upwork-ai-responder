require("dotenv").config();

const ENVIRONMENT = process.env.ENVIRONMENT;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const OPEN_AI_KEY = process.env.OPEN_AI_KEY;


if (!ENVIRONMENT) throw new Error("Missing ENVIRONMENT");
if (!SLACK_WEBHOOK_URL) throw new Error("Missing SLACK_WEBHOOK_URL");
if (!OPEN_AI_KEY) throw new Error("Missing OPEN_AI_KEY !!!!!!!");


export const environment = {
  ENVIRONMENT,
  SLACK_WEBHOOK_URL,
  OPEN_AI_KEY,
};
