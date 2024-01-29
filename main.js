function loadContent(page) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content-container').innerHTML = html;
      })
      .catch(error => console.error('Error fetching page:', error));
  }
  