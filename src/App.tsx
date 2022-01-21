import '@aws-amplify/ui/dist/style.css'
import '@aws-amplify/ui-react/styles.css'

// import { withAuthenticator } from '@aws-amplify/ui-react';
import { Greetings } from 'aws-amplify-react';
import AppRoutes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Greetings />
      <AppRoutes />
    </>
  );
}

export default App;

// export default withAuthenticator(App, { socialProviders: ['google'] });
