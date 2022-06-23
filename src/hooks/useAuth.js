import { useCookies } from "react-cookie"

const useAuth = () => {
    const [cookies] = useCookies(['JWT']);
    return cookies.JWT !== undefined ;
}

export default useAuth