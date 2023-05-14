const express = require("express");

const getCareerGoal = (req, res) => {
  const goal = [
    {
      id: 1,
      name: "Account Manager",
      description:
        "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
      category: "Sales and Marketing",
      type: "technical", // or "core"
      progress: 35, // integer ranging from 0 to 100
    },
  ];

  res.status(200).json(goal);
};

module.exports = { getCareerGoal };
