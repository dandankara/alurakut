import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons'
import { ProfileFriends } from '../src/components/ProfilesFriends';

function SidebarProfile(props) {
  return (

    <Box>
      <img src={`https://github.com/${props.userGitHub}.png`} 
      alt="photoprofile" 
      style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {

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
        </div>

      </MainGrid>
    </>
  )
}
