import { useEffect } from "react";
import  {useLocation} from  "react-router-dom"

export default function ScrollToTop()  {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // send to top of page
        console.log('log - scroll to top');
    }, [pathname])

    return null;
}