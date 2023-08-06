import React from 'react';
import useEnrolled from '../../../hooks/useEnrolled';
import SectionTittle from '../../Shared/SectionTittle/SectionTittle';

const PaymentHistory = () => {

    const [enrolledClass] = useEnrolled()
    console.log(enrolledClass)


    return (
        <div className='w-full'>
            <SectionTittle sectionHeading={"Peyment History"} subHeading={"See Your"}></SectionTittle>

            <div className="w-full px-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Class Name</th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((classes, index) => (
              <tr key={classes._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classes.class_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classes.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                   {classes.transactionId}
                  </span>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                   {classes.date}
                  </span>
                </td>
                <td>${classes.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default PaymentHistory;