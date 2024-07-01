import useMediaQuery from "./useMediaQuery";

export function useMobile() {
    return useMediaQuery("(max-width: 960px)")
}