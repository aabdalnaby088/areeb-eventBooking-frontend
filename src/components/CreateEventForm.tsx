import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateEvent } from "../hooks/useCreateEvent";
import styled from "styled-components";
import { X } from "lucide-react";

type createEventFormProps = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateEventForm = ({ showForm, setShowForm }: createEventFormProps) => {
  const { mutate:createEvent, isPending } = useCreateEvent();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      price: "",
      category: "",
      image: null as File | null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      location: Yup.string().required("Location is required"),
      price: Yup.number().required("Price is required"),
      category: Yup.string().required("Category is required"),
      image: Yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Combine date and time into ISO format
      const combinedDateTime = values.date && values.time
        ? new Date(`${values.date}T${values.time}:00`).toISOString()
        : null;
      
      if (!combinedDateTime || !values.image) {
        console.error("Missing required fields");
        return;
      }
      
      // Create payload matching the CreateEventPayload type
      const eventPayload = {
        title: values.title,
        description: values.description,
        date: combinedDateTime,
        venue: values.location, // Note: our form field is "location" but API expects "venue"
        price: values.price,
        category: values.category,
        image: values.image,
      };
      
    createEvent(eventPayload);
      
      setShowForm(false);
      resetForm();
    },
  });

  if (!showForm) return null;

  return (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">

    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Create New Event</h2>
        <button
          onClick={() => setShowForm(false)}
          className="text-gray-500 hover:text-red-600 transition"
        >
          <X />
        </button>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4 flex flex-col">
        <input
          name="title"
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          className="border-2 rounded-lg p-2 border-[#1D2134]"
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-sm text-red-600">{formik.errors.title}</p>
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          className="border-2 rounded-lg p-2 border-[#1D2134]"
        />
        {formik.touched.description && formik.errors.description && (
          <p className="text-sm text-red-600">{formik.errors.description}</p>
        )}

        <input
          type="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          className="border-2 rounded-lg p-2 border-[#1D2134]"
        />
        {formik.touched.date && formik.errors.date && (
          <p className="text-sm text-red-600">{formik.errors.date}</p>
        )}

        <input
          type="time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          className="border-2 rounded-lg p-2 border-[#1D2134]"
        />
        {formik.touched.time && formik.errors.time && (
          <p className="text-sm text-red-600">{formik.errors.time}</p>
        )}

        <input
          name="location"
          placeholder="Location"
          value={formik.values.location}
          onChange={formik.handleChange}
          className="border-2 rounded-lg p-2 border-[#1D2134]"
        />
        {formik.touched.location && formik.errors.location && (
          <p className="text-sm text-red-600">{formik.errors.location}</p>
        )}

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          className="border-2 rounded-lg p-2 border-[#1D2134]"
        />
        {formik.touched.price && formik.errors.price && (
          <p className="text-sm text-red-600">{formik.errors.price}</p>
        )}

        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          className="border-2 rounded-lg p-2 border-[#1D2134] bg-white"
        >
          <option value="">Select Category</option>
          <option value="Music">Music</option>
          <option value="Tech">Tech</option>
          <option value="Art">Art</option>
          <option value="Sports">Sports</option>
        </select>
        {formik.touched.category && formik.errors.category && (
          <p className="text-sm text-red-600">{formik.errors.category}</p>
        )}

        <StyledWrapper>
          <label htmlFor="file-input" className="drop-container">
            <span className="drop-title">Upload Image</span>
            <input
              type="file"
              accept="image/*"
              id="file-input"
              onChange={(event) =>
                formik.setFieldValue("image", event.currentTarget.files?.[0])
              }
            />
          </label>
          {formik.touched.image && formik.errors.image && (
            <p className="text-sm text-red-600 text-center">{formik.errors.image}</p>
          )}
        </StyledWrapper>

        <button
          type="submit"
          disabled={isPending}
          className="bg-[#1D2134] rounded-xl text-white px-4 py-2 hover:bg-[#353c5f]"
        >
          {isPending ? "Creating..." : "Create Event"}
        </button>

      </form>
    </div>
    </div>

  );
};

export default CreateEventForm;

// styled wrapper stays the same
const StyledWrapper = styled.div`
  .form-title {
    color: #000000;
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
  }
  .form-paragraph {
    margin-top: 10px;
    font-size: 0.9375rem;
    color: rgb(105, 105, 105);
    text-align: center;
  }
  .drop-container {
    background-color: #fff;
    position: relative;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 2.1875rem;
    border-radius: 10px;
    border: 2px dashed #1d2134;
    color: #444;
    cursor: pointer;
    transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  }
  .drop-container:hover {
    background: rgba(0, 140, 255, 0.164);
    border-color: rgba(17, 17, 17, 0.616);
  }
  .drop-container:hover .drop-title {
    color: #222;
  }
  .drop-title {
    color: #444;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    transition: color 0.2s ease-in-out;
  }
  #file-input {
    width: 350px;
    max-width: 100%;
    color: #444;
    padding: 2px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid rgba(8, 8, 8, 0.288);
  }
  #file-input::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #1d2134;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
  #file-input::file-selector-button:hover {
    background: #0d45a5;
  }
`;