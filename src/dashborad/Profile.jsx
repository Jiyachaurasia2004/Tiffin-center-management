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
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent font-bold">Profile Settings</h1>
        <p className="text-gray-500 mt-2">
          Manage your account information and preferences
        </p>
      </div>

 
      <div className="border rounded-lg p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl text-gray-800 font-semibold">Personal Information</h2>
            <p className="text-sm text-gray-500">Update your profile details</p>
          </div>

          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className="px-4 py-2 border rounded-md"
          >
            {isEditing ? (
              <span className="flex items-center gap-2">
                <Save size={16} /> Save Changes
              </span>
            ) : (
              "Edit Profile"
            )}
          </button>
        </div>

        <div className="flex items-center gap-4">
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
                className="px-3 py-1 border rounded"
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

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded"
          />
        </div>

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={!isEditing}
          className="border p-2 rounded w-full"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={!isEditing}
          className="border p-2 rounded w-full"
        />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          disabled={!isEditing}
          className="border p-2 rounded w-full"
        />

        <textarea
          name="bio"
          rows={4}
          value={formData.bio}
          onChange={handleChange}
          disabled={!isEditing}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Security */}
      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">Account Security</h2>
        <button className="mt-4 px-4 py-2 border rounded">
          Change Password
        </button>
      </div>

     
    </div>
  );
}

export default Profile;
