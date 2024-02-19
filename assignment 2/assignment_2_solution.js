// Write three dummy functions without using promises and only using normal callbacks,
// All three functions are dummy, you dont need actual implementation.
// These dummy functions are to just represent a delay.
//  -  Write a function to download data from a url
//  -  Write a function to save that downloaded data in a file and return the filename
//  -  Write a function to upload the file written in previous step to a newurl

function downloader(url, cb) {
  // Anyone who wants to download something first and then execute something else
  // can use this function.
  console.log(`Starting downloading from '${url}'`);
  setTimeout(() => {
    console.log("Data is downloaded Successfully ✔");
    // with the downloaded content, whatever you want to do you can do
    const downloaded_data = "dummy data";
    cb(downloaded_data);
  }, 4000);
}

function writeFile(data, cb) {
  console.log(`Starting Writing data '${data}'`);
  setTimeout(() => {
    console.log("Successfully Write data and save in a file");
    // with the written content, whatever you want to do you can do
    const file_name = "dummy.txt";
    cb(file_name);
  }, 2000);
}

function uploadFile(fileName, newUrl, cb) {
  console.log(`Started Uploading file '${fileName}' to New URL '${newUrl}'...`);
  setTimeout(() => {
    console.log("Data is successfully uploaded to new URL");
    const upload_repose = "success";
    cb(upload_repose);
  }, 3000);
}

console.log("Starting Program");
const url = "www.abc123.com";
const new_url = "www.xyz123.com";

downloader(url, (data) => {
  writeFile(data, (file_name) => {
    uploadFile(file_name, new_url, (upload_repose) => {
      console.log("Upload status", upload_repose);
      console.log("END");
    });
  });
});
// In the above code we are doing nesting of callback functions (callback inside callback)
// This is called 'callback hell' and 'pyramid of doom'.
