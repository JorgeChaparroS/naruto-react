import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <section className="background-general">
                <section className="content-page">
                    {children}
                </section>
                <Footer></Footer>
            </section>
        </>
    );
}