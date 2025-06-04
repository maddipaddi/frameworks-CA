/**
 * Footer component displays a fixed footer at the bottom of the page.
 * It shows the current year and the application name "ClicketyCart".
 *
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */

function Footer() {
  return (
    <footer className="text-center bg-[#132661] text-white fixed bottom-0 w-full py-2">
      <p>&copy; {new Date().getFullYear()} ClicketyCart</p>
    </footer>
  );
}

export default Footer;
