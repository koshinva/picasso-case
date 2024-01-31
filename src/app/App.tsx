import { Route, Routes } from 'react-router-dom';
import { MainPage, NotFound, PostPage } from '@pages/index';
import { Layout } from '@shared/ui/Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
