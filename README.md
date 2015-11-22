# Notes Application
AngularJS demo application for managing notes.
## Installation Instructions

### Prerequisited
- nodejs installed (download from nodejs.org/download/)
- gulp installed (npm install gulp -g)
- clone notesApp to your computer
- run command "npm install" under notesApp directory

### Run the application
- run command "gulp"
Application will be running on port localhost:9000. Port number can be changed in gulpfile.js and in test/spec.js files.

### Running Tests
Application tests are implemented using Protractor framework. 
- install Protractor: npm install -g protractor.
- run command "webdriver-manager update"
- start server using command "webdriver-manager start"
- go to /test directory and run tests using command "protractor conf.js" 


