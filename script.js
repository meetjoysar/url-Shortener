const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl(){
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl).then(res => res.text()).then(
        data =>{
            shortenedUrlTextarea.value = data;
        }).catch(err=>{
            shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
        })
}

reloadBtn.addEventListener('click', ()=>{
    location.reload();
})