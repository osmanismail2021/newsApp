import "./style/menu.css"

export default function menu({ menuOpen, setMenuOpen }) {
    return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a className="menuShadow" href="#home">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a className="menuShadow" href="#belgiumnews">Belgium News</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a className="menuShadow" href="#trafficnews">Traffic News</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a className="menuShadow" href="#weathernews">Weather News</a>
            </li>
            
            <li onClick={()=>setMenuOpen(false)}>
                <a className="menuShadow" href="#sportnews">Sport News</a>
            </li>
             
            <li onClick={()=>setMenuOpen(false)}>
                <a className="menuShadow" href="#worldnews">World News</a>
            </li>
        </ul>
    </div>
  )
}