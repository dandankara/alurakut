import React from 'react'

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box'
import { //importação das lib disponiblizada pela Alura
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
}
  from '../src/lib/AluraCommons'
import { ProfileFriends } from '../src/components/ProfilesFriends';

//Função para mostrar a foto e o nome do Github
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

      {/* Componente pronto disponibilizado pela Alura */}
      <AlurakutProfileSidebarMenuDefault /> 

    </Box>
  )
}

function ProfileRelations(props) {
  return (
    <ProfileFriends>
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileFriends>
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

  const [seguidores, setSeguidores] = React.useState([]);
    fetch(`https://api.github.com/users/${userGitHub}/followers`)
    .then(function (res) {
      return res.json();
    }) 
    .then(function(resAll){
      setSeguidores(resAll)
    }) 
      React.useEffect(function(){

      }, [])

      // console.log('Seguidores antes do return', seguidores)
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        <div className="Profile" style={{ gridArea: "Profile" }}>
          <SidebarProfile userGitHub={userGitHub} />
        </div>

        <div className="Bemvindo" style={{ gridArea: "Bem-vindo" }}>
          <Box>
            <h1 className="title"> Bem vindo (a) </h1>

            {/* Componente disponibilizado pela Alura */}
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            
            {/* Formulário de criação das comunidades */}
            <form
              onSubmit={function handleCreatComunidade(ev) {
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
                  id="title"
                  name="title"
                  aria-label="Nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="URL da sua comunidade?"
                  id="image"
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

          <ProfileRelations title="Seguidores" items={seguidores} />

          <ProfileFriends>
            <h2 className="smallTitle">
              Amigos Favoritos ({friends.length})
            </h2>
            <ul>
              {friends.map((friends) => {
                return (
                  <li key={friends}>
                    <a href={`/users/${friends}`}>
                      <img src={`https://github.com/${friends}.png`} />
                      <span> {friends} </span>
                    </a>
                  </li>)
              })}
            </ul>
          </ProfileFriends>
          
          {/* Esse ProfileFriends == Comunidades */}
          <ProfileFriends> 
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((comunidade) => {
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
