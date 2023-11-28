// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import iconEleganceWeb from '../../public/eleganceweb.png';

export default function EleganceWebLogo() {
  return (
    <div
      className={`${lusitana.className} h-full w-full flex flex-col justify-center items-center`}
    >
      <Image
        src={iconEleganceWeb}
        alt='Icono principal'
        width={80}
        height={60}
      />
      <p className="text-2xl">EleganceWeb</p>
    </div>
  );
}
