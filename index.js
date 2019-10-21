
const windyScraping = require('./src/scrap/windy');

(async () => {

    try{
        await windyScraping.initialize('-20.460/-54.620?-20.694,-43.945,5');

        let result = await windyScraping.getTemp();

        console.log(result);
    }catch(e){
        console.log('an error has ocurrend', e);
    }
})();
