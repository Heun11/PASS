import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Logout } from '../Login';
import NewMessage from './NewMessage';

/**
 * Inbox Component - Component that generates Inbox section for users
 * logged into a Solid Pod via Solid Session
 *
 * @memberof Inbox
 * @name Inbox
 */

<<<<<<< HEAD
const Inbox = () => {
  const location = useLocation();

  localStorage.setItem('restorePath', location.pathname);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Logout />
      <section id="inbox" className="panel">
        <StyledButton onClick={() => setShowForm(!showForm)}>New Message</StyledButton>
        {showForm && <NewMessage />}
        <div>Placeholder; inbox contents will go here.</div>
      </section>
    </>
  );
};
=======
const Inbox = () => (
  <>
    <AppHeader />
    <section id="inbox" className="panel">
      <div>Placeholder; inbox contents will go here.</div>
    </section>
  </>
);
>>>>>>> give keys to user

const StyledButton = styled('button')({
  width: '150px',
  height: '60px',
  backgroundColor: '#4cb4c6',
  borderColor: 'black',
  borderRadius: '5px',
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(0.9)'
  },
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '18px'
});

export default Inbox;
