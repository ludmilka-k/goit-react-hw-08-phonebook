import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar';
import { Footer } from '../Footer';
import { Loader } from '../Loader';
import { Wrapper, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
};
