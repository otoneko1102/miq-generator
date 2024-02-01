function generate() {
  const displayName = document.getElementById("displayName").value || null;
  const name = document.getElementById("name").value || null;
  const content = document.getElementById("content").value || null;
  const option = document.getElementById("option").value;
  const icon = document.getElementById("iconUrl").value || null;

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
  generatedImageContainer.innerHTML = '';
  generatedImageContainer.appendChild(imgElement);
}
