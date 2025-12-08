// import ModalLayout from "../ModalLayout";
// import { useEffect, useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { useAddEntryMutation } from "../../redux/api/entriesApiSlice";
// import { toast } from "react-toastify";

// const AddEntry = () => {
//   const [open, setOpen] = useState(false);
//   const [addEntry, { isLoading }] = useAddEntryMutation();

//   const [formData, setFormData] = useState({
//     title: "",
//     mood: "🙂",
//     content: "",
//     date: new Date().toISOString().slice(0, 10),
//   });

//   useEffect(() => {
//     const initialData = {
//       title: "",
//       mood: "🙂",
//       content: "",
//       date: new Date().toISOString().slice(0, 10),
//     };
//     setFormData(initialData);
//   }, [open]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await addEntry(formData).unwrap();
//       setOpen(false);
//       toast.success(response.message);
//     } catch (error) {
//       toast.error(error.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="btn btn-circle w-16 h-16 bg-primary text-white hover:scale-105 animate-bounce hover:cursor-pointer"
//       >
//         <FaPlus className="text-3xl" />
//       </button>

//       <ModalLayout isOpen={open} close={() => setOpen(false)}>
//         <div className="card-body">
//           <h2 className="card-title block text-center text-lg mb-2">
//             Add New Entry
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="title">
//                 Entry Title <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 id="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="input w-full rounded-lg my-3"
//                 required
//                 placeholder="Give your entry a title"
//               />
//             </div>

//             <div className="flex gap-5 justify-center items-center">
//               <div>
//                 <label htmlFor="date">
//                   Select Date <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   className="input rounded-lg my-3"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="mood">
//                   Your Mood <span className="text-red-500">*</span>
//                 </label>

//                 <select
//                   name="mood"
//                   id="mood"
//                   value={formData.mood}
//                   onChange={handleChange}
//                   className="select rounded-lg my-3"
//                 >
//                   <option value="🙂">🙂 Happy</option>
//                   <option value="😔">😔 Sad</option>
//                   <option value="😡">😡 Angry</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label htmlFor="content">
//                 Describe Your Day <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="content"
//                 id="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 className="textarea w-full rounded-lg my-3 h-50"
//                 required
//                 placeholder="Write about your day, thoughts, or experiences"
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-full rounded-lg mt-3"
//               disabled={isLoading}
//             >
//               {isLoading ? "Saving..." : "Save Entry"}
//             </button>
//           </form>
//         </div>
//       </ModalLayout>
//     </>
//   );
// };
// export default AddEntry;
import ModalLayout from "../ModalLayout";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAddEntryMutation } from "../../redux/api/entriesApiSlice";
import { toast } from "react-toastify";

const AddEntry = () => {
  const [open, setOpen] = useState(false);
  const [addEntry, { isLoading }] = useAddEntryMutation();

  const [formData, setFormData] = useState({
    title: "",
    mood: "🙂",
    content: "",
    date: new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    const initialData = {
      title: "",
      mood: "🙂",
      content: "",
      date: new Date().toISOString().slice(0, 10),
    };
    if (open) {
      setFormData(initialData);
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addEntry(formData).unwrap();
      setOpen(false);
      toast.success(response.message || "Entry added successfully");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      {/* Floating Add Button */}
      <button
        onClick={() => setOpen(true)}
        className="btn btn-circle w-16 h-16 bg-primary text-white hover:scale-105 animate-bounce hover:cursor-pointer shadow-lg"
      >
        <FaPlus className="text-3xl" />
      </button>

      {/* Modal Layout */}
      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <div className="card-body">
          <h2 className="card-title block text-center text-lg mb-2">
            Add New Entry
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div>
              <label htmlFor="title" className="font-medium">
                Entry Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="input w-full rounded-lg my-3"
                required
                placeholder="Give your entry a title"
              />
            </div>

            {/* Date + Mood */}
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
              {/* Date */}
              <div className="w-full">
                <label htmlFor="date" className="font-medium">
                  Select Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="input w-full rounded-lg my-3"
                  required
                />
              </div>

              {/* Mood */}
              <div className="w-full">
                <label htmlFor="mood" className="font-medium">
                  Your Mood <span className="text-red-500">*</span>
                </label>
                <select
                  name="mood"
                  id="mood"
                  value={formData.mood}
                  onChange={handleChange}
                  className="select w-full rounded-lg my-3"
                  required
                >
                  <option value="🙂">🙂 Happy</option>
                  <option value="😔">😔 Sad</option>
                  <option value="😡">😡 Angry</option>
                  <option value="😍">😍 In Love</option>
                  <option value="😎">😎 Confident</option>
                  <option value="😴">😴 Tired</option>
                  <option value="🤒">🤒 Sick</option>
                  <option value="😇">😇 Grateful</option>
                  <option value="🤔">🤔 Thoughtful</option>
                  <option value="😤">😤 Frustrated</option>
                  <option value="🥳">🥳 Excited</option>
                  <option value="😢">😢 Emotional</option>
                  <option value="😌">😌 Relaxed</option>
                  <option value="🤯">🤯 Stressed</option>
                  <option value="😐">😐 Neutral</option>
                  <option value="🤗">🤗 Hopeful</option>
                </select>
              </div>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="font-medium">
                Describe Your Day <span className="text-red-500">*</span>
              </label>
              <textarea
                name="content"
                id="content"
                value={formData.content}
                onChange={handleChange}
                className="textarea w-full rounded-lg my-3 h-40"
                required
                placeholder="Write about your day, thoughts, or experiences"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full rounded-lg mt-3"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Entry"}
            </button>
          </form>
        </div>
      </ModalLayout>
    </>
  );
};

export default AddEntry;
