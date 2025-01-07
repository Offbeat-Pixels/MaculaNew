import React, { useState } from "react";
import { styles } from "../style";
import ExcelJS from "exceljs";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contact Form Data");

    // Set the columns for the worksheet
    worksheet.columns = [
      { header: "Name", key: "name", width: 30 },
      { header: "Phone", key: "phone", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Message", key: "message", width: 50 },
    ];

    // Add form data as a row in the worksheet
    worksheet.addRow(formData);

    // Generate Excel file and download it
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer and trigger the download
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create an invisible link to trigger the file download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact_form_data.xlsx";
    link.click();
  };

  return (
    <div className="w-full min-h-fit p-4 md:p-8 lg:p-12 bg-contact-pattern  bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl md:pl-14 shadow-none">
        <div className="p-0">
          <p className={`${styles.sectionHeadText} text-[3rem] text-gray-500`}>
            Let's <span className="text-white md:text-[#6B8E23] italic">Talk</span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 border bg-white rounded-lg mr-auto md:w-1/2 p-5"
          >
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="Phone number">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 transition-colors"
              />
            </div>
            <label htmlFor="Message">Message</label>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px] border w-full border-gray-200 bg-transparent rounded-xl px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400 resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



// import React from "react";

// export default function ContactForm() {
//   return (
//     <div className="w-full min-h-fit p-4 md:p-8 lg:p-12 bg-contact-pattern  bg-cover bg-no-repeat bg-center">
//       <div className="max-w-7xl pl-14 shadow-none">
//         <div className="p-0">
//           <p className="text-3xl font-bold text-center mb-4">Let's Talk</p>
//           <iframe
//             src="https://docs.google.com/forms/d/e/1FAIpQLSfaaS_8jAz4Z6BaPGd1CzX0bozbcXHUTYS5pU_K9prFDInBXw/viewform?embedded=true"
//             width="540"
//             height="557"
//             frameborder="10"
//             marginheight="10"
//             marginwidth="10"
//           >
//             Loading…
//           </iframe>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { gapi } from "gapi-script";

// const API_KEY = import.meta.env.VITE_API_KEY;
// const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
// const SCOPE = import.meta.env.VITE_SCOPE;

// function ContactForm() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Load the Google API client
//     function start() {
//       gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         scope: SCOPE,
//       });
//     }

//     // Load the Google Sheets client library
//     gapi.load("client:auth2", start);
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const GoogleAuth = gapi.auth2.getAuthInstance();
//       const user = await GoogleAuth.signIn();
//       setIsLoggedIn(true);
//       console.log("Logged in successfully", user);
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Failed to sign in with Google.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLoggedIn) {
//       alert("Please sign in with Google first!");
//       return;
//     }

//     // Get form data
//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       phone: e.target.phone.value,
//       message: e.target.message.value,
//     };

//     // Write data to Google Sheets
//     await writeToSheet(formData);
//   };

//   const writeToSheet = async (formData) => {
//     const spreadsheetId = "1lwG648nZYBY6bxCxRygaNmC9lEdp4AVyL8_oL5uL2IY"; // Your Google Sheets ID
//     const range = "Sheet1!A:A"; // Use column A to append new data

//     const values = [
//       [formData.name, formData.email, formData.phone, formData.message],
//     ];

//     const resource = {
//       values,
//     };

//     try {
//       await gapi.client.sheets.spreadsheets.values.append({
//         spreadsheetId,
//         range,
//         valueInputOption: "RAW",
//         resource,
//       });
//       alert("Data submitted successfully!");
//     } catch (error) {
//       console.error("Error writing to Google Sheets", error);
//       alert("Failed to submit data.");
//     }
//   };

//   return (
//     <div>
//       {!isLoggedIn && (
//         <button onClick={handleLogin}>Sign In with Google</button>
//       )}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" required />
//         <input type="email" name="email" placeholder="Email" required />
//         <input type="text" name="phone" placeholder="Phone" required />
//         <textarea name="message" placeholder="Message" required></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
