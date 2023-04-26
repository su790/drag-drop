import {ReactNode} from "react";

type Props = {
    children: ReactNode

}
export default function Square({black,children}:Props) {
    const fill = black ? 'black': 'white';
    const stroke = black ? 'white':'black';
    return <div style={{color:stroke,width:'100vw',height:'100vh',backgroundColor: fill}}>{children}</div>
}