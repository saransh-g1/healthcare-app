import DashLayout from "../../compo Doc/DashLayout/dashLayout"
import { Comic_Neue } from "next/font/google";

const comic= Comic_Neue({
  weight: '400',
  subsets: ['latin'],

})
export default function DashLay({children}: Readonly<{
    children: React.ReactNode;
  }>){
return(
    <html>
      <body  className={comic.className}>
        <div className="flex w-full ">
        <div className="w-1/5"><DashLayout ></DashLayout></div>
        <main className="w-4/5" id="main">{children}</main>
        </div>
      </body>
    </html>
)
}