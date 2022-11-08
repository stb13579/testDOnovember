module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('DO_ACCESS_KEY_ID'),
          secretAccessKey: env('DO_ACCESS_SECRET'),
          endpoint: env('DO_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
          params: {
            Bucket: env('DO_BUCKET'),
          },
        },
      },
    },
    // ...
  });