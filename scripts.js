import request from 'superagent'

let contactDiv = document.getElementById('contact')
let bioDiv = document.getElementById('bio')
let photoDiv = document.getElementById('photo-div')

function requestData () {
  request.get('https://api.github.com/users/twilson16')
    .then(response => {
      console.log(response)
      displayContactResults(response.body)
      displayBioResults(response.body)
      displayPhoto(response.body)
    })
}

// requestData()

function displayContactResults (results) {
  let outputContact = `
    <div class="contact">
        <div><h2 id="contactTitle">Contact</h2></div>
        <div><span class="name"><strong>Name</strong></span> <span class="contactInfo">${results.name}</span></div>
        <div><span class="name"><strong>Github URL</strong></span> <a href=${results.html_url}>twilson16</a></div>
        <div><span class="name"><strong>Company</strong></span> <span class="contactInfo">${results.company}</span></div>
        <div><span class="name"><strong>Location</strong></span> <span class="contactInfo">${results.location}</span></div>
    </div>
    `
  contactDiv.innerHTML = outputContact
}

function displayBioResults (results) {
  let outputBio = `
      <div class="bio">
      <div><h2 id="bioTitle">Bio</h2></div>
          <div class="bioInfo">${results.bio}</div>
      </div>
      `
  bioDiv.innerHTML = outputBio
}

function displayPhoto (results) {
  let outputPhoto = `
      <div class="photo-div">
      <img class="image" src="${results.avatar_url}">
      </div>
      `
  photoDiv.innerHTML = outputPhoto
}

// document.getElementById('divContainer').addEventListener('load', requestData)

requestData()