import sanityClient from "@sanity/client";
import imageUriBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "1dcpnx0v",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skrvKf40zlrWgVZWNPoSzfL6cMqHqx11EYxRnrLcku5qcVPK4OHrxpsXva4TrPNow4vSLpZCFv7GimswQDZwH5dNx4kzIMByGcRY1ztn09NMYQ8uxqr84VqrGnIY3c5kwEpn6GsJ96hDJK8IrYU3D3JAZT31JdhK1eb4hqgxlMMpcdLYsUEj",
});

const builder = imageUriBuilder(client);

//anytime we work with sanity images
export const urlFor = (source) => builder.image(source);
