module.exports = {
  apps: [
    {
      name: "en-haidar-portfolio",
      script: "./node_modules/.bin/next",
      args: "start -p 3001",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
