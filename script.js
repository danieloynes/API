/*
// Henter data fra fotograf.json
fetch('"C:\Users\danie\OneDrive\Skrivebord\Programmeringsoppgaver\VG2\Uke38\API\fotograf.json"')
  .then(response => response.json())
  .then(data => {
    // 1. Hvor mange bilder har du i fotograf.json?
    const numImages = data.bilder.length;
    console.log("Antall bilder:", numImages);

    // 2. Hvor mange albumer har du i fotograf.json?
    const numAlbums = data.albums.length;
    console.log("Antall albumer:", numAlbums);

    // 3. Hva er tittelen til bildet 238?
    const image238 = data.bilder.find(image => image.id === 238);
    if (image238) {
      console.log("Tittelen til bildet 238:", image238.title);
    } else {
      console.log("Bilde 238 ikke funnet.");
    }

    // 4. Skriv ut bildet 555 på skjermen.
    const image555 = data.bilder.find(image => image.id === 555);
    if (image555) {
      const imgElement = document.createElement('img');
      imgElement.src = image555.url;
      document.body.appendChild(imgElement);
    } else {
      console.log("Bilde 555 ikke funnet.");
    }
  })
  .catch(error => console.error('Feil ved henting av fotograf.json:', error));
*/

// Henter data fra API-en (https://jsonplaceholder.typicode.com/posts)
fetch('https://jsonplaceholder.typicode.com/posts/95')
  .then(response => response.json())
  .then(post => {
    // 1. Hva er tittelen til post 95?
    console.log("Tittelen til post 95:", post.title);
  })
  .catch(error => console.error('Feil ved henting av post 95:', error));

fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 5,
    title: 'Updated Title',
    body: 'Oppdatert body tekst her.',
    userId: 5
  }),
})
  .then(response => response.json())
  .then(updatedPost => {
    console.log('Oppdatert post:', updatedPost);
  })
  .catch(error => console.error('Feil ved oppdatering av post 5:', error));
