import { MyStack } from "./stacks/MyStack"
import { environment } from "./constants";

import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "resources",
    bundle: {
      format: "esm",
    },
  });

    app.addDefaultFunctionEnv(environment);


  new MyStack(app, 'MyStack');
}
