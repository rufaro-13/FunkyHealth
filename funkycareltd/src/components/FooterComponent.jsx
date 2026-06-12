
import {Link} from 'react-router-dom'
export default function FooterComponent() {
  return (
    <div className='mt-0'>
        
<footer  className="relative bg-secondary-blue rounded-base shadow-xs border border-default ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-body sm:text-center">© 2026 Funkey Care Limited. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
        <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link to="/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
            <Link to="/licensing" className="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>
</div>

  );
}