// PM2 process file for server.js (Express: /api/pv-news, /api/chat).
// cwd defaults to this file's own directory, so it works regardless of
// where the repo is cloned on the VM.
//
// Start:  pm2 start ecosystem.config.js
// Reload: pm2 reload biber-solar-api
// Logs:   pm2 logs biber-solar-api

module.exports = {
  apps: [
    {
      name: 'biber-solar-api',
      script: 'server.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
