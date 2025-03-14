# LIMS-AUTOMATION

## Unit test
1. login-email

## Summary
Run this code with allure for easier bugs report, use this command `./run.sh` using git bash.

## Hows To:

Clone this repository  
http
```
https://github.com/rahimi-enzee/lims_automation.git 

```

Install dependencies:

```
npm install
npm install -g allure-commandline
npm install -D @playwright/test allure-playwright 
```
**NOTE**: for windows, you have to install Java and set JAVA_HOME path **END**  

This repo didn't include user's data for privacy reason, create new `data` directory and create `users` data inside it.

```
mkdir data
touch data/users.ts
```

To run full test:

```
npx playwright test
```

To run test based on file:

```
npx playwright test tests/<testFileName>
```

**NOTE** change `<testFileName>` to the file that you want to test. **END**

To run certain test based on test name:

```
npx playwright test -g "test name"
```

**NOTE**: Test name can be found inside tests folder, go into any file, then look into test("test name") **END**

To run test in debug mode, where we can control the flow, use `--debug` argument, eg:

```
npx playwright test --debug //OR
npx playwright test -g "Search Member by name" --debug
```

To run test with allure report:

```
./run.sh <testname>
```

To run unit test, use the name from Unit Test:
```
./run.sh -g "login-email" # login-email can be found on the list of unit test above
```

**NOTE**: Change testname with the test file name, eg: `tests/dashboardTest.spec.ts`.

**IMPORTANT**: On Windows, use `/` instead of `\` (eg:` npx playwright test tests/dashboardTest.spec.ts`). This is because it will return error test not found if we use `\` . **END**.