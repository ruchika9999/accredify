const express = require("express");

const getUser = (req, res) => {
  const user = {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    profile_picture_url: "https://placehold.co/600x400.png",
    email_verified_at: "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
    identification_number: "S9****567A",
    current_organisation: {
      id: 2,
      name: "Sample Bank ABC",
      logo_url: "https://placehold.co/600x400.png",
      is_personal: false, // true if Personal User
    },
  };

  res.status(200).json(user);
};

module.exports = { getUser };
