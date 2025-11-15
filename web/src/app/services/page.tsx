import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Services</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold">Service One</h2>
            <p className="mt-2 text-gray-600">To be replaced with content from roshnisodhi.com.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Service Two</h2>
            <p className="mt-2 text-gray-600">To be replaced with content from roshnisodhi.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
