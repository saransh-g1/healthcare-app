import DashLayout from "../../components/DashLayout/dashLayout"
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
        <div className="flex w-full h-full">
          <div className="w-1/5 md:block  hidden"><DashLayout></DashLayout></div>
        <main className="md:w-4/5 w-full">
        {children}
        </main>
        </div>
      </body>
    </html>
)
}