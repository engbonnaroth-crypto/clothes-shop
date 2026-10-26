function Footer() {
  return (
    <footer className="bg-primary py-8 text-white">
      <div className="max-w-[90%] lg:max-w-5xl m-auto flex flex-col lg:flex-row justify-between items-center">
        <h4>Copyright &#169; Master IT</h4>
        <ul className="flex justify-items-center gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
