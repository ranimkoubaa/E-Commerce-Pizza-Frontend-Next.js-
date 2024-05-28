'use client'
import AreaChartPlot from "./areaChartPlot";
import AreaUsersList from "./usersTable";
const CardsAnalytics = ({users})  => {
    return (
      <>
        <section>
          <div className="flex m-4 gap-2">
            <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
              <div>
                <p className="text-white font-bold">Total des retours</p>
                <p className="py-4 font-bold text-yellow-500">50,000 TND</p>
                <p className="text-green-300">+24.5%</p>
              </div>
            </div>
            <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
              <div>
                <p className="text-white font-bold">Total des ventes</p>
                <p className="py-4 font-bold text-yellow-500">30,000 TND</p>
                <p className="text-green-300">+34.5%</p>
              </div>
            </div>
            <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
              <div>
                <p className="text-white font-bold">Total des abonnements</p>
                <p className="py-4 font-bold text-yellow-500">20,000 TND</p>
                <p className="text-green-300">+24.5%</p>
              </div>
            </div>
            <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
              <div>
                <p className="text-white font-bold">Total des commandes</p>
                <p className="py-4 font-bold text-yellow-500">60,000 TND</p>
                <p className="text-red-300">-14.5%</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex m-4 gap-2">
          <div className="w-full h-[300px] bg-gray-700 rounded">
          <AreaChartPlot />
          </div>
        </section>
        <section className="flex m-4 gap-2">
          <div className="w-full h-[250px] bg-gray-700 rounded">
          <AreaUsersList users={users}/>
          </div>
        </section>
      </>
    );
  };
  export default CardsAnalytics;
  