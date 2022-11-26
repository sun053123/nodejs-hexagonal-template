import cluster from 'cluster';
import os from 'os';

const numCPUs = os.cpus().length;

async function bootstrapServer() {
  if (cluster.isPrimary) {

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  }
}