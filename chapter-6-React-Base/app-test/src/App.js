import './App.css';

function WhoAmI ({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name.firstName}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname="Smith" link='facebook.com' />
      <WhoAmI name='Alex' surname="Sheldon" link='vk.com' />
      <WhoAmI name={{firstName: 'Alex'}} surname="Sheldon" link='vk.com' />
      <WhoAmI name={() => {return 'Alex'} } surname="Sheldon" link='vk.com' />
    </div>
  );
}

export default App;
