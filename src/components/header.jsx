function Header() {
    return  <nav className="black">
    <div className="container">
        <div className="nav-wrapper">
          <img className="logo" src="logo.png"  alt="" />
             <a href="!#" 
             className="brand-logo">Магазин Fortnite</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* <li><a href="!#">Repository</a></li> */}
          </ul>
        </div>
    </div>
  </nav>
}
export { Header } ;