import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <div className="container mx-auto px-3 flex flex-col h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <header className="flex flex-wrap gap-2 items-center justify-between px-4 py-8 mb-4 border-black/10 border-b-2 uppercase">
      <h1 className="text-3xl font-bold">
        <Link to="/">Picasso</Link>
      </h1>
      <p>test case</p>
    </header>
  );
}
function Footer() {
  return (
    <footer className="flex flex-wrap gap-2 items-center justify-between px-4 py-8 mt-4 border-black/10 border-t-2 uppercase">
      <p>By Koshin V.A.</p>
      <p>
        <strong>telegram:</strong>{' '}
        <a
          className="underline text-blue-900"
          href="https://t.me/imp_0593"
          target="_blank"
          rel="noreferrer"
        >
          send me
        </a>
      </p>
    </footer>
  );
}
