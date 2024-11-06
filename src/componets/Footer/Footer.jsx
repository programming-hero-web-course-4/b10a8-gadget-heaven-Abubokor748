const Footer = () => {
  return (
    <div className="mt-16 bg-base-200">
      <div className="text-center my-6 pt-6">
        <h2 className="font-bold text-2xl">Gadget Heaven</h2>
        <p>Leading the way in cutting-edge Technology and Innovation</p>
      </div>
      <hr />
      <div className="p-2">
        <footer className="footer text-black p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-7">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
