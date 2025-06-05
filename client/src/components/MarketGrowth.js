import React from 'react';
import colors from '../constants/colors';

function MarketGrowth() {
  return (
    <section id="market-growth" className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col justify-center items-center">
          <div className="text-6xl font-extrabold" style={{color: colors.coral}}>300%</div>
          <h3 className="mt-2 text-xl font-bold">Job Growth</h3>
          <p className="mt-2 text-sm" style={{color: colors.blue}}>Projected increase in demand for Generative AI roles over the next 24 months. The market is expanding at an unprecedented rate.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col justify-center items-center">
          <div className="text-6xl font-extrabold" style={{color: colors.yellow}}>$175k</div>
          <h3 className="mt-2 text-xl font-bold">Median Salary</h3>
          <p className="mt-2 text-sm" style={{color: colors.blue}}>Average starting salary for qualified engineers, reflecting the high value placed on this specialized expertise.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col justify-center items-center">
          <div className="text-6xl font-extrabold" style={{color: colors.green}}>Top 5</div>
          <h3 className="mt-2 text-xl font-bold">In-Demand Role</h3>
          <p className="mt-2 text-sm" style={{color: colors.blue}}>Ranked among the top 5 most sought-after tech roles globally, highlighting its critical importance across industries.</p>
        </div>
      </div>
    </section>
  );
}

export default MarketGrowth;
