// import 

import request from 'supertest'
import puppeteer from 'puppeteer';




describe('Testing using headless chrome', () => {
  it('uses headless chrome return true', () => {
    const result = window.navigator.userAgent;
    result.includes('Chrome').should.be.equal(true);
  });
});

describe('Test for projrct:', function () {
  let browser;
  let page;

  before(async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  beforeEach(async function () {
    page = await browser.newPage();
    // await page.goto('http://linserv1.cims.nyu.edu:30661');
    await page.goto('http://localhost:3000');
  });

  afterEach(async function () {
    await page.close();
  });

  after(async function () {
    await browser.close();
  });

  it('go to homepage without Login will be redirected to Login', async function () {

    browser.get('/user/:slug');
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('test redirect to /', async function () {
    browser.get('/login');

    await page.type('#username', 'test1');
    await page.type('#password', 'test1');
    await page.click('#submit');

    expect(browser.getCurrentUrl()).toContain('/');

  });

  it('test go to /forum', async function () {
    browser.get('/login');

    await page.type('#username', 'test1');
    await page.type('#password', 'test1');

    await page.click('#submit');
    browser.get('/forum');

    expect(browser.getCurrentUrl()).toContain('/forum');
  });

  
});