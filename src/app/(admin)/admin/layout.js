/*import SideBar from "@/app/components/admin/SideBar";
import CardsAnalytics from "@/app/components/admin/dashbord/cardsAnalytics";
import Nav from '@/app/components/NavBar'
export default function AdminLayout() {
  return (
    <>
    <Nav />
    
    <div className="flex">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4 p-8">
        <CardsAnalytics />
      </div>
    </div>
    </>
  );
}*/
/*import SideBar from "@/app/components/admin/SideBar";
import CardsAnalytics from "@/app/components/admin/dashbord/cardsAnalytics";
import Nav from '@/app/components/NavBar';

export default function AdminLayout({ children }) {
  return (
    <div>
      <Nav />
      <div className="mt-4 flex">
        <SideBar />
        <CardsAnalytics />
      </div>
    </div>
  );
}*/
import SideBar from "@/app/components/admin/SideBar";
import CardsAnalytics from "@/app/components/admin/dashbord/cardsAnalytics";
import Nav from '@/app/components/NavBar';
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
export default async function AdminLayout({ children }) {
const session = await getServerSession(authOptions)
if (!session || session && session.user.role !== 'admin') {
    return (
        <section className='py-24'>
            <div className='container'>
            <h1 className='text-2xl font-bold'>
                You are not authorized to view this page
            </h1>
            </div>
        </section>
    )
    }
  return (
    <div>
      <Nav />
      <div style={{ display: 'flex' }}>
        <SideBar style={{ marginTop: '20rem' }} />
        <div style={{  flex: 8 }}>
          <div style={{ marginTop: '12rem' }}>
           
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}








