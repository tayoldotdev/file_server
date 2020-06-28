async function getFiles() {
    let major = document.getElementsByClassName('major')[0];

    if (major != undefined) {
        major.remove();
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }

    let post = await fetch('/getFiles', options);
    let reuslt = await post.json();

    uploadedFiles.style.visibility = 'visible'

    let list = document.createElement('ol');
    list.className = "major";
    uploadedFiles.append(list)

    for (let d of reuslt.res) {
        let listElm = document.createElement('li');
        listElm.className = 'uli';
        listElm.innerHTML = d;
        listElm.addEventListener('click', async (res) => {
            listElm.style = "transform:scale(1.25)"
            let file_name = listElm.innerHTML;
            let opt = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    file_name: file_name
                })
            }
            let post = await fetch('/removeFile', opt)
            let result = await post.json();
            console.log(result.result);
            getFiles();
        })
        document.getElementsByClassName('major')[0].append(listElm);
    }
}