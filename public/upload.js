main.addEventListener('submit', async (event) => {
    event.preventDefault();

    let Uoptions = {
        method: 'POST',
        body: new FormData(main)
    }

    let post = await fetch('/upload', Uoptions);
    let res = await post.json();

    console.log(res.details)

    if (res.result) {
        getFiles();
        clear()
    }
});

//create outside list
document.querySelector('.ftu').appendChild(document.createElement('ol'))

file.onchange = () => {
    fn.value += file.value.split("\\")[2] + "|"
    let listElement = document.createElement('li');
    listElement.innerHTML = file.value.split("\\")[2];
    document.querySelector('.ftu ol').append(listElement);
    
    //TODO: make a remove element to upload
    //document.querySelector('.ftu li').addEventListener('click',(event)=>{document.querySelector('.ftu li').remove()})
}

