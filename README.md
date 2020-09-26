# HAProxy

This project demonstrates how to use *HAProxy* as a load balancer for your development machine.
Once finished setup, open your web browser and go to "http://localhost" and hit F5 (to reload) for a few times.
You will see that the first request will be responsed by server-1 and secod request will be response by server-2.
This is because balance mode at HAproxy is now configured as "roundrobin"

### Setup Instruction

1. clone this project to your working directory
2. move to your working directory and run "docker-compose up -d" (to run HAProxy as a load balancer)
3. move to ./server-1 (in your working directory) and run "npm install" (to install express library for server-1) then run "npm run start" (to start server-1)
4. move to ./server-2 (in your working directory) and run "npm install" (to install express library for server-2) then run "npm run start" (to start server-2)

### Testing Instruction

1. from your browser, goto http://localhost
2. hit F5 (to reload) for a few times, and see the response.
