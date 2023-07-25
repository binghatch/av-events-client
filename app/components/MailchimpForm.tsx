// "use client";

// import { FormEvent, useState } from "react";

// export default function MailchimpForm() {
//   const [formData, setFormData] = useState({
//     EMAIL: '',
//     FNAME: '',
//     LNAME: '',
//   });

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(
//         'https://assemblyventures.us20.list-manage.com/subscribe/post?u=a221f11e4ce2b090de876eb06&id=ad618ba84f&f_id=00435be6f0',
//         {
//           mode: 'no-cors',
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           body: new URLSearchParams(formData).toString(),
//         }
//       );

//       console.log('Response:', response);

//       // Clear the form data after successful submission
//       setFormData({
//         EMAIL: '',
//         FNAME: '',
//         LNAME: '',
//       });

//       // Add any additional success handling here
//     } catch (error) {
//       console.error('Error:', error);
//       // Add error handling here
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="validate" target="_self" noValidate>
//         <div className="">
//           <span className="asterisk">*</span> indicates required
//         </div>
//         <div className="">
//           <label htmlFor="mce-EMAIL" className="block mb-2">
//             Email Address <span className="asterisk">*</span>
//           </label>
//           <input
//             type="email"
//             name="EMAIL"
//             className="border rounded py-2 px-3 w-full text-black"
//             id="mce-EMAIL"
//             required
//             value={formData.EMAIL}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="">
//           <label htmlFor="mce-FNAME" className="block mb-2">
//             First Name
//           </label>
//           <input
//             type="text"
//             name="FNAME"
//             className="border rounded py-2 px-3 w-full text-black"
//             id="mce-FNAME"
//             value={formData.FNAME}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="">
//           <label htmlFor="mce-LNAME" className="block mb-2">
//             Last Name
//           </label>
//           <input
//             type="text"
//             name="LNAME"
//             className="border rounded py-2 px-3 w-full text-black"
//             id="mce-LNAME"
//             value={formData.LNAME}
//             onChange={handleChange}
//           />
//         </div>
//         <div hidden>
//           <input type="hidden" name="tags" value="3437052" />
//         </div>
//         <div id="mce-responses" className="clearfalse">
//           <div
//             className="response"
//             id="mce-error-response"
//             style={{ display: 'none' }}
//           ></div>
//           <div
//             className="response"
//             id="mce-success-response"
//             style={{ display: 'none' }}
//           ></div>
//         </div>
//         <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
//           <input
//             type="text"
//             name="b_a221f11e4ce2b090de876eb06_ad618ba84f"
//             tabIndex={-1}
//             defaultValue=""
//           />
//         </div>
//         <div className="">
//           <input
//             type="submit"
//             name="subscribe"
//             id="mc-embedded-subscribe"
//             className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             value="Subscribe"
//           />
//         </div>
//     </form>
//   );
// };