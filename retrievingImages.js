const storeId = "turismo-racing";
const secretKey = "APRxDJd3HiTVcPCOT6V8EmXA9eEbfd12";

const swell = require("swell-node").init(storeId, secretKey, { cache: false });

try {
    var variants = await swell.get("/products:variants");
} catch (error) {
    console.log(error);
}

const imageObject = variants.results.map((variant) => ({
    [variant.name]: variant.images.at(0).file.url,
}));

const superObject = imageObject.reduce((obj, item) => {
    return { ...obj, ...item };
}, {});

console.log(superObject);
