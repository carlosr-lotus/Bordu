import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiMenu, BiCart } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';

import './header.css';

export default function Header() {

    const [navbar, setNavbar] = useState(false);

    // This 'let' will handle the logo color change when mobile nav bar is toggled
    let logoFontColor = 'var(--Logo-Default)';

    // 'IF' condition to determine when navbar on mobile is opened so it changes logo font color
    if (!navbar) {
            logoFontColor = 'var(--Logo-Default)';
    } else {
            logoFontColor = 'var(--Logo-Font-White)';
    }

    // Function to change navbar boolean value (TRUE when toggled, FALSE when closed)
    const handleMobileNav = () => {
        setNavbar(!navbar);
    }

    return (
        <header className={navbar ? "bg-mobile-menu" : ""}>
            
            <div className="englober-header">

                <div className="header-container">

                    {/* Nav Bar Toggle Icon (only on Mobile) */}
                    <button className="nav-toggle" onClick={handleMobileNav}>
                        {navbar ? <MdClose size={30} fill={logoFontColor}/> : <BiMenu size={30}/>}
                    </button>

                    {/* Empty div to center logo on Desktop screensizes */}
                    <div className="invisible-div"></div>

                    {/* Logo Container + Desktop Navbar */}
                    <nav className="logo-container">

                        <Link to="/fragrance" className="link-fragrance-page">
                            <button className="btn-header-link">Fragrância</button>
                        </Link>
                        
                        {/* Logo 'Bordu' + Link to index/homepage */}
                        <Link to="/">
                         <svg className="header-logo" width="90" height="90" viewBox="0 0 3334 2500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsserif="http://www.serif.com/" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
                            <title>Website Logo "Bordu"</title>
                            <desc>The logo is "Bordu" which is the name of the brand, plus a mouth with red lipstick above it.</desc>
                            {/* Red Lips + Stroke */}
                            <g id="Logo"><g id="Lips"><path d="M548.97,1005.24c0,0 241.078,-360.192 477.858,-186.857c15.056,11.022 203.827,-310.535 514.861,-22.595c14.169,13.117 -82.906,368.674 -382.613,463.978c-295.903,94.095 -610.106,-254.526 -610.106,-254.526" fill="#ff1919"/><path d="M595.464,1012.98c334.494,3.119 634.968,-61.747 901.062,-188.747" stroke="#000" strokeWidth="3.78px"/></g>
                            {/* Letter 'U' */}
                            <g id="Bordu"><path d="M2560.12,1234.51l74.531,0l0.141,242.877c0,-0 2.546,150.543 20.219,186.131c1.047,1.516 5.651,12.346 16.481,26.225c4.86,6.228 11.329,12.579 18.676,19.826c41.571,40.998 162.739,74.915 249.631,-5.614c7.587,-7.032 14.256,-15.337 19.979,-24.389c3.827,-6.054 8.074,-13.737 10.826,-20.24c0,0 4.929,-10.892 9.088,-29.734c3.357,-15.205 5.986,-35.57 6.877,-59.699c0,-0 1.685,-53.152 1.387,-57.016l-0.222,-278.432l75.607,-0.058l-0,278.993c-0,0 -0.975,56.626 -1.692,61.206c0,0 -7.11,74.927 -17.765,100.725c-0,-0 -39.902,152.923 -232.999,149.11c-0,-0 -120.49,3.311 -180.819,-67.816c-0,-0 -38.681,-37.508 -49.926,-83.2c-0.016,0.115 -9.181,-25.109 -14.937,-68.722c-4.424,-33.519 -6.095,-78.191 -4.57,-128.806l-0.513,-241.367Z" fill={logoFontColor}/>
                            {/* Letter 'D' */}
                            <g><path d="M2401.13,1012.42l-72.946,-0l-0,328.179c-0,-0 -86.178,-144.44 -273.116,-117.52c-0,0 -131.313,9.394 -212.241,146.429c0.156,-0.187 -10.814,15.577 -20.542,42.895c-20.095,56.428 -39.713,160.397 21.184,262.597c-0.06,0.123 74.522,145.545 250.201,149.34c-0,-0 139.158,9.179 234.89,-115.411l0.151,100.65l72.747,0l-0.328,-797.159Zm-295.651,277.576c126.728,-0 229.616,105.08 229.616,234.51c0,129.43 -102.888,234.51 -229.616,234.51c-126.729,0 -229.616,-105.08 -229.616,-234.51c-0,-129.43 102.887,-234.51 229.616,-234.51Z" fill={logoFontColor}/></g>
                            {/* Letter 'R' */}
                            <g><path d="M1480.75,1809.48l75.513,0.096l1.5,-223.752c0.327,6.387 -8.076,-175.334 46.185,-243.472c0,-0 51.168,-75.702 128.784,-40.843l38.845,-62.68c0.997,-1.284 -114.451,-76.676 -215,80.667l-0.235,-85.03l-75.32,0.004l-0.272,575.01Z" fill={logoFontColor}/></g>
                            {/* Letter 'O' */}
                            <g><path d="M1069.4,1220.31c166.688,-0 302.017,135.329 302.017,302.017c0,166.687 -135.329,302.017 -302.017,302.017c-166.688,-0 -302.017,-135.33 -302.017,-302.017c-0,-166.688 135.329,-302.017 302.017,-302.017Zm2.215,69.376c128.823,0 233.411,104.588 233.411,233.411c-0,128.823 -104.588,233.411 -233.411,233.411c-128.823,-0 -233.411,-104.588 -233.411,-233.411c0,-128.823 104.588,-233.411 233.411,-233.411Z" fill={logoFontColor}/></g>
                            {/* Letter 'B' */}
                            <g><path d="M192.552,1029.65l153.292,-0c0,-0 102.607,-2.171 155.453,28.505c52.847,30.675 79.159,77.557 89.685,119.415c10.526,41.858 -0.198,77.754 -0.801,86.869c-0.604,9.116 -23.621,82.913 -94.227,118.679c0,-0 69.995,24.878 92.555,48.112c22.559,23.233 44.684,40.858 62.811,98.976c18.127,58.119 -2.594,123.201 -8.404,136.259c-5.81,13.058 -50.235,120.715 -192.077,138.131c-0,-0 -24.312,2.8 -55.242,2.526l-203.045,-0.016l0,-777.456Zm76.251,405.58c0,-0 159.647,-2.799 185.507,10.39c0,-0 119.526,21.741 123.521,140.779c0,0 2.365,112.867 -116.713,139.237c0,-0 -47.501,9.917 -113.633,8.004l-78.682,-0.595l0,-297.815Zm0.037,-329.435l94.633,-0.115c-0,-0 61.212,0.79 89.255,15.739c28.044,14.949 48.82,28.886 60.117,76.379c-0,0 12.193,60.739 -23.692,98.609c-0,0 -34.39,49.993 -104.303,54.606c0,0 -40.442,4.94 -62.956,3.587l-53.091,-0l0.037,-248.805Z" fill={logoFontColor}/></g></g></g>
                            </svg>
                        </Link>
                    
                        <Link to="/makeup" className="link-makeup-page">
                         <button className="btn-header-link">Maquiagem</button>
                        </Link>
                    </nav>

                    {/* Cart + Favorites(heart icon) */}
                    {/* navbar ? "englober-header disabled" : "englober-header" */}
                    <div className={navbar ? "icons-header disabled" : "icons-header"}>
                        <button>
                            <FiHeart size={20} />
                        </button>

                        <button>
                            <BiCart size={25} />
                        </button>
                    </div>

                </div>

                {/* If Mobile Menu Icon is Toggled, display the Mobile Nav below */}
                {navbar ? <nav className="mobile-navbar">
                    
                    <Link to="/fragrance" className="link-fragrance-page">
                        <button className="btn-header-link" onClick={() => setNavbar(!navbar)} >Fragrância</button>
                    </Link>

                    <Link to="/makeup" className="link-makeup-page">
                        <button className="btn-header-link" onClick={() => setNavbar(!navbar)}>Maquiagem</button>
                    </Link>
                </nav>
                    : ""}

            </div>

        </header>
    )
};