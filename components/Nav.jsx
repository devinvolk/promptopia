"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, useProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex flex-center gap-2">
            <Image
                src='/assests/images/logo.svg'
                alt="Promptopia Logo"
                width={30}
                height={30}
                className="object-contain"
            />
            <p className="logo_text">Promptopia</p>
        </Link>

        {/* desktop navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                        Create Post
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn"> 
                        Sign Out
                    </button>
                    <Link href="/profile">
                        <Image 
                        src="/assests/images/logo.svg"
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="Profile"
                        />
                    </Link>
                </div>
            ) : (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button
                    type="button" 
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                    >
                        Sign In
                    </button>
                ))}
                </>
            )}
        </div>

        {/* mobile navigation */}
        <div className="flex relative sm:hidden">
            {isUserLoggedIn ? (
                <div className="flex">
                    <Image 
                        src="/assests/images/logo.svg"
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="Profile"
                        onClick={() => setToggleDropDown((prev) => !prev)}
                    />
                    {toggleDropDown && (
                         <div className="dropdown">
                            <Link
                                href="/profile"
                                className="dropdown_link"
                                onClick={() => toggleDropDown(false)}
                            >
                                My Profile
                            </Link>
                            <Link
                                href="/create-prompt"
                                className="dropdown_link"
                                onClick={() => toggleDropDown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button
                                type="button"
                                className="mt-5 w-full black-btn"
                                onClick={() => {toggleDropDown(false); signOut();}}
                            >
                                Sign Out
                            </button>
                         </div>
                    )}
                </div>
            ) : (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button
                    type="button" 
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                    >
                        Sign In
                    </button>
                ))}
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav