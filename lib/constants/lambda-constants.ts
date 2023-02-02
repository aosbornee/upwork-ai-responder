export const LAMBDA_PRISMA_BUNDLE = {
  nodeModules: ["@prisma/client", "prisma"],
  commandHooks: {
    beforeBundling: (_inputDir: string, _outputDir: string) => {
      return [];
    },
    beforeInstall: (inputDir: string, outputDir: string) => {
      return [`cp -R ../prisma ${outputDir}/`];
    },
    afterBundling: (_inputDir: string, outputDir: string) => {
      return [
        `cd ${outputDir}`,
        `yarn prisma generate`,
        `rm -rf node_modules/@prisma/engines`,
      ];
    },
  },
};
export const LAMBDA_TIMEOUT = "30 seconds";
export const LAMBDA_RUNTIME = "nodejs14.x";
