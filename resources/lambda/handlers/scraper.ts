import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import parseFeed from "utilities/general/parse-feed";
import getNewJobs from "utilities/general/get-new-jobs";
import craftUniqueProposal from "utilities/general/craft-unique-proposal";
import sendJobsToSlack from "utilities/general/send-jobs-to-slack";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const feed = await parseFeed();

  if (feed.items.length === 0) throw new Error("no items in feed");

  const newJobs = await getNewJobs(feed);

  console.log(newJobs.length);

  if (newJobs.length) {
    const jobsWithProposals = await craftUniqueProposal(newJobs);
    await sendJobsToSlack(jobsWithProposals);
  }

  return {
    statusCode: 204,
    headers: { "Content-Type": "text/plain" },
    body: "",
  };
};
