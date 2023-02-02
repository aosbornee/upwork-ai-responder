import { Function, Stack, App, Cron } from "@serverless-stack/resources";



export class MyStack extends Stack {
  private _scrape: Function;
  private _cron: Cron


  constructor(scope: App, id: string, props?: any) {
    super(scope, id, props);

    this._scrape = new Function(this, "Scrape", {
      handler: "lambda/handlers/scraper.handler",
      timeout: 60,
      permissions: ["ssm"]
    });

    this._cron = new Cron(this, "Cron", {
      job: this._scrape,
      schedule: "cron(0/5 8-17 ? * MON-FRI *)",
    });
  }
}
