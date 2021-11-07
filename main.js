const LinksSocialMedia = {
  facebook: "xmatheus.vinicius",
  youtube: "UCScgfGJDC-BB0XxmVymOb4w",
  github: "matheusVRibeiro",
  twitter: "MathRibbeiro",
  instagram: "_matheus.vinicius_",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/$
  {LinksSocialMedia.github}`

  fetch(url)
   .then(response => response.json())
   .then(data => {
    userName.textContent = data.name
    //userBio.textContent = data.bio
    userGitHub.href = data.html_url
    UserImage.src = data.avatar_url
    UserLogin.textContent = data.login
   })
}

getGitHubProfileInfos()