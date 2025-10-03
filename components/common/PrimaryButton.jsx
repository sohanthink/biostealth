import Link from 'next/link'
import React from 'react'

const PrimaryButton = ({ link, cn, text }) => {
    return (
        <Link href={link} className={`primary-button inline-block ${cn}`}>{text}</Link>
    )
}

export default PrimaryButton