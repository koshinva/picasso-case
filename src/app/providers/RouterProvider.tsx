import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, NotFound, PostPage } from '@pages/index';
import { Layout } from '@pages/layouts';

export const RouterProvider = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
