import './App.css'

function App() {
  return (
    <>
      <div>
      <h1>Pourquoi utiliser une Progressive Web App (PWA)</h1>
      <p>Utiliser une PWA permet de pouvoir bénéficier d'une expérience web rapide sur vos ordinateurs ou vos appareils mobiles.</p>
      <h2>Comment installer une PWA ?</h2>
      <p>Pour avoir la plus grande expérience utilisateur de l'application nous vous conseillons d'utiliser le navigateur chrome.
      Ce navigateur est le navigateur le plus compatible à l'utilisation des PWA.
      </p>
      {/* J'aimerais mettre des photos de chaque étape de l'installation d'une PWA sur chrome
        Ex : Photo des trois petits points en haut a droite de l'écrans
        Photo du bouton télécharger
        Photo de l'icon sur le burreau
        Photo de l'app ouverte en PWA
      */}
        <h2>Les avantages de la PWA</h2>
        <p>Les applications PWA permettent de rester connecter avec l'actualité de l'application grâce à des
          <ul>
            <li>Notification push</li>
            <li>Pas besoin d'internet</li>
            <li>et d'autre fonctionnalité qu'un site internet dit "Normale" ne peut pas faire</li>
            {/* Liste de toutes les donctionnalité disponible dans une PWA qui ne l'ai pas ou reste complisquer en WEB 
            Ex : Vibration, Géoloc, Speack to text, text to speack
            */}
          </ul>
        </p>
      </div>
    </>
  )
}

export default App
