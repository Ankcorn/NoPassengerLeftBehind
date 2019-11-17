const { Pool } = require("pg");
const { run } = require("graphile-worker");

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  const runner = await run({
    pgPool,
    // or: connectionString: process.env.DATABASE_URL,

    concurrency: 1,
    pollInterval: 2000,

    taskList: {
      send_email: async (payload, helpers) => {
        console.log(`Received ${JSON.stringify(payload)}`);
      },
    },
    // or: taskDirectory: `${__dirname}/tasks`,
  });
  // to clean up: runner.stop()
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
