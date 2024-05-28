/*import React from 'react'
import CardsAnalytics from '@/app/components/admin/dashbord/cardsAnalytics'
const page = () => {
return (
<div className="container">
<CardsAnalytics/>
</div>
)
}
export default page*/
import React from 'react';
import CardsAnalytics from '@/app/components/admin/dashbord/cardsAnalytics';

async function getUsers() {
  const res = await fetch('http://localhost:3001/api/users');
  return res.json();
}

const Page = async () => {
  const users = await getUsers();
  return (
    <div className="container">
      <CardsAnalytics users={users} />
    </div>
  );
};

export default Page;
