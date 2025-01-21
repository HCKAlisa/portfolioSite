import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
    page: string;
    selectedPage: SelectedPage,
    setSelectedPage: (value:SelectedPage) => void
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePageName = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink 
    href={`#${lowerCasePageName}`} 
    className={`${selectedPage === lowerCasePageName ? "text-orange-100" : ""} text-xl transition duration-500 hover:text-yellow-100`} 
    onClick={() => setSelectedPage(lowerCasePageName)}>
        {page}
    </AnchorLink>
  )
}

export default Link