export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-8 sm:mt-12 md:mt-16">
      <div className="container py-6 sm:py-8 px-4 sm:px-6 text-xs sm:text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">© {new Date().getFullYear()} Roshni Sodhi. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
