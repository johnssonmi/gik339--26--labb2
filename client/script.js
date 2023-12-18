// //skapar en variabel url, som innehåller den adress som anropet ska göras till
const url = 'http://localhost:3000/users';


// Skapa en async-funktion för att hämta och bearbeta data
async function fetchData(url) {
  try {
    const response = await fetch(url); // Vänta på att hämta data från den angivna URL:en
    const users = await response.json(); // Vänta på att omvandla responsen till JSON-format

    // Printa arrayen med users i console.log
    console.log(users)

    // Skapa en ul-container för användarlistan
    const ul = document.createElement('ul');
    ul.classList.add('user-list'); // Lägg till en klass för styling

    // Loopa igenom varje användare och skapa HTML för varje
    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerText = ` ${user.firstName} ${user.lastName} ${user.username}`;
      li.style.backgroundColor = user.color;
      li.style.marginBottom = '16px';

      // Lägg till varje li-element i ul-container
      ul.appendChild(li);
    });
    

    // Lägg till ul-container till body
    document.body.appendChild(ul);
  } catch (error) {
    console.error('Error fetching data:', error); // Om det uppstår ett fel, logga det till konsolen
  }
}

// Anropa funktionen för att hämta och bearbeta data från API:et
fetchData(url);