import mobileBg from '../../assets/pattern-bg-mobile.png'
import desktopBg from '../../assets/pattern-bg-desktop.png'

function Header() {
    return <>
        <div className="grid-item-1 background-header">
            <picture>
            <source media="(min-width: 376px)" srcSet={desktopBg}/>
            <img src={mobileBg} alt="Background pattern"/>
            </picture>
        </div>
    </>;
}

export default Header;