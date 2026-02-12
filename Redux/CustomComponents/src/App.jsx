import './App.css';
import { HomeButton } from './Components/HomeButton';
import { Sign_in_Buttom } from './Components/Sign_in_Button';
import { Button } from './Components/Button';

function App() {
  return (
    <>
      <h1>hello</h1>
      <HomeButton value={'home button'} /> <br />
      <br />
      <Sign_in_Buttom value={'signIn'} />
      <br />
      <br />
      <Button 
                value={{
                    name: 'signUp',
                    style: {
                        padding: '.25rem 1rem',
                        borderRadius: '.4rem',
                        border: '2px solid green',
                        background: 'transparent',
                    },
                }}
            />
    </>
  );
};

export default App;