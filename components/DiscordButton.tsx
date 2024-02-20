import React from 'react';
// import { Discord } from 'lucide-react';
import DiscordIcon from './../images/logos/discord_main.svg';
import Image from 'next/image';
import Link from 'next/link';

const DiscordButton = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://discord.gg/fJ6z3tZ5DZ"
    >
      <div className="w-12 hover:animate-spin">
        <Image src={DiscordIcon} alt="Discord image" />
      </div>
    </a>
  );
};

export default DiscordButton;
