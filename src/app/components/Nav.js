"use client"

/*import { useContext } from "react"
// import next image
import Image from "next/image"
// import next link
import Link from "next/link"
// context
import { CartContext } from "../context/CartContext"

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)

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
          
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide ml-4">
                26 713 213
              </div>
            </div>
          </div>
          
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"/bag.svg"} width={38} height={38} alt="" />
            
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav*/
/*import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "react-bootstrap"; // Assuming you are using Bootstrap Nav
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// context
import { CartContext } from "../context/CartContext";

const CustomNav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
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
        <div className="flex gap-x-8 items-center">
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide ml-4">
                26 713 213
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"/bag.svg"} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
          
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <Nav.Link>
                Welcome, {session.user.email} 
              </Nav.Link>
              <Image src={session.user.image} width={38} height={38} alt="" /> 
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

export default CustomNav;*/

/******************************************** */
/*import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; // Import CSS module for styling

// context
import { CartContext } from "../context/CartContext";

const CustomNav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
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
        <div className="flex gap-x-8 items-center">
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide ml-4">
                26 713 213
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"/bag.svg"} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <Nav.Link>
                Welcome! {session.user.email}
              </Nav.Link>
              <div className={styles.avatarContainer}> 
                <Image
                  src={session.user.image}
                  width={60} // Increase the width for a larger avatar
                  height={60} // Increase the height for a larger avatar
                  alt=""
                  className={styles.avatar} // Apply styling to the image
                />
              </div>
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

export default CustomNav;*/
/*import { useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Dropdown } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; 
import { CartContext } from "../context/CartContext";

const CustomNav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false); 
  const dropdownRef = useRef(null); 

  const toggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

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
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide ml-4">
                26 713 213
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"/bag.svg"} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <Dropdown show={showMenu} onClose={() => setShowMenu(false)} ref={dropdownRef}>
                <Dropdown.Toggle variant="transparent" onClick={toggleMenu}>
                  <div className={styles.avatarContainer}>
                    <Image
                      src={session.user.image}
                      width={60}
                      height={60}
                      alt=""
                      className={styles.avatar}
                    />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.dropdownMenu}>
                  <Dropdown.Item onClick={() => signOut()}><LogoutIcon/> Se déconnecter</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {showMenu && (
                <div className="bg-white"> 
                  <Nav.Link>
                    Welcome! {session.user.email}
                  </Nav.Link>
                </div>
              )}
            </>
          ) : (
            <Nav.Link onClick={() => signIn()}><AccountCircleIcon/> Se connecter</Nav.Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;*/
/*import { useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Dropdown } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; 
import { CartContext } from "../context/CartContext";

const CustomNav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false); 
  const dropdownRef = useRef(null); 

  const toggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

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
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide ml-4">
                26 713 213
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"/bag.svg"} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <Dropdown show={showMenu} onClose={() => setShowMenu(false)} ref={dropdownRef}>
                <Dropdown.Toggle variant="transparent" onClick={toggleMenu}>
                  <div className={styles.avatarContainer}>
                    <Image
                      src={session.user.image}
                      width={60}
                      height={60}
                      alt=""
                      className={styles.avatar}
                    />
                  </div>
                </Dropdown.Toggle>
                
              </Dropdown>
              {showMenu && (
                <div className="bg-white"> 
                  <Nav.Link>
                    Welcome! {session.user.email}
                  </Nav.Link>
                  <div className="bg-white">
                    <Nav.Link onClick={() => signOut()}><LogoutIcon/> Se déconnecter</Nav.Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Nav.Link onClick={() => signIn()}><AccountCircleIcon/> Se connecter</Nav.Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;*/
/*import { useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Dropdown } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; 
import { CartContext } from "../context/CartContext";

const CustomNav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false); 
  const dropdownRef = useRef(null); 
  const closeTimerRef = useRef(null); // Reference for close timer

  const toggleMenu = () => {
    setShowMenu(!showMenu); 
    clearTimeout(closeTimerRef.current); // Clear previous timer
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Delay closing the toggle by 300ms
      closeTimerRef.current = setTimeout(() => {
        setShowMenu(false);
      }, 300);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

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
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide ml-4">
                26 713 213
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"/bag.svg"} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
          <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          {session ? (
            <>
              <Dropdown show={showMenu} onClose={() => setShowMenu(false)} ref={dropdownRef}>
                <Dropdown.Toggle variant="transparent" onClick={toggleMenu}>
                  <div className={styles.avatarContainer}>
                    <Image
                      src={session.user.image}
                      width={60}
                      height={60}
                      alt=""
                      className={styles.avatar}
                    />
                  </div>
                </Dropdown.Toggle>*/
               {/* <Dropdown.Menu className={styles.dropdownMenu}>
                  <Dropdown.Item onClick={() => signOut()}><LogoutIcon/> Se déconnecter</Dropdown.Item>
          </Dropdown.Menu>*/}
             {/* </Dropdown>
              {showMenu && (
                <div className="bg-white"> 
                  <Nav.Link>
                    Welcome! {session.user.email}
                  </Nav.Link>
                  <div className="bg-white">
                    <Nav.Link onClick={() => signOut()}><LogoutIcon/> Se déconnecter</Nav.Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Nav.Link onClick={() => signIn()}><AccountCircleIcon/> Se connecter</Nav.Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;*/}
/*********************************************** */
import { useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Dropdown } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CustomNav.module.css'; 
import { CartContext } from "../context/CartContext";

const CustomNav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false); 
  const dropdownRef = useRef(null); 
  const closeTimerRef = useRef(null); 

  const toggleMenu = () => {
    setShowMenu(!showMenu); 
    clearTimeout(closeTimerRef.current); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeTimerRef.current = setTimeout(() => {
        setShowMenu(false);
      }, 300);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

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
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide ml-4">
                26 713 213
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"/bag.svg"} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
         {/* <Nav.Link as={Link} href="/client/pageAide">
            Aide
          </Nav.Link>
          <Nav.Link as={Link} href="/client/categories">
            Categories
  </Nav.Link>*/}
      
          <Nav.Link as={Link} href="/client/categories" className="text-white hover:text-blue-500 transition-colors duration-300">
            Categories
          </Nav.Link>
          <Nav.Link as={Link} href="/client/pageAide" className="text-white hover:text-blue-500 transition-colors duration-300">
            About Us
          </Nav.Link>
          {session ? (
            <>
              <Dropdown show={showMenu} onClose={() => setShowMenu(false)} ref={dropdownRef}>
                <Dropdown.Toggle variant="transparent" onClick={toggleMenu}>
                  <div className={styles.avatarContainer}>
                    <Image
                      src={session.user.image}
                      width={60}
                      height={60}
                      alt=""
                      className={styles.avatar}
                    />
                  </div>
                </Dropdown.Toggle>
               
              </Dropdown>
              {showMenu && (
                <div className={`bg-white ${styles.toggleContent}`}>
                  <Nav.Link className={styles.toggleLink}>
                    Welcome! {session.user.email}
                  </Nav.Link>
                  <div className={`bg-white ${styles.toggleItem}`}>
                    <Nav.Link onClick={() => signOut()} className={styles.toggleLink}><LogoutIcon/> Se déconnecter</Nav.Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Nav.Link onClick={() => signIn()}><AccountCircleIcon/> Se connecter</Nav.Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;






