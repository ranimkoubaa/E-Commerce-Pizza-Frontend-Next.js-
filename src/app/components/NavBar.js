/*import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; // Import CSS module for styling



const CustomNav2 = () => {

  const { data: session } = useSession();

  return (
    <nav className="absolute w-full py-8 mb-10 sm:mb-0">
      <div className="container mx-auto flex flex-col sm:flex-row gap-y-3 justify-between items-center">
        <Link href="/" className="max-w-[160px] sm:max-w-max">
          <Image
            src={"/logo.svg"}
            width={160}
            height={90}
            alt=""
            priority
            className="aspect-video"
          />
        </Link>
       
          
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <div className={styles.avatarContainer}> 
                <Image
                  src={session.user.image}
                  width={60} // Increase the width for a larger avatar
                  height={60} // Increase the height for a larger avatar
                  alt=""
                  className={styles.avatar} // Apply styling to the image
                />
              </div>
              <Nav.Link>
                Welcome, {session.user.email}
              </Nav.Link>
              <Nav.Link onClick={() => signOut()}><LogoutIcon/>Se déconnecter</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => signIn()}><AccountCircleIcon/>Se connecter</Nav.Link>
          )}
        </div>
      
    </nav>
  );
};

export default CustomNav2;*/
"use client"
/*import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; // Import CSS module for styling

const CustomNav2 = () => {
  const { data: session } = useSession(); // Move useSession hook to the top

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Render nothing on the server side

  return (
    <nav className="absolute w-full py-8 mb-10 sm:mb-0">
      <div className="container mx-auto flex flex-col sm:flex-row gap-y-3 justify-between items-center">
        <Link href="/" className="max-w-[160px] sm:max-w-max">
          <Image
            src={"/logo.svg"}
            width={160}
            height={90}
            alt=""
            priority
            className="aspect-video"
          />
        </Link>

        <div className="flex gap-x-8 items-center">
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <div className={styles.avatarContainer}>
                <Image
                  src={session.user.image}
                  width={60}
                  height={60}
                  alt=""
                  className={styles.avatar}
                />
              </div>
              <Nav.Link>
                Welcome, {session.user.email}
              </Nav.Link>
              <Nav.Link onClick={() => signOut()}><LogoutIcon/>Se déconnecter</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => signIn()}><AccountCircleIcon/>Se connecter</Nav.Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNav2;*/
/*import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; // Import CSS module for styling



const CustomNav2 = () => {

  const { data: session } = useSession();

  return (
    <nav className="absolute w-full py-8 mb-10 sm:mb-0">
      <div className="container mx-auto flex flex-col sm:flex-row gap-y-3 justify-between items-center">
        <Link href="/" className="max-w-[160px] sm:max-w-max">
          <Image
            src={"/logo.svg"}
            width={160}
            height={90}
            alt=""
            priority
            className="aspect-video"
          />
        </Link>
       
          
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <div className={styles.avatarContainer}> 
                <Image
                  src={session.user.image}
                  width={60} // Increase the width for a larger avatar
                  height={60} // Increase the height for a larger avatar
                  alt=""
                  className={styles.avatar} // Apply styling to the image
                />
              </div>
              <Nav.Link>
                Welcome, {session.user.email}
              </Nav.Link>
              <Nav.Link onClick={() => signOut()}><LogoutIcon/>Se déconnecter</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => signIn()}><AccountCircleIcon/>Se connecter</Nav.Link>
          )}
        </div>
      
    </nav>
  );
};

export default CustomNav2;*/
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; // Import CSS module for styling

const CustomNav2 = () => {
  const { data: session } = useSession();

  return (
    <nav className="absolute w-full py-8 mb-10 sm:mb-0 bg-black text-white"> {/* Add bg-black and text-white classes */}
      <div className="container mx-auto flex flex-col sm:flex-row gap-y-3 justify-between items-center">
        <Link href="/" className="max-w-[160px] sm:max-w-max" >
          <Image
            src={"/logo.svg"}
            width={160}
            height={90}
            alt=""
            priority
            className="aspect-video"
            style={{ marginRight: '30rem' }} 
          />
        </Link>
        
        {session ? (
          <>
            <div className={styles.avatarContainer} >
              <Image
                src={session.user.image}
                width={60}
                height={60}
                alt=""
                className={styles.avatar}
                
              />
            </div>
            <Nav.Link>
              Welcome, {session.user.email}
            </Nav.Link>
            <Nav.Link onClick={() => signOut()}><LogoutIcon/>Se déconnecter</Nav.Link>
          </>
        ) : (
          <Nav.Link onClick={() => signIn()}><AccountCircleIcon/>Se connecter</Nav.Link>
        )}
      </div>
    </nav>
  );
};

export default CustomNav2;

