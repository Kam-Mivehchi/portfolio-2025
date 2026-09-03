import { BrandMark } from './BrandMark';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { user } from '@/constants/user';

const Navbar = () => (
  <header className="sticky top-0 z-10 bg-cream/70 px-6 py-5 backdrop-blur-[16px] lg:px-14">
    <div className="mx-auto flex max-w-page items-center justify-between">
      <BrandMark />
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <a
        href={user.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden rounded-full bg-coral px-[22px] py-3 text-sm font-bold text-white transition-[transform,box-shadow] duration-300 ease-hover hover:-translate-y-0.5 hover:shadow-coral lg:block">
        Resume ↗
      </a>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  </header>
);

export default Navbar;
