// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/courses">Courses</Link> | <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
