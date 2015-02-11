WorkloadUtils
=============

[![devDependency Status](https://david-dm.org/bobbyrne01/workloadutils-nodejs/dev-status.svg)](https://david-dm.org/bobbyrne01/workloadutils-nodejs#info=devDependencies)

Web app that provides common workload utilities


# HTTP API available to clients

### RandomNumber

* `GET http://localhost:8080/RandomNumber`
* Example response
 * -2114550233

### RandomWord

* `GET http://localhost:8080/RandomWord`
* Example response
 * tree

### RandomWord (specifying numberOfWords)

* `GET http://localhost:8080/RandomWord?numberOfWords=10`
* Example response
 * clammy gallivanted jabbed Kirsten's monotheist's rectors quirks accredit concentrically moisturizing 

### GenerateEmailAddresses

* `GET http://localhost:8080/GenerateEmailAddresses?numOfAddresses=5&localPart=awesome&domain=computer.com`
* Example response<br/>
awesome1@computer.com<br/>
awesome2@computer.com<br/>
awesome3@computer.com<br/>
awesome4@computer.com<br/>
awesome5@computer.com

# Building

    cd workloadutils-nodejs/
    npm install
    grunt
    node index.js

`App listening at http://0.0.0.0:8080`
