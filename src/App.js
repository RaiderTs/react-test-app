import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Welcome } from './components/Welcome';
import { UsersList } from './features/users/UsersList';
import { UserPostsList } from './features/posts/UserPostsList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route index element={<Welcome />} />
        <Route path='userslist' element={<UsersList />} />
        <Route path='/user/:id/posts' element={<UserPostsList />} />
      </Route>
    </Routes>
  );
}

export default App;
