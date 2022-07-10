import me from "../../Images/me.jpg"
import "../Profile/profile_style.css" 

function Profile() {
    return (
        <div className="profile-container">
            <img className="autora-img" src={me} alt="autora" />
            <div className="text-content">
                <h2>Oiê! Muito prazer, sou a Lara.</h2>
                <p>
                    Paraense, bacharela em arquitetura e urbanismo, taurina e mulher trans. Atualmente 
                    em um processo de transição de carreira e podendo ser aluna da Reprograma, através
                    do Bootcamp "Todas em Tech" que vem para inserir mais mulheres no mercado de tecnologia.
                </p>
            </div>
        </div>
    )
}

export default Profile