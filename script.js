document.addEventListener("DOMContentLoaded", function () {
  generate("音猫｡", "otoneko.", "Everything is cats,\nCats are everything.", "https://otoneko1102.github.io/miq-generator/img/otoneko.webp");
});

function generate(firstDisplayName, firstName, firstContent, firstIcon) {
  const displayName = (firstDisplayName !== undefined && firstDisplayName !== null) ? firstDisplayName : document.getElementById("displayName").value || null;
  const name = (firstName !== undefined && firstName !== null) ? firstName : document.getElementById("name").value || null;
  const content = (firstContent !== undefined && firstContent !== null) ? firstContent : document.getElementById("content").value || null;
  const option = document.getElementById("option").value;
  const icon = (firstIcon !== undefined && firstIcon !== null) ? firstIcon : document.getElementById("iconUrl").value || null;

  fetch("https://api.voids.top/fakequote", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: content,
      avatar: icon,
      username: name,
      display_name: displayName,
      color: option === "true" ? true : false,
      watermark: "MiQ Generator by otoneko.",
    })
  })
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.url;
    displayImage(imageUrl);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function displayImage(imageUrl) {
  const generatedImageContainer = document.getElementById("generatedImage");
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  generatedImageContainer.appendChild(imgElement);
}
