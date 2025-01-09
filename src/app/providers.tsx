"use client"
import { Provider } from "react-redux";
import { store } from "./(functionalty)/Store/store";


function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
        {children}
    </Provider> 
  )
}

export default Providers