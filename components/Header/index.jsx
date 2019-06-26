import Link from 'next/link'
export default function Header(props) {
    let {extended} = props
    return (
        <header className="sticky-navbar">
            <nav className="top-nav">
                <ul>
                    <Link href="#">
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </Link>
                    <Link href="#gallery">
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                    </Link>
                    <Link href="#order">
                        <li>
                            <a href="#order">Order now!</a>
                        </li>
                    </Link>
                    <div className="push"/>
                    <Link href="#about">
                        <li>
                            <a href="#about">About</a>
                        </li>
                    </Link>
                    <Link href="#contact">
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}