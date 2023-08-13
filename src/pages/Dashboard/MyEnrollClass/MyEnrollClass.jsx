
import useEnrolled from '../../../hooks/useEnrolled';
import SectionTittle from '../../Shared/SectionTittle/SectionTittle';

const MyEnrollClass = () => {

    const [enrolledClass] = useEnrolled()
    return (
      
           <div className="w-full px-10">
      <div className="flex justify-evenly items-center">
        <SectionTittle sectionHeading={"My Enroll CLass"}></SectionTittle>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th></th>
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
                    {classes.instructor}
                  </span>
                </td>
                <td>${classes.price}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        
    );
};

export default MyEnrollClass;