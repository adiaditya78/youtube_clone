// API from the cosole cloud
const my_API_key ="AIzaSyCbzqdx_d_XvojNM1kL4Vmf-Rn6BAhU0Jc";

// API of video and add ? at the end
const video_http = "https://www.googleapis.com/youtube/v3/videos?";

// no of content want
const maxContent = 48;

const channel_http = "https://www.googleapis.com/youtube/v3/channels?";
//param generator
const url_generator = new URLSearchParams({
    key : my_API_key,
    part: "snippet",
    chart : "mostPopular",
    maxResults : maxContent,
    regionCode : "IN"
});

const video_body = document.getElementById("video_body");

// On Browser Load (IIFE)
(function (){
    const home_page = document.getElementById("home");
    if(home_page.checked){
        renderHome();
    }
}) ();

// fetch the video data
function renderHome(){
    video_body.innerHTML = "";
    fetch(video_http + url_generator)
    .then((res) => res.json())
    .then((data) => {
        data.items.forEach((video_data) => { 
            videoCard(video_data);
        });
    })
    .catch((err) => console.log(err));
}

// UI of video card
const videoCard = async(video_data) =>{
    const channel_data = await getChannelDetails(video_data.snippet.channelId);
    const video_statistics = await getStatistics(video_data.id);
    
    video_container = document.createElement("div");
    video_container.classList.add("container_style");
    // video_container.addEventListener("click", ()=>{
    //     window.location.href = `video_page.html?id=${video_data.id}`;
    // });
    video_container.innerHTML = `
    <div class="sub_container">
        <div class="thumbnail_container">         
            <img src="${video_data.snippet.thumbnails.high.url}" class="thumbnail">
        </div>    
        <div class = "content_box">
            <div class ="channel_logo">
                <img src= "${channel_data.thumbnails.default.url}">
            </div>
            <div class ="video_details">
                <div class ="video_title">${video_data.snippet.title}</div>
                <p>${video_data.snippet.channelTitle}</p>
                <div class ="publishedDetails">
                    <p>${video_statistics.viewCount} views •</p>
                    <p>${new Date(video_data.snippet.publishedAt).toLocaleDateString()}</p>
                </div>
            </div>
        </div>    
    </div>`
    video_body.append(video_container);
}

// fetch the video channel Details
const getChannelDetails = async(channelId) => {
    const url_data = await fetch(channel_http + new URLSearchParams({
        key : my_API_key,
        part : "snippet",
        id : channelId
    }))
    const data = await url_data.json();
    return data.items[0].snippet;
}

// fetch the video statistics details
const getStatistics = async(video_id) =>{
    const url_data = await fetch(video_http + new URLSearchParams({
        key : my_API_key,
        part:"statistics",
        id : video_id
    }));
    const data = await url_data.json();
    return data.items[0].statistics;
}

// sidebar Button
const side_bar = document.getElementById("sidebar-page");
side_bar.addEventListener("change",(e) =>{
    if(e.target.id == "home"){
        renderHome();
    }
    else if(e.target.id == "shorts"){
        renderShorts();
    }
    else if(e.target.id == "subscription"){
        rendersubscription();
    }
    else if(e.target.id == "profile"){
        renderProfie();
    }
});

// render the shorts page
function renderShorts(){
    const shorts_page = document.createElement("div");
    shorts_page.innerHTML = `
    <div id="shorts_page">
        <h1>Coming Soon</h1>
    </div>
    `;
    video_body.replaceChildren(shorts_page);  
}

// content of Subscription to be render
function rendersubscription(){
    const subscription_page = document.createElement("div");
    subscription_page.innerHTML = `
    <div id="sub_page">
        <img src= "../images/icons8-subscription-24.png">
        <h3>Don't miss new videos</h3>
        <p>Sign in to see updates from your favorite YouTube channels</p>
        <input type="button" value="Sign in">
    </div>
    `;
    video_body.replaceChildren(subscription_page);
}

// render the profile page
function renderProfie(){
    const profile_page = document.createElement("div");
    profile_page.innerHTML = `
    <div id="profile_page">
        <img src= "../images/icons8-subscription-24.png">
        <h3>Enjoy your favorite videos</h3>
        <p>Sign in to access videos that you’ve liked or saved</p>
        <input type="button" value="Sign in">
    </div>
    `;
    video_body.replaceChildren(profile_page);  
}

const toggle_btn = document.getElementById("toggle_btn");
const sec_page = document.getElementById("second_page");
toggle_btn.addEventListener("click", ()=>{
    sec_page.classList.remove("hidden");
    const sec_toggle_btn = document.getElementById("toggle_btn_sec");
    sec_toggle_btn.addEventListener("click", () =>{
        sec_page.classList.add("hidden");
    })
});
sec_page.addEventListener("click", ()=>{
    sec_page.classList.add("hidden");
})

