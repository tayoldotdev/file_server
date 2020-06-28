//on page load
window.addEventListener('load', async (event) => {
    clear();
    getFiles();
    console.log('load complete!');
});

//method to clear things
function clear() {
    let upload_files = document.querySelector('.ftu ol');
    let fn = document.getElementsByName('fileName')[0];
    let fs = document.getElementsByName('foo')[0]
    if (fs != undefined && fn != undefined && upload_files != undefined) {
        upload_files.remove();
        fs.value = "";
        fn.value = "";
    }
    document.querySelector('.ftu').appendChild(document.createElement('ol'))
}