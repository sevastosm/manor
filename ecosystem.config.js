module.exports = {
  apps: [
    {
      name: "Manor",
      script: "npm",
      args: "start",
      instances: 1,
      env: {
        PORT: 3002,
        NODE_PORT: 3002,
      },
    },
  ],
};
