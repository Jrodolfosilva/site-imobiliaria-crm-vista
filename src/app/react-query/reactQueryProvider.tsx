"use client"

import {
QueryClient,
QueryClientProvider
} from "react-query"

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false,
            staleTime:1000 * 60 * 40,
        }
    }
})

const ReactQueryClientProvider = ({children}:{children:React.ReactNode})=>{

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryClientProvider