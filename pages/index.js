import React from 'react'

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

  
  React.useState(['Odeio acordar cedo']); 
  const [comunidades, setComunidades] = React.useState([{
    id: 'testedeidquevaisermudadomaisprafrente',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]) 

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
              ev.preventDefault(); //Desabilita o refresh da página
               
              const dadosForm = new FormData(ev.target);

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosForm.get('title'),
                image: dadosForm.get('image'),
              }
              
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas)
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
              Amigos ({friends.length})
            </h2>
            <ul>
              {friends.map((friends) => {
                return (
                  <li  key={friends}>
                    <a href={`/users/${friends}`}>
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
                  <li key={comunidade.id}>
                    <a href={`/users/${comunidade.title}`}>
                      <img src={comunidade.image} />
                      <span> {comunidade.title} </span>
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
