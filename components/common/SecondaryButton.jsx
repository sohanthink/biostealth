import Link from 'next/link'
import React from 'react'

const SecondaryButton = ({ link, cn, text }) => {
    return (
        <Link href={link} className={`secondary-button inline-block ${cn}`}>{text}</Link>
    )
}

export default SecondaryButton