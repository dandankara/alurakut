import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box'
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
}
  from '../src/lib/AluraCommons'
import { ProfileFriends } from '../src/components/ProfilesFriends';

function SidebarProfile(props) {
  return (

    <Box>
      <img src={`https://github.com/${props.userGitHub}.png`}
        alt="photoprofile"
        style={{ borderRadius: '8px' }} />

      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.userGitHub}`}>
          @{props.userGitHub}
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />

    </Box>
  )
}

export default function Home() {

  const comunidades = [ 
    'AluraKut',
    'Odeio acordar cedo',
    'Github Vagas'
  ]; 

  const userGitHub = "dandankara";

  const friends = [
    'AlexandreL0pes',
    'analuizags',
    'DanielHe4rt',
    'omariosouto',
    'marcobrunodev'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        <div className="Profile" style={{ gridArea: "Profile" }}>
          <SidebarProfile userGitHub={userGitHub} />
        </div>

        <div className="Bemvindo" style={{ gridArea: "Bem-vindo" }}>
          <Box>
            <h1 className="title">
              Bem vindo (a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form onSubmit={function handleCreatComunidade(ev) {
              ev.preventDefault();
              console.log(ev);


            }}>

              <div>
                <input
                  placeholder="Nome da sua comunidade?"
                  name="title"
                  aria-label="Nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="URL da sua comunidade?"
                  name="image"
                  aria-label="URL da sua comunidade?"
                />
              </div>

              <button>
                Criar Comunidade
              </button>

            </form>
          </Box>
        </div>

        <div className="Comunidade" style={{ gridArea: "Comunidade" }}>
        <ProfileFriends>
            <h2 className="smallTitle">
              Pessoas Favoritas ({friends.length})
            </h2>
            <ul>
              {friends.map((friends) => {
                return (
                  <li>
                    <a href={`/users/${friends}`} key={friends}>
                      <img src={`https://github.com/${friends}.png`} />
                      <span> {friends} </span>
                    </a>
                  </li>)
              })}
            </ul>
          </ProfileFriends>  

          <ProfileFriends>
            <h2 className="smallTitle">
              Comunidades ({friends.length})
            </h2>
            <ul>
              {comunidades.map((comunidade ) => {
                return (
                  <li>
                    <a href={`/users/${comunidade}`} key={comunidade}>
                      <img src={`http://placehold.it/300x300`} />
                      <span> {comunidade} </span>
                    </a>
                  </li>)
              })}
            </ul>
          </ProfileFriends>
        </div>

      </MainGrid>
    </>
  )
}
