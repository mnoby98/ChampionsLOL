export default function Nav({ onSearch }) {
  return (
    <div className="nav">
      <Logo />
    </div>
  );
}

function Logo() {
  return (
    <a
      className="logo"
      href="#">
      <img src="../league-of-legends-riot-games-logo-5.png" />
    </a>
  );
}
