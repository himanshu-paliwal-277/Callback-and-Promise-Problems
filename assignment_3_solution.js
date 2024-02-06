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
  console.log(`Starting downloading from '${url}'`);
  return new Promise((resolverFn, rejecterFn) => {
    setTimeout(() => {
      console.log("Data is downloaded Successfully ✔");
      const downloaded_data = "dummy data";
      resolverFn(downloaded_data);
    }, 4000);
  });
}

function writeFile(data) {
  console.log(`Starting Writing data '${data}'`);
  return new Promise((resolverFn, rejecterFn) => {
    setTimeout(() => {
      console.log("Successfully Write data and save in a file");
      const file_name = "dummy.txt";
      resolverFn(file_name);
    }, 2000);
  });
}

function uploadFile(fileName, newUrl) {
  console.log(`Started Uploading file '${fileName}' to New URL '${newUrl}'...`);
  return new Promise((resolverFn, rejecterFn) => {
    setTimeout(() => {
      console.log("Data is successfully uploaded to new URL");
      const upload_repose = "success";
      resolverFn(upload_repose);
    }, 3000);
  });
}

console.log("Starting Program");
const url = "www.abc123.com";
const new_url = "www.xyz123.com";

const pr1 = downloader(url);
pr1.then((data) => {
  const pr2 = writeFile(data);
  pr2.then((fileName) => {
    const pr3 = uploadFile(fileName, new_url);
    pr3.then((upload_repose) => {
      console.log("Upload status: ", upload_repose);
    });
  });
});
