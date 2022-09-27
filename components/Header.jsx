import React, { useContext } from 'react'

import Link from 'next/link';

const categories = [{name: 'React', slug: 'react'}, {name: 'Web Development', slug: 'web-dev'}]

const Header = () => {
  return (
/*     <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block py-8">
            <div className="flex flex-row justify-center max-w-md">
                <Link href="/">
                    <img src="/logo.png" alt="logo"/>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-green ml-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div> */
    <div className="container mx-auto px-10 mb-8">
        <div className="flex justify-center">
            <div className="container max-w-xl">
            <Link href="/">
                <img src="/logo.png" alt="logo"/>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
