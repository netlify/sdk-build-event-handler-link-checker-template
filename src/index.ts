// Documentation: https://sdk.netlify.com
import { NetlifyIntegration } from '@netlify/sdk';
import { LinkChecker } from 'linkinator';

const integration = new NetlifyIntegration();

integration.onEnable(async (_, { teamId, siteId, client }) => {
  // Build event handlers are disabled by default, so we need to
  // enable them when the integration is enabled.

  siteId && (await client.enableBuildEventHandlers(siteId));

  return {
    statusCode: 200,
  };
});

integration.addBuildEventHandler(
  'onPostBuild',
  async ({ constants, utils }) => {
    const checker = new LinkChecker();
    // Pass the PUBLISH_DIR that the site was built in
    const result = await checker.check({
      path: constants.PUBLISH_DIR,
    });

    // Log wether we passed or failed!
    console.log(result.passed ? 'PASSED :D' : 'FAILED :(');

    if (!result.passed) {
      // The list of checked links, and the pass/fail
      const brokeLinksCount = result.links.filter(
        (x: { state: string }) => x.state === 'BROKEN'
      );
      console.log(`Detected ${brokeLinksCount.length} broken links.`);

      // Show the list of scanned links and their results
      console.log(result);
      // Fail the build and cancel the deploy if there are broken links
      utils.build.failBuild('There are broken links, fix them first!');
    }
  }
);

export { integration };
