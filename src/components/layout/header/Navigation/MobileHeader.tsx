import { HeaderItem } from "@/types/menu";
import { Link } from "react-router-dom";

interface MobileHeaderProps {
  item: HeaderItem;
  onClick?: () => void; 
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ item, onClick }) => {
  return (
    <Link
      to={item.href}
      onClick={onClick}
      className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
    >
      <li className={`rounded-md w-full p-2 px-4`}>
        {item.label}
      </li>
    </Link>
  );
};

export default MobileHeader;
