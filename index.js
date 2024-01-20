const fs = require('fs');
const path = require('path');
const replaceThis = "harry";
const replaceWith = "john";
const preview = true;
const folder = __dirname;  //gives current directory

try {
    const data = fs.readdir(folder, (err, data) => {
        // console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile = path.join(folder, item,);
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
            if(!preview){
                fs.rename(oldFile, newFile, () => {
                    console.log("Renaming Successful!", item, newFile)
                });
            }
            else{
                if("data/" + item != newFile) console.log("data/" + item + " will be renamed to: " + newFile)
            }
        }
    });
} catch (err) {
    console.error(err);
}
