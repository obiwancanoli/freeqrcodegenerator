const Footer = () => {

const currentYear = new Date().getFullYear();


    return (
        <footer>
            <h3>© {currentYear} Daniel Murillo Productions</h3>
            <nav>
                <a href="https://github.com/obiwancanoli" target="_blank">GitHub</a>
            </nav>
        </footer>
    );
}
 
export default Footer;