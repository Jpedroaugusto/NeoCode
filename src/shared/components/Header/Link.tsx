export default function Link({ type, link, legend, src, onClick }) {
  let key = Math.random();

  switch (type) {
    case "text":
      return (
        <li key={key} className="item-list">
          <a className="link" onClick={onClick} href={link}>
            {legend}
          </a>
        </li>
      );
    case "image":
      return (
        <li key={key} className="item-list image-list">
          <a className="link" onClick={onClick} href={link}>
            <img src={src} href={link} />
          </a>
        </li>
      );
    case "search":
      return (
        <li key={key} className="search-item">
          <button>
            <img width="25" src="images/svg/sociais/search.svg" />
          </button>
          <input type="search" id="search-field" placeholder="BUSCAR" />
        </li>
      );
    case "list":
      return (
        <li key={key} className="item-list">
          <ul style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <li className="social">
              <a href="">
                <img width="22" src="images/svg/sociais/instagram.svg" />
              </a>
            </li>
            <li className="social">
              <a href="">
                <img width="22" src="images/svg/sociais/youtube.svg" />
              </a>
            </li>
          </ul>
        </li>
      );
  }
}
