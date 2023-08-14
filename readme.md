# Rhythm Studio Web Application


## <a href="https://64d932f3faf31947655eeccd--cute-profiterole-6adad9.netlify.app" target="_blank"> Live Link </a> 
#### admin login for - <br>

mail - admin@gmail.com <br>
pass - @Admin123456


This is the README file for the Rhythm Studio web application, which is a platform that offers various music courses. The application allows users to register as students, instructors, or administrators. It provides a user-friendly interface for users to explore, register for classes

## Features

1. **Registration & Login System**

   - Users can create an account by providing their name, email, password, and optional details.

2. **Homepage**

   - The homepage features a visually appealing top slider section with relevant text, information, messages, and pictures.
   - What We Offer. This section shows our facilities and services what we offer for our students
   - The popular classes section displays the top 6 classes based on the number of enrolled students.
   - The popular instructors section showcases the top 6 instructors based on the number of students in their classes.
  

3. **Instructors Page**

   - The instructors page lists all the instructors, displaying their image, name, email, and optional details.
   - Users can click on the "See Classes" button to view the classes taught by a specific instructor.

4. **Classes Page**

   - The classes page shows all approved classes, including their image, name, instructor name, available seats, and price.
   - Users can select a class, but the selection button is disabled if the user is not logged in, the class has no available seats, or the user is an admin or instructor.
   - Classes with no available seats are visually indicated with a red background.

5. **Student Dashboard**

   - This private dashboard is accessible only to students.
   - The "My Selected Classes" section displays the classes the student has booked, providing relevant information and options to delete or pay for the class.
   - The "My Enrolled Classes" section shows all the classes the student has successfully enrolled in.

6. **Payment**

   - Upon clicking the "Pay" button for a class in the "My Selected Classes" section, the student is redirected to the payment page to finalize the payment.
   - After successful payment, the available seats for the class are reduced by 1, and the class is moved to the "My Enrolled Classes" section.

7. **Instructor Dashboard**

   - This private dashboard is accessible only to instructors.
   - The "Add a Class" page allows instructors to create new classes by providing relevant details.
   - The "My Classes" section shows all the classes added by the instructor, including information such as pending/approved/denied status, total enrolled students, and options to provide feedback or update the class.

8. **Admin Dashboard**
   - This private dashboard is accessible only to administrators.
   - The "Manage Classes" page displays all the classes added by instructors, including information such as class image, name, instructor name, instructor email, available seats, price, and status.
   - Administrators can approve or deny classes and provide feedback to instructors.
   - The "Manage Users" page allows administrators to view user information and promote users to instructor or admin roles.

## Technologies Used

- Front-end: React, HTML, CSS
- Back-end: Node.js, Express.js
- Database: MongoDB
- Other node and react  Packages



## Live Demo

You can access the live demo of the Creative Design School web application [here](https://creative-design-school.web.app/).



Thank you . Let's Code Your Career, Happy Coding .
