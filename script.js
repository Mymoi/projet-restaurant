// ECF - Evaluation Graduate Développeur Web et Web Mobile
// Réalisation par : Voahiranirina Myriam RAJERIARISOA
// Date : Mai 2023
// Projet : création du site internet du restaurant Quai Antique 
// Phases du projet : 3 découpage en 3 lots. Chaque lot livré  pour tout utilisateur.
// ==> Lot 1 : site internet Front End statique
// ==> Lot 2 : site internet Front End dynamique
// ==> Lot 3: site internet avec les parties Front End  et Back end opérationnelles
// Livraisons : V1.0 : 24 mai 2023 - Lot 1 - Partie Front-End statique avec Html et CSS

//Prise en compte des données de connexion de l'utilisateur déjà inscrit
const el1 = document.getElementById('connexion-custom-form')
el1.addEventListener('submit', (event) =>{
  event.preventDefault()

  let email = event.target.email.value
  let pwd = event.target.password.value

  if (email && pwd) {
    alert(`Bonjour, vous allez être redirigé votre page client.`)
    }
    else {
    alert(`Suite à un problème technique votre page client est indisponible.`)
    }
 })

 //Prise en compte des informations du formulaire nouveau client
const el2 = document.getElementById('register-custom-form')
el2.addEventListener('submit', (event) =>{
  event.preventDefault()

  let civility = event.target.female.checked ? 'female' : 'male'
  let name = event.target.name.value
  let category = event.target.category.value
  let cgv = event.target.cgv.checked
  

  let myCivility = civility === 'female' ? 'Madame' : 'Monsieur'
  let myName = name.toUpperCase()
  let myCategory

  switch (category) {
    case "hunter-gather":
      myCategory = "Cueilleur";
      break;

    case "gargantuan":
      myCategory = "Gargantuesque";
      break;

    case "modern":
        myCategory = "Moderne";
        break;

    default:
      myCategory = "Aucune catégorie";
      break;
  } 


  if (cgv) {
    alert(`Merci pour votre enregistrement ${myCivility} ${myName}, \n vous recevrez prochainement notre newsletter et les nouveautés de votre catégorie préférée, ${myCategory}. `)
    }
    else {
    alert(`Merci de cocher la case des conditions générales ${myCivility} ${myName}, pour valider votre enregistrement.`)
    }
 })

