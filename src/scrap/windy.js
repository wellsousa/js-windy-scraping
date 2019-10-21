const puppeteer = require('puppeteer');

const BASE_URL = "https://www.windy.com/";
let WINDY_URL = (params) => BASE_URL + `${params}`;
const self = {
    browser: null,
    page: null,

    initialize: async (custom_url) => {
        self.browser = await puppeteer.launch({
            headless: false
        });

        self.page = await self.browser.newPage();

        //console.log(WINDY_URL(custom_url));

        await self.page.goto(WINDY_URL(custom_url), {waitUntil: 'networkidle0'});
    },

    getTemp: async () => {

        //let element = await self.page.$();

        let data = await self.page.evaluate(()=> {
           let value = document.querySelector('big').innerText; 

           return value;
        });

        return data;
    }
}


module.exports = self;



