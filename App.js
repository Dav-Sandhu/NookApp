import * as React from 'react'
import StackNavigation from './Routes/StackNavigator';
import { NotificationPermission } from './Contexts/PermissionsContext';
import {Joke} from './Contexts/JokeContext';

export default function App() {
  return (
    <NotificationPermission>
      <Joke>
        <StackNavigation />
      </Joke>
    </NotificationPermission>
  );
} 