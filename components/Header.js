import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline"
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl mt-5">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="BADGES" Icon={BadgeCheckIcon}/>
                <HeaderItem title="PROFILE" Icon={UserIcon}/>
            </div>
            {/* Next JS image tag, automatically does lazy loading */}
            <Image 
            className="object-contain"
            src="https://links.papareact.com/ua6" 
            width={200} height={100} alt="tags"/>
        </header>
    )
}

export default Header
