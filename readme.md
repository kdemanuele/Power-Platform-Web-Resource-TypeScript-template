# Power Platform WebResource TypeScript Template

The repository form a node.js base for building webresources for Power Platform. The project makes it easier and simpler to manage the way your final scripts are generated.

## Get started with the template

    1. Download or fork the project.
    2. Install the node packages bundled 'npm install'
    3. Ensure that the latest node packages are installed by running 'npm update'
    4. Start coding in the src folder and write your BDD tests in the test folder.
       a. It is ideal that test files use the suffix `.spec.tf`
    5. While developing to transpile the code and run the unit tests run the command 'npm run build:dev'
       a. When the build is executed the unit tests are executed and a report is generated
       b. Further to the unit testing report a coverage table is returned
       c. The files to be used for the development environment are located in the `/dev/src` folder
    6. For the production version run the command 'npm run build:prod'
       a. The JavaScript files create are placed in the `/dist` folder
