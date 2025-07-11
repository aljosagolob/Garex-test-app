# Test app for Garex

## Project stack

Angular frontend

Java backend using Spring Boot framework

PostgreSQL database

## Instructions
1. Clone the repository
   - in the terminal run `git clone <repo name>`
2. Navigate into the project directory
   - `cd <repo name>`
3. Create a file named .env and copy the credentials into it and save it
4. Build and start the app using docker compose
   - `docker-compose up --build -d`
5. Access the app
   - `http://localhost:4200`
6. Managing the app
   - app can be started and stopped using the standard Docker Compose commands, with data persistence ensured by the PostgreSQL container:
   - `docker-compose up -d` and `docker-compose down`
