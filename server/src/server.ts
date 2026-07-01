import app from "./app";
import { connectDatabase } from "./config/db";
import { env } from "./config/env";
import { APP_NAME } from "./constants";

const startServer = async () => {
  await connectDatabase();

  app.listen(env.port, () => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`🚀 ${APP_NAME}`);
    console.log(`✅ Server running on port ${env.port}`);
    console.log(`🌍 Environment: ${env.nodeEnv}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  });
};

startServer();