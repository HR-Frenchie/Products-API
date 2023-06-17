# Shopping Application API Redesign

This repo provides a new backend API for a shopping application, specifically for product-related data such as product descriptions, inventory for different SKUs, and photos. My partner worked on a separate API for review-related data. The goal was to transition from the existing monolithic architecture to a more scalable and maintainable microservices architecture while maintaining low latency and high reliability.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version >= 16.19.0)
- npm (version >= 8.19.3)

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Specify the required environment variables in the `.env` file:
```bash
PORT=port for server
PGUSER="postgres username, such as ubuntu"
PGHOST="database url"
PGPASSWORD="password for postgres"
PGDATABASE="products"
PGPORT=port for database
```
## Usage

To start the API server, run the following command:

```bash
npm start
```

The server will start running at http://localhost:PORT.

To stop the server, run:
```bash
npm stop
```

## Technologies Used
Node.js
Express.js
PostgreSQL
PM2

## License
This project is licensed under the MIT License.

## Acknowledgements

The following dependencies are used in this project:

- dotenv - for loading environment variables
- express - for building the API server
- mongodb - MongoDB driver for Node.js
- pg - PostgreSQL client for Node.js
- pm2 - process manager for Node.js applications

The following dev dependencies are used for testing:

- jest - testing framework
- supertest - HTTP assertion library for testing
