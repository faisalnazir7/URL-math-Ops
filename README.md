# Kalvium Backend Task

This is a server that responds to mathematical operations sent via URL.

## Table of Contents

- [Kalvium Backend Task](#kalvium-backend-task)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
        - [Start the Server](#start-the-server)
        - [Home Page](#home-page)
        - [Mathematical Operations](#mathematical-operations)
        - [For example:](#for-example)
  - [History Page](#history-page)
  - [License](#license)

## Installation

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/kalvium-backend.git
2. Navigate to the project directory:

    ```
    cd kalvium-backend
    ```
3. Install the required dependencies:
    ```
    npm install
    ```
    ##### Run Docker Container(Optional):
    To build the Docker image, navigate to the project directory in your terminal and run:
    ```
    docker build -t kalvium-backend .
    ```

    And then to run the container:
    ```
    docker run -p 3000:3000 kalvium-backend
    ```
Make sure you have Docker installed and running on your machine before using these commands.
## Usage
##### Start the Server
To start the server, run the following command:
    ```
    npm start
    ```

The server will start running on the specified port (default: 3000).

##### Home Page
You can access the home page by visiting http://localhost:3000/ in your web browser.

##### Mathematical Operations
You can perform mathematical operations by constructing URLs in the following format:


http://localhost:3000/:number1/:operation1/:number2/:operator2/:number3/.........so-on......
Replace :number and :number2 with the numeric values you want to operate on, and replace :operation with one of the following: plus, minus, into, or divide.

##### For example:

http://localhost:3000/5/plus/3
http://localhost:3000/10/minus/4
http://localhost:3000/6/into/2
http://localhost:3000/20/divide/5
http://localhost:3000/3/into/5/plus/8/into/6
## History Page
To view the history of operations, visit http://localhost:3000/history in your web browser. This page will display a tabular representation of the last 20 operations performed.

## License

This project is licensed under the [ISC License](LICENSE).