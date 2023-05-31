

import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',
  timeout: 30 * 1000,
  // Run all tests in parallel.
  fullyParallel: true,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  // retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
  // Give failing tests 3 retry attempts
  retries: 3,
  // Reporter to use
  // reporter: 'html',
  reporter: 'experimental-allure-playwright',
   use: {
      // Grants specified permissions to the browser context.
    // firefox-specific permissions
    permissions: ['geolocation'],
    // All requests we send go to this API endpoint.
    baseURL:  ' https://10.15.1.224/pcbo/card-issue/api ',
    video: {
      mode: 'on', 
      size: { width: 640, height: 480 }
    },
    // baseURL: process.env.URL || 'http://localhost:3000',
    trace: 'on-first-retry', // record traces on first retry of each test
  
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      // 'Accept': 'application/vnd.github.v3+json',
      "Content-type": 'application.json; charset=UTF-8',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4MDQxMTQ1NCIsInN1YiI6InthY3RpdmV9IiwiYXVkIjpbInthZG1pbn0iLCIwMDAxOTciLCIyMjIyIl0sImV4cCI6MTY4MzUzNDc3NCwibmJmIjoxNjgzNTMxMTc0LCJpYXQiOjE2ODM1MzExNzQsImp0aSI6Im1vaGFtbWFkaSJ9.YegI-J2gyPk3NvpqOis7WkGhQXhQdIBAdeYkUgwALaU"
    }
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    //  {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or "msedge-beta" or 'msedge-dev'
    // }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  //  webServer: {
  //    command: 'npm  test',
  //    port: 9000,
  //  },
  

});

