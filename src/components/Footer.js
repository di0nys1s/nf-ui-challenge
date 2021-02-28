function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <p>{currentYear} &copy; NETFRONT</p>

      <ul>
        <span>Privacy</span>
        <span>|</span>
        <span>Terms & Conditions</span>
        <span>|</span>
        <span>Contact</span>
      </ul>
    </footer>
  );
}

export default Footer;
