import React, { useState } from "react";
import { Save, User } from "lucide-react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Product designer and developer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved Data:", formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
          Profile Settings
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
          Manage your account information and preferences
        </p>
      </div>

      {/* Personal Info Card */}
      <div className="border rounded-lg p-4 sm:p-6 md:p-8 space-y-6">

        {/* Header + Edit Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Personal Information
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Update your profile details
            </p>
          </div>

          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className="px-3 sm:px-4 py-1 sm:py-2 border rounded-md mt-2 sm:mt-0"
          >
            {isEditing ? (
              <span className="flex items-center gap-2 text-sm sm:text-base">
                <Save size={16} /> Save Changes
              </span>
            ) : (
              "Edit Profile"
            )}
          </button>
        </div>

        {/* Avatar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                className="h-full w-full object-cover"
                alt="avatar"
              />
            ) : (
              <User size={32} />
            )}
          </div>

          {isEditing && (
            <>
              <button
                onClick={() => document.getElementById("avatar").click()}
                className="px-3 py-1 border rounded text-sm sm:text-base"
              >
                Change Avatar
              </button>
              <input
                id="avatar"
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full text-sm sm:text-base"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full text-sm sm:text-base"
            placeholder="Last Name"
          />
        </div>

        <div className="flex flex-col gap-4">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full text-sm sm:text-base"
            placeholder="Email"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full text-sm sm:text-base"
            placeholder="Phone"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full text-sm sm:text-base"
            placeholder="Location"
          />
          <textarea
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full text-sm sm:text-base"
            placeholder="Bio"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
