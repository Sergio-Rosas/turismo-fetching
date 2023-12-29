const storeId = "turismo-racing";
const secretKey = "APRxDJd3HiTVcPCOT6V8EmXA9eEbfd12";

const swell = require("swell-node").init(storeId, secretKey, { cache: false });

try {
    var variants = await swell.get("/products:variants");
} catch (error) {
    console.log(error);
}

for (variant of variants.results) {
    Object.keys(variant);
    variant.id;
    variant.name;
    variant.images[0].file.url;
}

const imageObject = variants.results.map((variant) => {
    {
        `${variant.name}: ${variant.images.at(0).file.url}`;
    }
});

console.log(imageObject);
console.log("FINISHED");
