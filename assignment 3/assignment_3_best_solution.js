/* Write three dummy functions using only promises and only using normal callbacks,
All three functions are dummy, you dont need actual implementation. 
These dummy functions are to just represent a delay. 
 -  Write a function to download data from a url
 -  Write a function to save that downloaded data in a file and return the filename
 -  Write a function to upload the file written in previous step to a newurl

- THe download should take say 4sec delay, filewrite should take 2sec delay, upload should take 3sec delay
- Write the above callbacks and use them in a manner that first download happens then writefile happens
and then upload happens */

function downloader(url) {
  return new Promise((resolverFn) => {
    console.log(`Starting downloading from '${url}'`);
    setTimeout(function timer_1() {
      console.log("Data is downloaded Successfully ✔");
      const downloaded_data = "dummy data";
      resolverFn(downloaded_data);
    }, 4000);
  });
}

function writeFile(data) {
  return new Promise((resolverFn) => {
    console.log(`Starting Writing data '${data}'`);
    setTimeout(function timer_2() {
      console.log("Successfully Write data and save in a file");
      const file_name = "dummy.txt";
      resolverFn(file_name);
    }, 2000);
  });
}

function uploadFile(fileName, newUrl) {
  return new Promise((resolverFn) => {
    console.log(`Started Uploading file '${fileName}' to New URL '${newUrl}'...`);
    setTimeout(function timer_3() {
      console.log("Data is successfully uploaded to new URL");
      const upload_repose = "success";
      resolverFn(upload_repose);
    }, 3000);
  });
}

console.log("Starting Program");
const callback_1 = (data) => writeFile(data);
const callback_2 = (fileName) => uploadFile(fileName, "www.xyz123.com");
const callback_3 = (response) => console.log("Upload Response: ",response);

downloader("www.abc123.com")
.then(callback_1)
.then(callback_2)
.then(callback_3)
// console.log("end");

// |                              |
// |                              |
// --------------------------------
// |         callback_3           |
// --------------------------------
// |          timer_3             |
// --------------------------------
// | uploadFile(fileName, newURL) |     
// --------------------------------
// |         callback_2           |
// --------------------------------
// |          timer_2             | 
// --------------------------------
// |        writeFile(data)       |
// --------------------------------
// |         callback_1           |
// --------------------------------
// |          timer_1             |
// --------------------------------
// |        downloader(url)       |
// --------------------------------
//         < Call Stack >
