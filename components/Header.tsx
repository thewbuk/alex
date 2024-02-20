import React from 'react';
import Logo from './Logo';
import { DarkModeToggle } from './DarkModeToggle';
import { Button } from './ui/button';
import DiscordButton from './DiscordButton';
import { Youtube } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex flex-col items-center h-24 p-5 pl-2 mx-auto bg-trasparent sm:flex-row ">
        <Logo />
        <div className="flex items-center justify-end flex-1 space-x-4">

          <DarkModeToggle />
          <DiscordButton />
        </div>
      </nav>
    </header>
  )
}

export default Header