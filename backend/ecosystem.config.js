module.exports = {
  apps: [{
    name: 'sss-smarttech-backend',
    script: 'index.js',
    instances: 1, // or 'max' for cluster mode
    exec_mode: 'fork', // or 'cluster' for clustering
    watch: false,
    max_memory_restart: '200M',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    restart_delay: 4000
  }]
};
