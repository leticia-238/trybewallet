import { GiWallet } from 'react-icons/gi';
import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
      <figure>
        <GiWallet className="icon-wallet" />
      </figure>
      <h2 className="title-wallet">Wallet</h2>
    </div>
  );
}

export default Logo;
