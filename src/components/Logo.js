import { GiWallet } from 'react-icons/gi';
import React from 'react';

function Logo() {
  return (
    <div className="logo">
      <figure>
        <GiWallet className="icon-wallet" />
      </figure>
      <h2 className="title-wallet">TrybeWallet</h2>
    </div>
  );
}

export default Logo;
