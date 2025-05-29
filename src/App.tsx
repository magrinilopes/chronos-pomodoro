import { Home } from './pages/Home';

import './syles/theme.css';
import './syles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
