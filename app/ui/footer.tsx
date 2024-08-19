
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">
                    Construit avec <span className="text-blue-100">Next.js</span>, <span className="text-blue-100">TypeScript</span>, and <span className="text-blue-100">Tailwind</span>
                </p>
                <p>
                    Crée par <a className="underline text-blue-300 hover:text-blue-500" href="https://www.nicolastroadec.fr">Nicolas Troadec</a>
                </p>
                <p>
                    <a className="underline text-blue-300 hover:text-blue-500" href="https://github.com/Nicolastroadec/maps" target="_blank">Repo Github de cette app</a>
                </p>
            </div>
        </footer >
    );
};

export default Footer;
