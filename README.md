# Async Node Server (using Express)
*Escaping JS single thread in node*

Code based on a talk by [Raphael Ram](https://github.com/ramraphael) at NYC Nodejs meetup on May 22

## Main goal
The main goal here is to test a server handleling different request made at the same time and responding them as soon as the task is completed. As example:
  - Make a GET request to a node server that takes a long time to complete;
  - Make a second GET request to the same server, but with a quicker task.
  - See the second request beeing responded before the first one.

To accomplish that, I'm using 3 differents Node's APIs to deal with requests asynchronously:
  - [Cluster](https://nodejs.org/docs/latest-v12.x/api/cluster.html) - Stability:2 - Stable
  - [Child Process](https://nodejs.org/docs/latest-v12.x/api/child_process.html) - Stability:2 - Stable
  - [Worker Threads](https://nodejs.org/docs/latest-v12.x/api/worker_threads.html#worker_threads_worker_workerdata) - Stability: 1 - Experimental

## How to run it
  - Make sure to be running node 12.x. `Worker Threads` api is not available in earlier versions.
  - git clone && npm install
  - The repo has 4 branches:
    1) Master
    2) using-cluster
    3) using-childProcess
    4) using-workerThreads
  - from any branch, `npm start` and open two or more browsers on `localhost:3000`
  - From on broswer, make a request to `localhost:3000/1000000000`
  - From the other one, make a request to `localhost:3000/1`

  The server will run a `for loop` using the param as a condition.
  In the `master` branch, the server is dealing the requests as a single thread. This way, even though the second request is quicker than the first one, the server will only respond after the first request is done.

  In all other branches, the server will deal with the resquests in a multi thread way, responding as soon as the task is completed.


